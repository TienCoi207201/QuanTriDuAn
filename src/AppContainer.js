import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from './screens/Home';
import Products from './screens/Products';
import Detail from './screens/Detail';
import Cart from './screens/Cart';
import Wishlist from './screens/Wishlist';
import Login from './screens/Login';
import Register from './screens/Register';
import Screen1 from './screens/screen1'
import Screen2 from './screens/Screen2';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/screen1' element={<Screen1/>}/>
        <Route path="/wishlish" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/screen2" element={<Screen2 />} />
      </Routes>
    </BrowserRouter>
  );
}