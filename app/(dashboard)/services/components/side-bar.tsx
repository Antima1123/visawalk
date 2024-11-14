import Link from "next/link"

export const SideBar = () =>{
    return(
        <div className="text-xs w-[20rem] h-[24rem] px-4 pt-5 items-center justify-center border border-[#bdd78d] rounded-md  bg-[#fbfff5]">
            <div className="mb-8">
                <Link href=""><h1 className="text-[#009B8D] font-[600]">Immegration</h1></Link>
                <div className="p-4">
                <Link href=""><h2 className="mb-4">• Canada Immegration</h2></Link>
                <Link href=""><h3 className="">• Australia Immegration</h3></Link>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <Link href=""><h1 className="font-[600]">Study Visa</h1></Link>
                <Link href=""><h1 className="font-[600]">Visa Documentation</h1></Link>
                <Link href=""><h1 className="font-[600]">IELTS Prepration</h1></Link>
                <Link href=""><h1 className="font-[600]">Profile Assessment</h1></Link>
                <Link href=""><h1 className="font-[600]">Visa Consultation</h1></Link>
            </div>
        </div>
    )
}