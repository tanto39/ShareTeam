import Cards from "../components/pages/Cards";
import Resources from "../components/pages/Resources";
import { Navigate, RouteObject } from 'react-router-dom';
//import { IRoute } from "../models/IRoute";

export const routes: RouteObject[] = [
  { path: "/", element: <Cards/> },
  { path: "/resources", element: <Resources/> },
  { path: "*", element: <Navigate replace to="/cards" /> },
];