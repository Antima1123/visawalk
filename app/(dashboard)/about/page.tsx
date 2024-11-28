"use client"

import { EnquiryForm } from "@/components/enquiry-form";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiCheckMark } from "react-icons/gi";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


export default function AboutUs() {
   const path = usePathname();

   console.log(path)
    return (
     <div className="w-full flex flex-col items-center">
         <div className="w-full flex items-center justify-center relative h-full">
            <Image
            src="/about-us.png"
            alt="about-us"
            width={2000}
            height={2000}
            className="w-full h-[15rem]"
            />
            <h1 className="text-3xl text-white font-[600] z-[90] absolute top-16">Get to know us</h1>
         </div>

         <div className="flex md:flex-row flex-col mx-auto px-8 gap-16">
            <div className="flex flex-col w-full max-w-screen-2xl mx-auto">

               <div className="w-full mt-4 flex">
                  Home{` > `}<Link href={"#"} className="text-green-600 font-[500]">{path.slice(1)}</Link>
               </div>

               <div className="flex flex-col gap-4 py-10 ">
                  <div className="flex flex-col gap-8">
                     <div>
                        <h1 className="text-2xl font-[600] mb-2">VISAWALK</h1>
                        <p>
                           Visa Walk is one of the Best immigration consultants in Delhi. We take pride in the fact not only because we are counted amongst one the bests in the second big metropolitan city but also because we have a substantial approval rate for all kinds of visas. Our sole objective is to expedite comprehensive and customized immigration solutions for our clients who are guided and assisted by our customer-centric, service-focused and technology-driven team of professionals.
                        </p>
                     </div>
                     
                     <div>
                        <h1 className="text-2xl font-[600] mb-2">WHY CHOOSE VISAWALK?</h1>
                        <p>
                           We are an outstanding example of B2C excellence and are rapidly climbing the ranks in B2B as well. With our strong associations with reputed universities, companies, and institutions, you have a high probability of finding the right prospects for your future. With nearly a decade of experience, we are among the best immigration consultants and best visa agents in Delhi, dedicated to helping clients from all over India fulfill their dreams of settling abroad.
                        </p>
                     </div>

                        <div className="flex flex-col gap-y-2">
                           <h1 className="text-2xl font-[600] mb-2">Services Offered</h1>

                           <div  className="flex gap-2 items-start ">
                              <GiCheckMark size={20} className=" mt-1 mr-1"/>
                              <p>
                                 <b className="text-md font-[600]">
                                    Profile Assessment:
                                 </b>
                                 Our industry professionals assess your profile by taking a retrospective and prospective approach. Only after an intensive study, we tell you your honest chances of going abroad and getting the visa approved.
                              </p> 
                           </div>

                           
                              <div className="flex gap-2 items-start ">
                                 <GiCheckMark size={26} className="mt-1 mr-1"/>
                                 <p>
                                    <b className="text-md font-[600]">
                                       Consultation:
                                    </b>
                                     We provide you a consultation on study & job opporstunities in your preferred country, enlighten you about other ways to move abroad, walk you through the process and documentation required for migration and make the immigration process as smooth as possible.
                                 </p>
                              </div>
                              

                              <div className="flex gap-2 items-start ">
                                 <GiCheckMark size={16} className=" mt-1 mr-1"/>
                                 <p>
                                    <b className="text-md font-[600]">
                                       Documentation:
                                    </b>
                                     Because of our decade-long experience, we know every bit of documentation required for all visas, by heart.
                                 </p>
                              </div>

                              <div className="flex gap-2 items-start ">
                                 <GiCheckMark size={20} className=" mt-1 mr-1"/>
                                 <p>
                                    <b className="text-md font-[600]">IELTS Coaching: </b>
                                    Because of our decade-long experience, we know every bit of documentation required for all visas, by heart.
                                 </p>
                              </div>

                        <div className="flex flex-col gap-y-2">
                           <h1 className="text-2xl font-[600] mb-2">Our Mission</h1>
                           <p>We strive to take on new challenges and provide valuable services to build life-long relationships with our clients. As a leading Australia student visa consultant in Delhi NCR, their satisfaction and insightful feedback help us design optimal plans and deliver the best results each time someone chooses us.</p>
                           <div className="gap-2 flex flex-col">
                              <div className="flex gap-2 items-start ">
                                 <div className="flex">
                                    <GiCheckMark size={20} className=" mt-1 "/>
                                 </div>
                                 <p>We ensure that we have the best qualified, and trained professional staff.</p>
                              </div>
                           </div>

                           
                              <div className="flex gap-2 items-start ">
                                 <div className="flex">
                                    <GiCheckMark size={20} className="mt-1 "/>
                                 </div>
                                 <p> We maintain flexibility to adapt to local in international trends.</p>
                              </div>

                              <div className="flex gap-2 items-start ">
                                 <div className="flex">
                                    <GiCheckMark size={20} className=" mt-1 "/>
                                 </div>
                                 <p>We establish our team as the optimum service provider.</p>
                              </div>

                              <div className="flex gap-2 items-start ">
                                 <div className="flex">
                                    <GiCheckMark size={20} className=" mt-1 "/>
                                 </div>
                                 <p> We operate continuously in compliance with the latest applicable rules & regulations and industry principles & standards.</p>
                              </div>
                        </div>

                        <div>
                           <h1 className="text-2xl font-[600] mb-2">Our Vision</h1>
                           <p>
                              Our vision is to stay unrivaled in the visa and travel industry by continuously developing new relationships and opportunities for our clients. We are committed to be recognized for excellence, integrity, innovation, and customer satisfaction in our field of work. We are a well-established Visa Consultancy firm operating since 2013. Our dedicated team and experts work together day and night and guide you through every step of your journey.
                           </p>
                        </div>

                        <div>
                           <h1 className="text-2xl font-[600] mb-2">Our Goal</h1>
                           <p>
                           For us, our clients are not just another case but someone who has handed over their future possibilities in our hands. Therefore, being the Best immigration consultants in Delhi, we leave no stone unturned to make sure we serve you with excellent, tailor-made services depending upon your given position.
                           </p>
                        </div>

                        <div className="flex">
                           <RiDoubleQuotesL size={20} color="#009B8D"/>
                           <p>We, at Visa walk, believe in a pro-active approach and are thus, successful in almost all our visa processing endeavors. You too can book a free visa consultancy with us today!</p>
                           <RiDoubleQuotesR size={20} color="#009B8D" />
                        </div>
                        
                     </div>
                  </div>     
               </div>
            </div>
             <div className="flex py-10">
               <EnquiryForm/>
            </div>
      </div>
               
     </div>
    );
  }