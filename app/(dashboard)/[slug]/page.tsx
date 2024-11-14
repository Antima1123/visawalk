"use client"

import { useGetNews } from "@/features/use-get-news"
import { useParams } from "next/navigation"

export default function NewsPage(){
    const prams = useParams();
    
    const newsQuery = useGetNews(prams);
    const news = newsQuery.data
    return(
        <div>
            news
            {news?.content}
            <br/>
        
        </div>
    )
}