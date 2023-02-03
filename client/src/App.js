import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home"/>
    </div>
    </BrowserRouter>
  );
}

export default App;
