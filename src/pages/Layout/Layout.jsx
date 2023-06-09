import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = () =>{
    return(
    <>
        <Header/>
        <body>
            <Outlet/>
        </body>
        <Footer/>
    </>)
}

export default Layout;