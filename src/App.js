import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/routes/Home'
import LandingPage from './components/routes/LandingPage'
import NotFound from './components/routes/NotFound'
import globalStyles from './assets/modules/App.module.css'

function App() {
  return (
    <div className={[globalStyles.subRoot, globalStyles.container].join(' ')}>
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
    </div>
  );
}

export default App;
