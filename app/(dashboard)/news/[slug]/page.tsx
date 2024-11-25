"use client"

import { useGetNews } from "@/features/use-get-news"
import Image from "next/image";
import { useParams } from "next/navigation"

export default function NewsPage(){
    const prams = useParams();
    
    const newsQuery = useGetNews(prams);
    const newsdata = newsQuery.data 
    return(
        <div className=" w-full py-12">
            <div className=" px-4 flex flex-col  gap-8 justify-center items-center max-w-screen-lg mx-auto">
                <h1 className="text-[2.4rem] font-[350] text-start">{newsdata?.header}</h1>
                <div className="w-full justify-center flex">
                    <Image
                        src={newsdata?.image!}
                        alt="canada"
                        width={500}
                        height={500}
                        className="w-[40rem]"
                    />
                </div>
               <div className="font-[320] text-[17px] px-8 gap-2 flex flex-col">
               <div dangerouslySetInnerHTML={{ __html: newsdata?.content || '' }} />
                    <p >If you&apos;ve found this news helpful, then make sure to contact us. You can book a <button className="underline font-[600] hover:text-blue-950 mr-2 hover:no-underline">free visa consultation</button>or give us a call at +91-8586899360 for assistance in consultation, visa documentation, and much more.</p>
                    <p>source: https://www.cicnews.com/</p>
               </div>
            </div>
        </div>
    )
}