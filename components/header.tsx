import Image from "next/image"
import { Navigation } from "./navigation"

export const Header = () =>{
    return (
        <header className="sticky top-0 w-screen bg-white border-b-2 border-[#bdd78d] z-[9999]">
            <div className=" max-w-screen-2xl mx-auto py-4 px-8 flex items-center">
                <div className="flex  lg:gap-x-64 items-center justify-between w-full">
                    <Image src="/visawalk-logo.png" alt="logo" height={200} width={200}/>
                    <Navigation/>
                </div>
            </div>
        </header>
    )
}
