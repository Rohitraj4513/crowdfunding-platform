import React, { useEffect, useState, forwardRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CampaignsContainer = styled.div`
  padding: 40px;
  text-align: center;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #d6006e;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SliderWrapper = styled(Slider)`
  .slick-slide {
    padding: 10px;
  }
`;

const CampaignCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 20px;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
    color: #d10052;
    font-size: 1.2rem;
  }
`;

const DonateButton = styled.button`
  width: 100%;
  background: #d10052;
  color: white;
  border: none;
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0 0 10px 10px;
  transition: 0.3s;

  &:hover {
    background: #a0003e;
    transform: scale(1.05);
  }
`;

const OngoingCampaigns = forwardRef((props, ref) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/campaigns");
        setCampaigns(response.data || []);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
        setError("Failed to load campaigns. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(campaigns.length, 3),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(campaigns.length, 2),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(campaigns.length, 1),
        },
      },
    ],
  };

  if (loading)
    return (
      <CampaignsContainer aria-live="polite">
        <Title>Loading campaigns...</Title>
      </CampaignsContainer>
    );

  if (error)
    return (
      <CampaignsContainer>
        <Title>{error}</Title>
      </CampaignsContainer>
    );

  return (
    <CampaignsContainer ref={ref}>
      <Title>Ongoing Campaigns</Title>
      {campaigns.length > 0 ? (
        <SliderWrapper {...settings}>
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign._id}>
              <ImageWrapper>
                <img
                  src={campaign.image || "/images/default.jpg"}
                  alt={campaign.title || "Campaign Image"}
                  loading="lazy"
                />
              </ImageWrapper>
              <Content>
                <h3>{campaign.title || "Untitled Campaign"}</h3>
                <p>{campaign.description || "No description available."}</p>
                <span>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(campaign.raisedAmount || 0)}{" "}
                  /{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(campaign.goalAmount || 0)}
                </span>
              </Content>
              <DonateButton>DONATE</DonateButton>
            </CampaignCard>
          ))}
        </SliderWrapper>
      ) : (
        <p>No campaigns available at the moment.</p>
      )}
    </CampaignsContainer>
  );
});

export default OngoingCampaigns;
