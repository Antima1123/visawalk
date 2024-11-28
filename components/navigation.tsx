"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dropdown } from "./dropdown"

export const Navigation = () =>{
   
    return(
        <nav className="lg:flex hidden gap-x-16 items-center font-sans justify-between w-full">
           <div className=" flex items-center gap-16">
            <Link href="/" className="hover:underline underline-offset-8 decoration-[#009B8D]">
                    Home
                </Link>

                <Link href="/about" className="hover:underline underline-offset-8 decoration-[#009B8D]">
                    About Us
                </Link>
                
                <Dropdown/>

                <Link href="/contact-us" className="hover:underline underline-offset-8 decoration-[#009B8D]">
                    Contact Us
                </Link>
           </div>
            
            <Link href="/free-assessment">
                <Button 
                size="lg"
                variant="link"
                type="button" 
                className=" bg-gradient-to-r from-[#79c08d] from-10% to-[#bdd78d] to-90%  ...">
                    Free Assessment
                </Button>
            </Link>

        </nav>
    )
} 