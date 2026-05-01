import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
