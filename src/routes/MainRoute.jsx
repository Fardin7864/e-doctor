import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../components/Error/Error";
import Home from "../pages/Home/Home";
import Appointment from "../pages/Appointment/Appointment";
import AddCategory from "../Admin/add category/AddCategory";

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>,
                loader: () => fetch('/subcategory.json')
            },
            {
                path: '/admin/addcategory',
                element: <AddCategory></AddCategory>
            }
        ]
    }
])
export default MainRoute;