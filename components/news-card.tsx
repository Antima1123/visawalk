import Link from "next/link"
import { useRouter } from "next/navigation"
type props = {
    des: string,
    title: string,
    link: string
}
export const NewsCard = ({des, title,link}: props) =>{
    const router = useRouter()
    const handleclick = () =>{
        router.push(`/news/${link}`)
    }
    return(
        <div className="border gap-8 bg-[#f6fbf6] border-[#bdd78d] w-[20rem] h-[16rem] flex flex-col justify-center items-center p-4 rounded-2xl ">
           <div className="flex flex-col gap-8">
                <h1 className="font-[600] text-center">{title}</h1>
                <p className="text-sm line-clamp-3">{des}</p>
            </div>
            <button onClick={handleclick} className="flex justify-end w-full underline decoration-black text-xs text-[#009B8D]">Read more</button>
        </div>
    )
}