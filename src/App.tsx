import React from 'react';
import { Container } from "@mui/material";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/routes';
import TopBar from './components/TopBar/TopBar';

function App() {

  return (
      <BrowserRouter>
        <div>
          <TopBar />
          <Container maxWidth="xl">
            <Routes>
              {
                routes.map(({ path, element: Element }) =>
                  <Route key={path} path={path} element={Element}></Route>
                )
              }
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    //</HashRouter>

  );
}

export default App;