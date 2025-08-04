import { Navigation } from "./navbar";
import { TopBar } from "./top-bar";

type props = {
    children : React.ReactNode;
}

const HomeLayout = ({children} :props) =>{
    return (
        <div className="flex flex-col min-h-screen">
            <TopBar/>
            <Navigation/>
            {children}
        </div>
    )
}

export default HomeLayout