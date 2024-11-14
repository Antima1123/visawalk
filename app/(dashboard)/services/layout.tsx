import { EnquiryForm } from "@/components/enquiry-form"
import Image from "next/image"

type props ={
    children: React.ReactNode
    img: string
}
const ServicesLayout = ({children, img}: props) =>{
    return(
       <div>
            {children}
       </div>
    )
}

export default ServicesLayout