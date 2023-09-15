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
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<LandingPage/>}></Route>
        <Route path={process.env.PUBLIC_URL + "/movie/:movieId"} element={<MovieDetail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
