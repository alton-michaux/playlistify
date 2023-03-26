import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/routes/Home'
import LandingPage from './components/routes/LandingPage'
import NotFound from './components/routes/NotFound'
import "./assets/App.css"

function App() {
  return (
    <Container
      style={{ paddingTop: "8%", height: "100%" }}
      fluid
    >
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        ></Route>
        <Route
          exact
          path='/login'
          element={<LandingPage />}
        ></Route>
        <Route
          path='*'
          element={<NotFound />}
        ></Route>
      </Routes>
    </Container>
  );
}

export default App;
