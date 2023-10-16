import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar/Nav";

const Root = () => {
    return (
        <div className=" font-open-sans">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;