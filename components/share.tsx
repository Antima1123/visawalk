import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { useOpenShare } from "@/hook/open";
import { X } from "lucide-react";


export const Share = () => {
    const {onClose} = useOpenShare();
    return(
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-[25rem] h-[10rem] relative z-[100] shadow-md rounded-lg px-16 py-4 items-center  border flex flex-col bg-white ">
                <Label className="font-[700]">Share Post</Label>

                <div className="flex gap-8 mt-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full "> 
                            <RiTwitterXLine color="white" size={20} />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-[#4464a3] rounded-full "> 
                            <TiSocialFacebook color="white" size={30} />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-[#0077b5] rounded-full "> 
                            <FaLinkedinIn color="white" size={20} />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-[#25D366] rounded-full "> 
                            <SiWhatsapp color="white" size={20} />
                        </div>
                </div>
                {/* <div className="border bg-black text-white flex-wrap w-[16rem] rounded-lg p-2 mt-4">link</div> */}
                <div>
                    <Card className="w-2xl">
                        <div className="w-full max-w-[20rem] overflow-x-auto ">
                            abcscnji00iiiiiiicsoneucbeucbicbuibcuibuccansoscnkwncosonwbuowabcscnji00iiiiiiicsoneucbeucbicbuibcuibuccansoscnkwncosonwbuow
                        </div>
                    </Card>
                </div>
                <X onClick={() => onClose()} className="z-[90] absolute right-2 top-2"/>
            </div>
        </div>
    )
}