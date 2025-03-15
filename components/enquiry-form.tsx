import Image from "next/image"
import { Button } from "./ui/button"

export const EnquiryForm = () =>{
    return(
        <section className=" flex-col flex items-center gap-y-4 w-auto">
            <form className="w-[20rem] h-[24rem] px-4 pt-5 items-center justify-center border border-[#bdd78d] rounded-lg  bg-gradient-to-r from-[#f3fcfd] to-[#fcfef9]">
               <h1 className="text-xl font-[600] text-center pb-5 ">Immigration Enquiry Form</h1>
                  <div className="flex flex-col gap-4">
                     <input 
                        placeholder="Full Name"
                        type="text"
                        className=" w-full p-2 rounded-md border border-[#949696] placeholder-[#949696]"
                     />
                      <input 
                        placeholder="Email"
                        type="email"
                        className=" w-full p-2 rounded-md border border-[#949696] placeholder-[#949696]"
                     />
                     <input 
                        placeholder="Phone"
                        type="phone"
                        className=" w-full p-2 rounded-md border border-[#949696] placeholder-[#949696]"
                     />
                     <select className="py-3 px-2 pe-9 text-[#949696] outline-none block w-full border border-[#949696]  rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>New Zealand</option>
                        <option>USA</option>
                        <option>United Kingdom</option>
                        <option>Help Me Decided</option>
                     </select>

                  </div>

                    <div className="w-full mt-8 px-8"> 
                        <Button 
                            size="default"
                            variant="link"
                            type="button" 
                            className=" bg-gradient-to-r from-[#79c08d] from-10% to-[#bdd78d] to-90% font-[700] text-md w-full">
                                Submit
                        </Button>
                    </div>

                </form>

            <Image
                src="/study-abroad.png"
                alt="study-abroad"
                width={300}
                height={300}
                className=""
            />
        </section>
    )
}