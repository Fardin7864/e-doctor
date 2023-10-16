import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../components/Error/Error";
import Home from "../pages/Home/Home";
import Appointment from "../pages/Appointment/Appointment";

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
            }
        ]
    }
])
export default MainRoute;