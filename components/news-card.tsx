import Link from "next/link"

export const NewsCard = () =>{
    return(
        <div className="border gap-8 bg-[#f6fbf6] border-[#bdd78d] w-[20rem] h-[16rem] flex flex-col justify-center items-center p-4 rounded-2xl ">
           <div className="flex flex-col gap-8">
                <h1 className="font-[600] text-center">Australia Streamlines TSS Visa Process to Attract Skilled Foreign Talent</h1>
                <p className="text-sm">In order to improve accessibility for skilled workers and expedite the hiring process for firms, Australia implemented significant revisions to the Su . . .</p>
            </div>
            <Link href="/" className="flex justify-end w-full underline decoration-black text-xs text-[#009B8D]">Read more</Link>
        </div>
    )
}