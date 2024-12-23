import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../mainlayout/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Error from "../pages/Error";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement : <Error></Error>,
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