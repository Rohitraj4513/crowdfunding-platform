import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Join from "./components/Join";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import MyDashboard from "./pages/MyDashboard"; 
import OngoingCampaigns from "./components/OngoingCampaigns";  // ✅ Import OngoingCampaigns

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; 
  const [showNavbar, setShowNavbar] = useState(!isHomePage);
  const [navbarTextBlack, setNavbarTextBlack] = useState(!isHomePage);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setShowNavbar(scrolled);
      setNavbarTextBlack(scrolled);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]); // ✅ Runs only when `isHomePage` changes

  return (
    <>
      {(showNavbar || !isHomePage) && <Navbar navbarTextBlack={navbarTextBlack} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/dashboard" element={<MyDashboard />} />
        <Route path="/campaigns" element={<OngoingCampaigns />} /> {/* ✅ Added OngoingCampaigns route */}
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
