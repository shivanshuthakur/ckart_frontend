
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';
import Home from './components/Home';
import Login from './Page/Login';
import Profile from './Page/Profile';
import Register from './Page/Register';
import Productcat from './Page/Productcat';
import Cart from './Page/cart';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="/productcat/:id" element={<Productcat/>} />
          <Route path="/cart" element={<Cart />} />



        </Routes>
        <Footer />
      </BrowserRouter>
      .

    </>

  );
}

export default App;
