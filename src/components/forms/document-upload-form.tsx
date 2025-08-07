'use client';

import { useState, useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ApplicationForm, UploadedDocument } from '@/types';
import { FILE_UPLOAD } from '@/lib/constants';
import { Upload, File, X, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { toast } from 'sonner';

interface DocumentUploadFormProps {
  form: UseFormReturn<ApplicationForm>;
}

export function DocumentUploadForm({ form }: DocumentUploadFormProps) {
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [isUploading, setIsUploading] = useState(false);

  const watchedDocuments = form.watch('documentUpload.documents') || [];

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsUploading(true);
    
    for (const file of acceptedFiles) {
      // Validate file size
      if (file.size > FILE_UPLOAD.maxSize) {
        toast.error(`File ${file.name} is too large. Maximum size is 5MB.`);
        continue;
      }

      // Validate file type
      if (!FILE_UPLOAD.allowedTypes.includes(file.type)) {
        toast.error(`File ${file.name} has an unsupported format.`);
        continue;
      }

      const fileId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      // Simulate upload progress
      setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
      
      // Simulate file upload with progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setUploadProgress(prev => ({ ...prev, [fileId]: progress }));
      }

      // Create uploaded document object
      const uploadedDoc: UploadedDocument = {
        id: fileId,
        name: file.name,
        type: file.type,
        size: file.size,
        url: URL.createObjectURL(file), // In real app, this would be the server URL
        uploadedAt: new Date().toISOString(),
        status: 'pending'
      };

      // Add to form data
      const currentDocs = form.getValues('documentUpload.documents') || [];
      form.setValue('documentUpload.documents', [...currentDocs, uploadedDoc]);
      
      // Remove from progress tracking
      setUploadProgress(prev => {
        const newProgress = { ...prev };
        delete newProgress[fileId];
        return newProgress;
      });

      toast.success(`${file.name} uploaded successfully`);
    }
    
    setIsUploading(false);
  }, [form]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxSize: FILE_UPLOAD.maxSize,
    multiple: true
  });

  const removeDocument = (documentId: string) => {
    const currentDocs = form.getValues('documentUpload.documents') || [];
    const updatedDocs = currentDocs.filter(doc => doc.id !== documentId);
    form.setValue('documentUpload.documents', updatedDocs);
    toast.success('Document removed');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusIcon = (status: UploadedDocument['status']) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <File className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusBadge = (status: UploadedDocument['status']) => {
    switch (status) {
      case 'approved':
        return <Badge variant="default" className="bg-green-100 text-green-800">Approved</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Pending Review</Badge>;
    }
  };

  const requiredDocuments = [
    'Valid Passport (Photo Page)',
    'Passport-sized Photographs',
    'Completed Application Form',
    'Proof of Financial Support',
    'Travel Itinerary',
    'Travel Insurance (if required)',
    'Invitation Letter (if applicable)',
    'Employment Letter (if applicable)'
  ];

  return (
    <Form {...form}>
      <div className="space-y-6">
        {/* Required Documents Checklist */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-3">Required Documents Checklist:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-blue-800">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* File Upload Area */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive 
              ? 'border-primary bg-primary/5' 
              : 'border-muted-foreground/25 hover:border-primary/50'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          {isDragActive ? (
            <p className="text-lg font-medium">Drop the files here...</p>
          ) : (
            <div>
              <p className="text-lg font-medium mb-2">
                Drag & drop files here, or click to select
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Supported formats: JPG, PNG, PDF, DOC, DOCX (Max 5MB each)
              </p>
              <Button type="button" variant="outline">
                Choose Files
              </Button>
            </div>
          )}
        </div>

        {/* Upload Progress */}
        {Object.keys(uploadProgress).length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Uploading...</h4>
            {Object.entries(uploadProgress).map(([fileId, progress]) => (
              <div key={fileId} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Uploading file...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            ))}
          </div>
        )}

        {/* Uploaded Documents */}
        {watchedDocuments.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-medium">Uploaded Documents ({watchedDocuments.length})</h4>
            <div className="space-y-3">
              {watchedDocuments.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(doc.status)}
                    <div>
                      <div className="font-medium">{doc.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatFileSize(doc.size)} • Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}
                      </div>
                      {doc.status === 'rejected' && doc.rejectionReason && (
                        <div className="text-sm text-red-600 mt-1">
                          Reason: {doc.rejectionReason}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(doc.status)}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(doc.url, '_blank')}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDocument(doc.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Notes */}
        <FormField
          control={form.control}
          name="documentUpload.additionalNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Any additional information about your documents or special circumstances..."
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Use this space to provide any additional context about your documents
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Document Guidelines */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-medium text-yellow-900 mb-2">Document Guidelines:</h4>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• All documents must be clear and legible</li>
            <li>• Passport photos should meet official requirements (recent, white background)</li>
            <li>• Financial documents should be recent (within 3 months)</li>
            <li>• All foreign language documents must include certified translations</li>
            <li>• Ensure all documents are in color (not black and white copies)</li>
            <li>• File names should be descriptive (e.g., &ldquo;passport-photo-page.pdf&rdquo;)</li>
          </ul>
        </div>
      </div>
    </Form>
  );
}
