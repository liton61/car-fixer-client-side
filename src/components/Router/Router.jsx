import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Services from "../Services/Services";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/services",
            element:<Services></Services>
        }
      ],
    },
  ]);

export default router;