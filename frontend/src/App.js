import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import './App.css';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/shop/:model_name' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
