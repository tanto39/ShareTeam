import Cards from "../components/pages/Cards";
import Login from "../components/pages/Login";
import Resources from "../components/pages/Resources";
import { Navigate, RouteObject } from 'react-router-dom';
import SignUp from "../components/pages/SignUp";
//import { IRoute } from "../models/IRoute";

export const routes: RouteObject[] = [
  { path: "/", element: <Cards/> },
  { path: "/resources", element: <Resources/> },
  { path: "*", element: <Navigate replace to="/" /> },
];

export const publicRoutes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "*", element: <Navigate replace to="/login" /> },
];