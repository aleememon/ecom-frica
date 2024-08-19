import React from "react";
import Navbar from "./components/Navbar";
import MobilePhones from "./components/MobilePhones";
import Labtops from "./components/Labtops";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <MobilePhones />
                <Labtops />
              </>
            }
          />
          <Route path="/mobile-phones" element={<MobilePhones />} />
          <Route path="/labtops" element={<Labtops />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/buynow"
            element={
              <>
                <MobilePhones />
                <Labtops />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
