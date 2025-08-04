import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  User,
  CheckCircle,
  Clock,
  Calendar,
  FileText,
  CreditCard,
  Shield,
  Star,
  Phone,
} from "lucide-react"
import { getDestinationBySlug } from "../../data/destination-data"

interface PageProps {
  params: {
    slug: string
  }
}

export default function DestinationPage({ params }: PageProps) {
  const destination = getDestinationBySlug(params.slug)

  if (!destination) {
    notFound()
  }

  const { card, location, visa, pricing, content } = destination

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">atlys</span>
                <Badge className="bg-blue-600 text-white text-xs">VISAS ON TIME</Badge>
              </div>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search countries"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                On Time Guaranteed
              </Badge>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={content?.heroImage || card?.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name} Visa for Indians</h1>
            {visa?.guaranteedDays !== undefined && visa.guaranteedDays > 0 && (
              <div className="flex items-center justify-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5" />
                <span className="text-lg">Visa guaranteed in {visa.guaranteedDays} days</span>
              </div>
            )}
            {card?.visaInfo && (
              <div className="flex items-center justify-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5" />
                <span className="text-lg">{card.visaInfo}</span>
              </div>
            )}
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              Start Application
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Authorization Badge */}
            <div className="flex items-center gap-4">
              <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Atlys is authorized by the Government of {destination.country}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                {card?.date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {card.date}
                  </div>
                )}
                {card?.time && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {card.time}
                  </div>
                )}
              </div>
            </div>

            {/* Rating Section */}
            {card?.rating && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{card.rating}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(card.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        Loved and Trusted by {card.reviewCount || "thousands of"} Indians
                      </h3>
                      <p className="text-gray-600">Rated 5 stars by moms, newlyweds, and last-minute planners</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Visa Information */}
            {visa && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">{destination.name} Visa Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {visa.visaType && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Visa Type:</p>
                          <p className="font-semibold">{visa.visaType}</p>
                        </div>
                      </div>
                    )}
                    {visa.stayDuration && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Length of Stay:</p>
                          <p className="font-semibold">{visa.stayDuration}</p>
                        </div>
                      </div>
                    )}
                    {visa.validity && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Validity:</p>
                          <p className="font-semibold">{visa.validity}</p>
                        </div>
                      </div>
                    )}
                    {visa.entryType && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Entry:</p>
                          <p className="font-semibold">{visa.entryType}</p>
                        </div>
                      </div>
                    )}
                    {visa.method && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Method:</p>
                          <p className="font-semibold">{visa.method}</p>
                        </div>
                      </div>
                    )}
                    {visa.processingTime && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Processing Time:</p>
                          <p className="font-semibold">{visa.processingTime}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Description */}
            {content?.description && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About {destination.name} Visa</h2>
                  <p className="text-gray-700 leading-relaxed">{content.description}</p>
                </CardContent>
              </Card>
            )}

            {/* Guaranteed Visa Section */}
            {visa?.guaranteedDays !== undefined && visa.guaranteedDays > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Get a Guaranteed Visa on</h2>
                  <div className="space-y-4">
                    <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">in {visa.guaranteedDays} days</p>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold">6 Aug 2025 at 10:33 AM</span>
                          </div>
                          <button className="text-blue-600 text-sm mt-1 hover:underline">View Timeline</button>
                        </div>
                        <Badge className="bg-blue-600 text-white">Selected</Badge>
                      </div>
                    </div>
                    {visa.guaranteedDays > 2 && (
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">in 2 days</p>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-gray-400" />
                              <span className="font-semibold">5 Aug 2025 at 03:33 PM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Requirements */}
            {content?.requirements && content.requirements.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Visa Requirements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Documents */}
            {content?.documents && content.documents.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.documents.map((document, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{document}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Emirates Section (if UAE) */}
            {content?.emirates && content.emirates.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">All {content.emirates.length} Emirates with 1 Visa</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {content.emirates.map((emirate) => (
                      <div key={emirate.name} className="relative rounded-lg overflow-hidden group cursor-pointer">
                        <Image
                          src={emirate.image || "/placeholder.svg"}
                          alt={emirate.name}
                          width={200}
                          height={150}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-end">
                          <div className="p-3 text-white">
                            <h3 className="font-semibold">{emirate.name}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* States Section (if applicable) */}
            {content?.states && content.states.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Popular States to Visit</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {content.states.map((state) => (
                      <div key={state.name} className="relative rounded-lg overflow-hidden group cursor-pointer">
                        <Image
                          src={state.image || "/placeholder.svg"}
                          alt={state.name}
                          width={200}
                          height={150}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-end">
                          <div className="p-3 text-white">
                            <h3 className="font-semibold">{state.name}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* FAQs */}
            {content?.faqs && content.faqs.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {content.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">
                      {visa?.guaranteedDays && visa.guaranteedDays > 0
                        ? `Get Your Visa in ${visa.guaranteedDays} days`
                        : card?.visaInfo || "Get Your Visa"}
                    </span>
                  </div>
                </div>

                {/* Pricing Information */}
                {pricing && (pricing.governmentFee || pricing.atlysFee) && (
                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold">Price Breakdown</h3>

                    {pricing.governmentFee !== undefined && pricing.governmentFee > 0 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">Government fee</span>
                        </div>
                        <span className="font-semibold">
                          {pricing.currency === "INR" ? "₹" : "$"}
                          {pricing.governmentFee.toLocaleString()} × 1
                        </span>
                      </div>
                    )}

                    {pricing.atlysFee !== undefined && pricing.atlysFee > 0 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">Atlys Fees</span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">
                            {pricing.currency === "INR" ? "₹" : "$"}
                            {pricing.atlysFee.toLocaleString()}
                          </span>
                          {pricing.freeAtlysFeesUntilVisa && (
                            <span className="text-green-600 text-sm ml-2">₹0 for now</span>
                          )}
                        </div>
                      </div>
                    )}

                    {pricing.freeAtlysFeesUntilVisa && (
                      <p className="text-xs text-blue-600">No advance payment. Pay only when you get your visa</p>
                    )}
                  </div>
                )}

                {/* Total Amount */}
                {pricing?.totalAmount !== undefined && (
                  <div className="border-t pt-4 mb-6">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total Amount</span>
                      <span>
                        {pricing.totalAmount === 0
                          ? "Free"
                          : `${pricing.currency === "INR" ? "₹" : "$"}${pricing.totalAmount.toLocaleString()}`}
                      </span>
                    </div>
                  </div>
                )}

                <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
                  {pricing?.totalAmount === 0 ? "Get Free Visa Info" : "Start Application"}
                </Button>

                {/* AtlysProtect */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-sm">AtlysProtect</span>
                    <Badge className="bg-green-100 text-green-700 text-xs">Free</Badge>
                  </div>
                  <p className="text-xs text-gray-600">If Visa Delayed — No Atlys Fee</p>
                  <p className="text-xs text-gray-600">If Rejected — 100% Refund</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Button */}
            <Button variant="outline" className="w-full bg-transparent" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
