import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bokings from "../pages/Bokings/Bokings";
import PrivetRout from "../Provider/PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "book/:id",
        element: <PrivetRout><BookService></BookService></PrivetRout>,
        loader: ({ params }) =>
          fetch(`https://car-dctr-server.vercel.app/services/${params.id}`),
      },
      {
        path: "boking",
        element: (
          <PrivetRout>
            <Bokings></Bokings>
          </PrivetRout>
        ),
      },
    ],
  },
]);

export default router;
