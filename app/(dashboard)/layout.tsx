import { Footer } from "@/components/footer"
import { Header } from "../../components/header"
import { QueryProviders } from "@/providers/query-provider"


type props ={
    children: React.ReactNode
}
const LayoutPage = ({children}: props) =>{
    return(
        <main>
            <QueryProviders>
                <Header/>
                {children}
                <Footer/>
            </QueryProviders>
        </main>
    )
}
export default LayoutPage