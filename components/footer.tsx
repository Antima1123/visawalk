import Link from "next/link"
import { FaLinkedinIn, FaReddit, FaTwitter } from "react-icons/fa6";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () =>{
    return(
        <div className=" bg-[#26a78e] text-white flex flex-col items-center justify-center">
            <div className="max-w-screen-lg mx-auto flex md:flex-row flex-col pt-8 pl-10 md:pl-0 gap-y-6 justify-between w-full md:h-[15rem] h-full ">
                <div>
                    <h1 className="text-2xl font-[600]">DISCOVER</h1>
                    <div className="flex flex-col mt-2">
                        <Link href="/" className="hover:underline">About Us</Link>
                        <Link href="/" className="hover:underline">Faq</Link>
                        <Link href="/" className="hover:underline">News</Link>
                        <Link href="/" className="hover:underline">Blogs</Link>
                        <Link href="/" className="hover:underline">Contact Us</Link>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-[600]">LEGAL</h1>
                    <div className="flex flex-col mt-2">
                        <Link href="/" className="hover:underline">Privacy Policy</Link>
                        <Link href="/" className="hover:underline">Terms and Condition</Link>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-[600] mb-2">SOCIAL</h1>
                    <div className="flex gap-x-4 mt-2">
                        <Link href="/"><FaLinkedinIn/></Link>
                        <Link href="https://x.com/visawalk" target="_blank"><FaTwitter/></Link>
                        <Link href="https://www.reddit.com/user/Visawalk/?rdt=37263" target="_blank"><FaReddit/></Link>
                    </div>
                </div>

                <div className=" flex flex-col">
                    <h1 className="text-2xl font-[600] mb-2 ">CONTACT</h1>
                    
                    <div className="flex gap-2">
                        <FaHome className="mt-1"/>:
                        <p className="w-80"> 97/1,3rd Floor,Sri Aurobindo Marg,Adchini,New Delhi-110017,India</p>   
                    </div>

                    <div className="flex gap-2">
                        <FaPhoneAlt className="mt-1"/>:
                        <p className="w-80">+91-8586899360</p>   
                    </div>
                    
                    <div className="flex gap-2">
                        <MdEmail className="mt-1"/>:
                        <p className="w-80">contact@visawalk.com</p>   
                    </div>

                </div>
            </div>
            <div className="text-[10px] py-4 text-[#31dcba]">Copyright © 2024 - All Rights Reserved - VisaWalk</div>
        </div>
    )
}