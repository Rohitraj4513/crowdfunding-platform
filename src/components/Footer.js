import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1c1c1c, #292929);
  color: white;
  padding: 40px 0;
  text-align: center;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: left;
  padding-bottom: 20px;
  border-bottom: 1px solid #444;
`;

const Logo = styled.img`
  height: 100px;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 50px;

  a {
    color: white;
    font-size: 24px;
    transition: transform 0.3s ease;
  }

  a:hover {
    transform: scale(1.2);
    color:rgb(0, 113, 225);
  }
`;

const LinksContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: #f39c12;
  }
`;

const Newsletter = styled.div`
  margin-top: 20px;
  input {
    padding: 10px;
    width: 250px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    padding: 10px 15px;
    background-color: #f39c12;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
  }

  button:hover {
    background-color: #e67e22;
  }
`;

const Copyright = styled.div`
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.7;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <div>
          <Logo src="/images/logo.png" alt="Crowdfund Logo" />
          <p>Building a better future, one project at a time.</p>
        </div>
        <SocialIcons>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </SocialIcons>
      </FooterTop>

      <Newsletter>
        <p>Subscribe to our Newsletter</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </Newsletter>

      <Copyright>
        © {new Date().getFullYear()} Crowdfunding Platform. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
