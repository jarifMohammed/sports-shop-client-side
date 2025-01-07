import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../LayOuts/HomeLayout";
import AuthLayout from "../LayOuts/AuthLayout";

import HomePage from "../Pages/HomePage";
import AllSportsPage from "../Pages/AllSportsPage";
import AddEquipmentPage from "../Pages/AddEquipmentPage";
import MyEquipmentListPage from "../Pages/MyEquipmentListPage";
import ViewDetailsPage from "../Pages/ViewDetailsPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PageNotFound from "../Pages/PageNotFound";
// import PrivateRouter from "./PrivateRouter";
import UpdatePage from "../Pages/UpdatePage";
import PrivateRouter from "./PrivateRouter";
// import Categories from "../Components/Category";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
        loader: () => fetch("https://equi-sport-server.vercel.app/product"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/auth/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
  {
    path: "/all-sports",
    element: <AllSportsPage></AllSportsPage>,
    loader: () => fetch("https://equi-sport-server.vercel.app/product"),
  },
  {
    path: "/add-equipment",
    element: (
      <PrivateRouter>
        <AddEquipmentPage></AddEquipmentPage>
      </PrivateRouter>
    ),
  },

  {
    path: "/details/:id",
    element: (
      <PrivateRouter>
        <ViewDetailsPage></ViewDetailsPage>
      </PrivateRouter>
    ),
    // loader:  ({params}) => fetch(`https://equi-sport-server.vercel.app/product/${params.id}`)
  },
  {
    path: "/my-equipment",
    element: (
      <PrivateRouter>
        <MyEquipmentListPage> </MyEquipmentListPage>
      </PrivateRouter>
    ),
    loader: () => fetch("https://equi-sport-server.vercel.app/product"),
  },
  {
    path: "/update/:id",
    element: (
      <PrivateRouter>
        <UpdatePage></UpdatePage>
      </PrivateRouter>
    ),
    loader: ({ params }) =>
      fetch(`https://equi-sport-server.vercel.app/product/${params.id}`),
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default Router;
