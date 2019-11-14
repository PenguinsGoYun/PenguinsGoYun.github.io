import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Home from './components/pages/home';
import Journey from './components/pages/journey';
import Projects from './components/pages/projects';
import Interests from './components/pages/interests';
import Contact from './components/pages/contact';

// includes
import './assets/css/default.min.css';

function App() {
  return (
    <Router>
    <div className="App">

      <Header />

        <Route exact path='/' component={Home} />
        <Route exact path='/journey' component={Journey} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/interests' component={Interests} />
        <Route exact path='/contact' component={Contact} />

      <Footer />

    </div>
    </Router>
  );
}

export default App;
