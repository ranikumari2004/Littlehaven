import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './HomePages/Home';
import React from "react";
import Login from './login-register/Login';
import './App.css';
import Register from './login-register/Register';
import Gallery from './GalleryPages/Gallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/HomePages/Home" />} />  {/* Default redirect */}
        <Route path="/HomePages/Home" element={<Home />} />
        <Route path="/login-register/login" element={<Login />} />
        <Route path="/login-register/register" element={<Register />} />
        <Route path ="/GalleryPages/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
