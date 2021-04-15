import { Route } from 'react-router';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Link className="Link" to="/" >Home</Link>
      <Link className="Link" to="/about" >About</Link>
      <Link className="Link" to="/contacts" >Contacts</Link>

      <Route className="Route" path="/" component={Home} exact />
      <Route className="Route" path="/about" component={About} />
      <Route className="Route" path="/contacts" component={Contacts} />

    </div>
  );
}

export default App;