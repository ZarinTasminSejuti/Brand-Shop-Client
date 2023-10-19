

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brand.json')
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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/brandProducts/:title",
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch('http://localhost:5000/addProduct')
      },
      {
        path: "/SingleCarDetails/:_id",
        element: <SingleCarDetails></SingleCarDetails>,
        loader: () => fetch('http://localhost:5000/addProduct')
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/myCart')
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
     
    ],
  },
]);


export default router;