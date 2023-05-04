import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { privateRoutes, routes } from "./Routes/routes";
import TopBar from "./components/TopBar/TopBar";
import { useAppSelector } from "./hooks/redux";

function App() {
  const { userInfo, isLoading } = useAppSelector((state) => state.appReduser);

  return (
    <BrowserRouter>
      {userInfo.isAuth ? (
        <div>
          <TopBar />
          <Container maxWidth="xl">
            <Routes>
              {routes.map(({ path, element: Element }) => (
                <Route key={path} path={path} element={Element}></Route>
              ))}
            </Routes>
          </Container>
        </div>
      ) : (
        <Routes>
          {privateRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={Element}></Route>
          ))}
        </Routes>
      )}
    </BrowserRouter>
    //</HashRouter>
  );
}

export default App;
