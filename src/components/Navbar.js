import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background:; /* Ensures navbar is always visible */
  padding: 15px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000; /* Keeps it above all content */
  height: 70px;
`;

const Logo = styled.img`
top: 20;
  height: 65px;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; /* Space between links */

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
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

  &:hover {
    background: #00c4b4;
    color: white;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      {/* Logo on the left (Always visible) */}
      <Link to="/">
        <Logo src="/images/logo.png" alt="Logo" />
      </Link>

      {/* Navbar items aligned to the right */}
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
