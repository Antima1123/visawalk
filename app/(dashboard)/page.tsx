"use client"

import Component  from "@/components/dash-carousel";
import { WhoWeAre } from "../../components/who-we-are";
import { NewsCard } from "@/components/news-card";

export default function Home() {
  return (
   <div className="h-full flex flex-col">
      <Component/>
      <WhoWeAre/>
      <NewsCard/>
   </div>
  );
}
