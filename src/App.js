import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/routes/Home'
import LandingPage from './components/routes/LandingPage'
import NotFound from './components/routes/NotFound'

function App() {
  return (
    <Container>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home/>}
        ></Route>
        <Route
          exact
          path='/login'
          element={<LandingPage/>}
        ></Route>
        <Route
          path='*'
          element={<NotFound/>}
        ></Route>
      </Routes>
    </Container>
  );
}

export default App;
