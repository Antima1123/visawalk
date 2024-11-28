import { EnquiryForm } from "@/components/enquiry-form"
import { SideBar } from "../components/side-bar"

const ProfileAssessment = () =>{
    return(
        <div className="flex justify-between">
        <SideBar/>
        <EnquiryForm/>
    </div>
    )
}

export default ProfileAssessment