import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

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
            <Route path="/blogs/:id" exact>
              <BlogDetails />
            </Route>
            <Home />
          </Switch>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
