import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/"; // Hide navbar on Home page
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    if (hideNavbar) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideNavbar]);

  return (
    <>
      {!hideNavbar || showNavbar ? <Navbar /> : null} {/* Navbar appears on scroll */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout />
    </Router>
  );
}

export default App;
