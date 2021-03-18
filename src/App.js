import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
