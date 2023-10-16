import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";

const Root = () => {
    return (
        <div className=" font-open-sans">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;