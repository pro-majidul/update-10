import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../mainlayout/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
            },
            {
                path : '/signUp',
                element : <SignUp></SignUp>
            }
        ]
    },
]);
export default routes;