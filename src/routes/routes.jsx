import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayouts from "../mainlayout/MainLayouts";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    },
]);
export default routes;