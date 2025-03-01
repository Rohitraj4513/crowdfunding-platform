import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background: transparent;
  box-shadow: none;
  transition: background 0.3s ease-in-out;
`;

const Logo = styled.img`
  height: 65px;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  color: #ADD8E6;
  text-decoration: none;
  font-weight: 1000;
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #00c4b4;
  }
`;

const DashboardButton = styled(Link)`
  background: white;
  color: black;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid black;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: black;
    color: white;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      {/* Logo on the left */}
      <Link to="/">
        <Logo src="/images/logo.png" alt="Logo" />
      </Link>

      {/* Navbar links */}
      <NavRight>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/how-it-works">How It Works</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <DashboardButton to="/dashboard">My Dashboard</DashboardButton>
      </NavRight>
    </NavbarContainer>
  );
}

export default Navbar;