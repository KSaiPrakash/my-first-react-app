
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/about';
import Shop from './pages/shop';
import Item from './pages/itemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:ID" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
