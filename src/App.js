import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Container from './components/routingComponent/container';

// includes
import './assets/css/default.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />

      <Container />

      <Footer />

    </div>
    
    </Router>
  );
}

export default App;
