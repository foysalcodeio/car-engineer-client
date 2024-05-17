import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CheckOut from "../pages/Home/CheckOut";
import BookService from "../pages/Home/BookService";
import Bookings from "../pages/Home/Bookings";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/book/:id',
          element: <BookService></BookService>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <Bookings></Bookings>
        }
      ]
    },
  ]);

export default router;