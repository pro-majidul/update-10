import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../mainlayout/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    },
]);
export default routes;