import { Routes, Route } from "react-router-dom";
import Home from './components/routes/Home'
import LandingPage from './components/routes/LandingPage'
import NotFound from './components/routes/NotFound'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route
          exact
          path='/'
          element={Home}
        ></Route>
        <Route
          exact
          path='/login'
          element={LandingPage}
        ></Route>
        <Route
          path='*'
          element={NotFound}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
