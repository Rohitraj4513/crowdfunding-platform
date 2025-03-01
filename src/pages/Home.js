import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NextSlide from "../components/NextSlide";
import WhyUs from "../components/WhyUs";
import OngoingCampaigns from "../components/OngoingCampaigns";
import TestimonialSlider from "../components/TestimonialSlider";

const backgroundImage = "/images/img6.webp";

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: left;
  padding: 0 10%;
  background: url(${backgroundImage}) no-repeat center center/cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 700px;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin: 20px 0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;

  a, button {
    text-decoration: none;
    font-size: 18px;
    padding: 12px 24px;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  .read-more {
    background: #000;
    color: white;
    border: 2px solid white;

    &:hover {
      background: white;
      color: #000;
    }
  }

  .join-now {
    background: white;
    color: black;
    font-weight: bold;
    border: none;

    &:hover {
      background: #000;
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function Home() {
  const [navbarTextBlack, setNavbarTextBlack] = useState(false);
  const campaignsRef = useRef(null); // ✅ Ref for OngoingCampaigns

  // ✅ Preload background image for better performance
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
  }, []);

  // ✅ Optimize Navbar Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setNavbarTextBlack(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to Top on Page Load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Scroll to Ongoing Campaigns Instead of Navigating
  const handleJoinNow = () => {
    campaignsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HomeContainer>
        <Content>
          <h1>Discover the Lucrative World of Vacation Rental Investing</h1>
          <p>
            Investing in vacation rentals has never been more rewarding.
            With a minimum investment of just $500, you can become a part of this thriving market.
          </p>

          <ButtonContainer>
            <Link to="/how-it-works" className="read-more">Read More</Link>
            <button onClick={handleJoinNow} className="join-now">Join Now</button>
          </ButtonContainer>
        </Content>
      </HomeContainer>

      {/* ✅ WhyUs Section */}
      <div className="white-section">
        <WhyUs />
      </div>

      {/* ✅ NextSlide Section */}
      <NextSlide />

      {/* ✅ Ongoing Campaigns Section with ref */}
      <div ref={campaignsRef}>
        <OngoingCampaigns />
      </div>

      {/* ✅ Testimonial Slider Section */}
      <TestimonialSlider />
    </>
  );
}

export default Home;
