import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/detail/:id" component={Detail}/>
      <Route exact path="/create"/>
      <Route exact path="/aboutMe" component={AboutMe}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
