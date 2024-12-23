import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../mainlayout/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Error from "../pages/Error";
import AddTutorials from "../pages/AddTutorials";
import Private from "../private/Private";
import FindTutorials from "../pages/FindTutorials";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/add-tutorial',
                element: <Private><AddTutorials></AddTutorials></Private>
            },
            {
                path: '/find-tutors',
                element: <FindTutorials></FindTutorials>,
                loader: () => fetch('http://localhost:5000/tutors')
            }
        ]
    },
]);
export default routes;