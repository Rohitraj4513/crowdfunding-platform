import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for home page
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // Always black for other pages
    }
  }, [location.pathname]);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "15px 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
    transition: "background 0.3s ease-in-out",
    background: location.pathname === "/" && !isScrolled ? "white" : "black",
  };

  const linkStyle = {
    color: location.pathname === "/" && !isScrolled ? "black" : "white",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s ease-in-out",
  };

  const dashboardBtnStyle = {
    background: "white",
    color: "black",
    padding: "8px 16px",
    borderRadius: "5px",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "0.3s ease-in-out",
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="/images/logo.png" alt="Logo" style={{ height: "65px" }} />
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/how-it-works" style={linkStyle}>How It Works</Link>
        <Link to="/testimonials" style={linkStyle}>Testimonials</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/dashboard" style={dashboardBtnStyle}>My Dashboard</Link>
      </div>
    </nav>
  );
};

export default Header;
