import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

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
            <Route path="/create" exact>
              <Create />
            </Route>
            <Home />
          </Switch>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
