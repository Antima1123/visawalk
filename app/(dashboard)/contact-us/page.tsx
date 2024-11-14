import { Button } from "@/components/ui/button"
import { MdOutlineMail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs";


const ContactUs = () =>{
    return(
        <div className="flex flex-col mb-10 md:px-20 px-2">        
            <h1 className="text-3xl py-12 max-w-screen-2xl mx-auto w-full text-[#656666]">OUR OFFICES</h1>
            <div className="flex max-w-screen-2xl mx-auto justify-between w-full">
                <div className="flex flex-col gap-y-4">
                    <div className="flex w-full justify-between">
                        <div className="gap-3 flex flex-col">
                            <h1 className="text-3xl font-[500] mb-4">NEW DELHI</h1>
                            <div className="flex text-md gap-1 items-center">
                                <MdOutlineMail color="#656666" className="mt-1"/>
                                <p className="w-80 text-[#656666]">contact@visawalk.com, info@visawalk.com</p>
                            </div> 
                            <div className="text-[#656666] text-md flex gap-1 items-center">
                                <BsTelephone/>
                                <p>+91-8586899360</p>
                            </div> 
                            <div className="text-[#656666] text-md">
                                <h1>**Address**</h1>
                                <p className="w-48 mt-2 line-clamp-[7] leading-8">97/1, 3rd Floor Sri Aurobindo Marg, Adchini New Delhi-110017, India</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-[20rem] h-[15rem]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7010.072048052124!2d77.19862883068465!3d28.538636906776325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce206f5f15c5d%3A0xd83384661112e3c8!2s97%2C%201%2C%20Sri%20Aurobindo%20Marg%2C%20Adchini%2C%20Adhchini%20Village%2C%20Qutab%20Enclave%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1731142336939!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                ></iframe>
                                </div>
                            </div>
                        </div>

                    <div className="flex justify-between ">
                        <div className="gap-3 flex flex-col">
                            <h1 className="text-3xl font-[500] mb-4">Noida</h1>
                            <div className="flex text-md gap-1 items-center">
                                <MdOutlineMail color="#656666" className="mt-1"/>
                                <p className="w-80 text-[#656666]">contact@visawalk.com, info@visawalk.com</p>
                            </div> 
                            <div className="text-[#656666] text-md flex gap-1 items-center">
                                <BsTelephone/>
                                <p>+91-8586899360</p>
                            </div> 
                            <div className="text-[#656666] text-md">
                                <h1>**Address**</h1>
                                <p className="w-44 mt-2 line-clamp-[7] leading-8">Springboard, C2, Sector 1 Noida-201301 India</p>
                            </div>
                        </div>
                        
                        <div className="w-[20rem] h-[15rem]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.389624757228!2d77.314585!3d28.589353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f433319771%3A0x6b290eb5bc4991b6!2s91Springboard%20Sector%201%2C%20Noida!5e0!3m2!1sen!2sau!4v1731143104801!5m2!1sen!2sau"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                ></iframe>
                        </div>
                        
                    </div>
                </div>


                <form className="w-[30rem] h-[24rem] px-4 pt-10 items-center justify-center border border-[#bdd78d] rounded-lg  bg-gradient-to-r from-[#f3fcfd] to-[#fcfef9]">
                    
                    <h1 className="text-2xl font-[600] text-center pb-10 ">Contact Us</h1>
                    
                    <div className="flex flex-col gap-8">
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
                    </div>

                    <div className="w-full flex justify-end mt-2"> 
                        <Button 
                            size="default"
                            variant="link"
                            type="button" 
                            className=" bg-gradient-to-r from-[#79c08d] from-10% to-[#bdd78d] to-90% font-[700] text-md  ...">
                                Submit
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ContactUs