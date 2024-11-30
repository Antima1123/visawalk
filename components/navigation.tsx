"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dropdown } from "./dropdown"
import { useOpenShare } from "@/hook/open"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const Navigation = () =>{
   const {isOpen,onOpen,} = useOpenShare() 
   const [active, setActive] = useState(false);;
   const [service,setService] = useState(false)
   const router = useRouter()

   const handleClick = () =>{
    setActive(!active)
}

   const handleroute = (link: string) => {
    router.push(link)
    setActive(false)
    setService(false)
}

    return(
        <>
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
            <div className=" z-[90] flex lg:hidden justify-between items-center py-4 px-4 bg-white ">
                {/* Mobile */}

                {
                    !isOpen && 
                    <div className="flex  gap-x-4 z-[90]">

                    <motion.div className={`flex flex-col items-center justify-center gap-[6px] z-[100]`} onClick={handleClick}>
                        <motion.div 
                            className={`h-[3px] w-6 origin-left bg-black`} 
                            animate={{rotate: active ? 45 : 0}}>
                        </motion.div>


                        <motion.div 
                            className="h-[3px] w-6 bg-black"  
                            animate={{opacity: active ? 0 : 1}}>
                        </motion.div>
                        
                        <motion.div 
                            className={`h-[3px] w-6 origin-left bg-black`} 
                            animate={{rotate: active ? -45 : 0}}>
                        </motion.div>
                    </motion.div>
                </div>
                }
                

                {active && (
                    <motion.div 
                        initial={{y: -1000}} 
                        animate={{y: 0}} 
                        transition={{ ease: "easeInOut",}} 
                        className=" text-black flex w-screen h-screen shadow-lg absolute z-[90] left-0 top-16 bg-white px-10  "
                        >
                        <nav className="font-[600] gap-y-8 flex  w-full items-center justify-center flex-col">
                            <button onClick={()=>handleroute("/")} className='text-start'>
                                Home
                            </button>
                            <button onClick={()=>handleroute("/about")} className='text-start'>
                                About-us
                            </button>
                            
                            <button onClick={()=>handleroute("/publisher")} className='text-start'>
                                Publisher
                            </button>
                            <button onClick={()=>handleroute("/blogs")} className='text-start'>
                               Contact Us
                            </button>

                            
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
                    </motion.div>
                )}
            </div>
        </>
    )
} 