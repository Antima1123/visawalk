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
      <div className="flex flex-col max-w-screen-2xl mx-auto items-center justify-center">
        <div className="text-center py-8">
          <h1 className="text-[#009B8D] text-2xl font-[600]">Latest Immigration News</h1>
          <h2 className="text-lg font-[600]">Stay updated about the visa industry</h2>
        </div>
        <div className="flex gap-4 px-2 ">
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
   </div>
  );
}
