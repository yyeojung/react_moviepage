import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import MovieDetail from './components/MovieDetail/MovieDetail';
import SlideCrew from './components/common/SlideCrew';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<LandingPage/>}></Route>
        <Route path={"/movie/:movieId"} element={<MovieDetail/>}></Route>
        <Route path={"/SlideCrew"} element={<SlideCrew/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
