import { EnquiryForm } from "@/components/enquiry-form"
import { SideBar } from "../components/side-bar"

const Studyvisa = () =>{
    return(
        <div className="grid md:grid-cols-2 justify-between">
            <SideBar/>
            <EnquiryForm/>
        </div>
    )
}

export default Studyvisa