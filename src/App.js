import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
       <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Home />
          </Switch>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
