"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { IoMdArrowDropdown } from "react-icons/io"
import Link from "next/link"

export const Dropdown = () => {
    const [service, setService] = useState(false)
    return(
        <div>
            <motion.div  
                        onHoverStart={()=>setService(true)}
                        onHoverEnd={()=> setService(false)}
                        className="flex h-12 gap-1 items-center  "
                    >
                        <div>Services</div>
                        <IoMdArrowDropdown size={18}/>
                    </motion.div> 
            {service && (
                        <motion.div
                        onHoverStart={()=>setService(true)}
                        onHoverEnd={()=> setService(false)}
                            className="-mt-1  w-60 py-4 items-center justify-center gap-4 text-[16px] shadow-md absolute z-[100] bg-white text-black"
                        >
                            <div className="w-full h-12 hover:bg-[#f0ffd3] hover:text-gray-300 flex ">
                               <Link href= "/services/immegration"><p className=" items-center px-4 w-full flex">Immegration</p> </Link>   
                            </div>
                           
                            <div className="w-full h-12 group hover:bg-[#f0ffd3] hover:text-gray-300 flex ">
                                <Link href= "/services/study-visa"><p className=" items-center px-4 w-full flex">Study Visa</p> </Link>
                            </div>

                            <div className="w-full h-12 group hover:bg-[#f0ffd3] hover:text-gray-300 flex ">
                                <Link href= "/services/visa-documentation"><p className=" items-center px-4 w-full flex">Visa Documentation</p> </Link>   
                            </div>

                            <div className="w-full h-12 group hover:bg-[#f0ffd3] hover:text-gray-300 flex ">
                                <Link href= "/services/ielts-training"><p className=" items-center px-4 w-full flex">IELTS Training</p> </Link>   
                            </div>

                            <div className="w-full h-12 group hover:bg-[#f0ffd3] hover:text-gray-300 flex ">
                                <Link href= "/services/profile-assessment"><p className=" items-center px-4 w-full flex">Profile Assessment</p> </Link>    
                            </div>

                            <div className="w-full h-12 group hover:bg-[#f0ffd3] hover:text-gray-300 flex ">
                                <Link href= "/services/visa-consultation"><p className=" items-center px-4 w-full flex">Visa Consultation</p> </Link>   
                            </div>
                        </motion.div>
                    )}
        </div>
    )
}