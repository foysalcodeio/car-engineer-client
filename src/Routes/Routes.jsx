import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import BookService from "../pages/Home/BookService";
import Bookings from "../pages/Home/Bookings";
import PrivateRoute from "./PrivateRoute";




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
          path: 'book/:id', 
          element: <PrivateRoute><BookService></BookService></PrivateRoute>, 
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'bookings', 
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

export default router;