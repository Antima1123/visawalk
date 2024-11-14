import Image from "next/image"
import Link from "next/link"

export const WhoWeAre = () =>{
    return(
        <div className=" mt-20 flex flex-col items-center justify-center max-w-screen-2xl mx-auto">
            <h1 className="text-[#35a98f] text-3xl font-[600]">Who we are</h1>
            <p className="text-xl font-[600]">Best immigration consultants</p>
            <div className="grid md:grid-cols-2 md:gap-0 max-w-screen-xl mx-auto gap-4 justify-center items-center mt-10 p-4">
                <Image
                    src="/dash.jpg"
                    alt="dash-img"
                    width={600}
                    height={600}
                    className=" object-contain"
                />
                <p className="text-sm">
                    <Link href="#" className="font-[700] text-blue-600">Visawalk</Link> is a group of experts in the visa and immigration industry. A foremost & trusted Immigration Firm based out from Delhi that has helped thousands of individuals to travel across the globe rightly without any trouble within time Visawalk has a dedicated team of Australia immigration consultants in Delhi NCR; specializing to offer best visa solutions for those who are looking their career growth chances. Be it Australian Study Visa or Canada Work Permit Visa, the professionals at Visawalk have solutions for all types of visa needs. They do this with such a level of personalized service that the whole process will be simple and smooth from beginning to end.
                    <br/>
                    <br/>
                    So, if you are planning to migrate to Australia or study abroad then opting for better-guidance is essential. Visawalk — Best Immigration Consultants in Delhi For top qualified immigration consultants for visa requirements, Visawalk is one of the leading names. Whether you Are interested in an Australia study visa, Immigration Visa or a Canada work permit. Their experienced team ensures that your application is handled with the utmost care and efficiency. Contact Visawalk today to get started on your journey to success.
                    Fill this free assessment form to schedule your free visa consultation session.
                </p>
            </div>
        </div>
    )
}