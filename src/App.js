import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <Router basepath={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<LandingPage/>}></Route>
        <Route path={"/movie/:movieId"} element={<MovieDetail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
