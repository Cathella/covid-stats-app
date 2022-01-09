import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <Router>
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
