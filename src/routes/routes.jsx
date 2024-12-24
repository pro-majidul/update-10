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
            },
            {
                path: '/find-tutors/:category',
                element: <Language></Language>,
                loader: ({ params }) => fetch(`http://localhost:5000/tutors?language=${params.category}`)
            },
            {
                path: '/tutor/:details',
                element: <Private><TutorDetails></TutorDetails></Private>,
                loader : ({params}) => fetch(`http://localhost:5000/tutors/${params.details}`)
            },
            {
                path: '/my-tutorial',
                element: <Private><MyTutorials></MyTutorials></Private>
            },
            {
                path: '/booked-tutor',
                element: <Private><BookedTutors></BookedTutors></Private>
            }
        ]
    },
]);
export default routes;