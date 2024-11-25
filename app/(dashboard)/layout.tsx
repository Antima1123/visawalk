import { Footer } from "@/components/footer"
import { Header } from "../../components/header"

type props ={
    children: React.ReactNode
}
const LayoutPage = ({children}: props) =>{
    return(
        <main>
            <Header/>
                {children}
            <Footer/>
        </main>
    )
}
export default LayoutPage