import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Header from './components/NavBar/Header';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
