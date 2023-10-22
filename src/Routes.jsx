import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Footer from "./pages/Footer.jsx";
import Root from "./layouts/Root";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "./pages/AddProduct";
import BrandProducts from "./pages/BrandProducts";
import SingleCarDetails from "./pages/SingleCarDetails";
import MyCart from "./pages/MyCart";
import UpdateProduct from "./pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brandProducts/:title",
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch("https://brand-shop-server-qa1d68yte-zarin-tasmin-sejutis-projects.vercel.app/addProduct"),
        // loader: () => fetch('https://brand-shop-server-3ttowepeu-zarin-tasmin-sejutis-projects.vercel.app/addProduct')
      },
      {
        path: "/SingleCarDetails/:_id",
        element: (
          <PrivateRoute>
            <SingleCarDetails></SingleCarDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-shop-server-qa1d68yte-zarin-tasmin-sejutis-projects.vercel.app/addProduct"),
        // loader: () => fetch('https://brand-shop-server-3ttowepeu-zarin-tasmin-sejutis-projects.vercel.app/addProduct')
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-shop-server-qa1d68yte-zarin-tasmin-sejutis-projects.vercel.app/myCart"),
        // loader: () => fetch('https://brand-shop-server-3ttowepeu-zarin-tasmin-sejutis-projects.vercel.app/myCart')
      },
      {
        path: "/updateProduct/:_id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-qa1d68yte-zarin-tasmin-sejutis-projects.vercel.app/updateProduct/${params._id}`),
        // loader: ({params}) => fetch(`https://brand-shop-server-3ttowepeu-zarin-tasmin-sejutis-projects.vercel.app/updateProduct/${params._id}`)
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);

export default router;
