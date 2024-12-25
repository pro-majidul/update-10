import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../mainlayout/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Error from "../pages/Error";
import AddTutorials from "../pages/AddTutorials";
import Private from "../private/Private";
import FindTutorials from "../pages/FindTutorials";
import Language from "../pages/Language";
import TutorDetails from "../pages/TutorDetails";
import MyTutorials from "../pages/MyTutorials";
import BookedTutors from "../pages/BookedTutors";
import UpdateTutors from "../pages/UpdateTutors";

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
            },
            {
                path: '/find-tutors/:category',
                element: <Language></Language>

            },
            {
                path: '/tutor/:details',
                element: <Private><TutorDetails></TutorDetails></Private>
            },
            {
                path: '/my-tutorial',
                element: <Private><MyTutorials></MyTutorials></Private>
            },
            {
                path: '/update/:id',
                element: <UpdateTutors></UpdateTutors>,
                

            },
            {
                path: '/booked-tutor',
                element: <Private><BookedTutors></BookedTutors></Private>,
            }
        ]
    },
]);
export default routes;