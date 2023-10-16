import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../components/Error/Error";

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>
    }
])
export default MainRoute;