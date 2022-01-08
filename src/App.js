import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
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
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details/:countryId" element={<Details />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
);

export default App;
