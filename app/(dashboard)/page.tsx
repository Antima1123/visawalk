"use client"

import Component  from "@/components/dash-carousel";
import { WhoWeAre } from "../../components/who-we-are";
import { NewsCard } from "@/components/news-card";
import { getAllNews } from "@/features/get-all-news";

export default function Home() {
  const getQuery = getAllNews();
  const newsdata = getQuery.data;
  return (
   <div className="h-full flex flex-col">
      <Component/>
      <WhoWeAre/>
      <div className="flex gap-4 px-2 max-w-screen-2xl mx-auto">
        {newsdata?.map((news,index)=>(
          <NewsCard
            key={index}
            title={news.header}
            des={news.content}
            link={news.slug}
          />
        ))}
      </div>
   </div>
  );
}
