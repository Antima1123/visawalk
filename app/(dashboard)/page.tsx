"use client"

import Component  from "@/components/dash-carousel";
import { WhoWeAre } from "../../components/who-we-are";
import { NewsCard } from "@/components/news-card";
import { getAllNews } from "@/features/get-all-news";
import { WorldMapDemo } from "@/components/world-map";
import {AssessmentCard} from "@/components/assistent-card";
import { AnimatedTestimonialsDemo } from "@/components/testimonial";

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
        <div className="grid md:grid-cols-4 gap-4 px-2 ">
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
      
      <div className="flex flex-col mt-20 items-center justify-center">
      <div className="text-center ">
          <h1 className="text-[#009B8D] text-2xl font-[600]">Our Assistance</h1>
          <h2 className="text-lg font-[600]">Visa Walk helps you in..</h2>
        </div>
        <AssessmentCard/>
      </div>

      <div className="flex flex-col mt-20 items-center justify-center">
        <div className="text-center ">
          <h1 className="text-[#009B8D] text-2xl font-[600]">Our Team </h1>
          <h2 className="text-lg font-[600]">Visa Walk team helps you to find your destiny..</h2>
        </div>
        <AnimatedTestimonialsDemo/>
      </div>
        
      <WorldMapDemo/>
   </div>
  );
}
