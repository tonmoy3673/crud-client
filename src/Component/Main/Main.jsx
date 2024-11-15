import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

const Main =()=>{
    return (
        <div>
            <div className="px-8 md:px-16">
            <NavBar/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
};

export default Main;
