
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // v5

import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <header className='header'>

          <h1 className='header-name'>Jill Holmes</h1>
          <ul className='nav'>
            <li className='nav-item'>
              <Link to="/" style={{ textDecoration: 'none'}}>About Me</Link>
            </li>
            <li className='nav-item'>
              <Link to="/portfolio" style={{ textDecoration: 'none'}}>Portfolio</Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact" style={{ textDecoration: 'none'}}>Contact Me</Link>
            </li>
            <li className='nav-item'>
              <Link to="/resume" style={{ textDecoration: 'none'}}>Resume</Link>
            </li>
          </ul>
        </header>




      </div>
      <Switch>
        <Route exact path="/" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/portfolio" render={() => <Portfolio />} />
        <Route exact path="/resume" render={() => <Resume />} />

        <Route compononent={NoMatch} />

      </Switch>
      </Router>


        
    </div>
  );
}

export default App;
