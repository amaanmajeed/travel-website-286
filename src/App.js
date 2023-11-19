import React from 'react';

import Index from './Pages/Index';
import About from './Pages/About';
import Contact from './Pages/Contact';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>      
      
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
