import React from "react";
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
  color: #d10052;
  margin-bottom: 20px;
`;

const SliderWrapper = styled(Slider)`
  .slick-slide {
    padding: 10px;
  }
`;

const CampaignCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  transition: 0.3s;

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
  }
`;

const OngoingCampaigns = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const campaigns = [
    {
      img: "/images/campaign1.jpg",
      title: "Nationally Recognized Care",
      description: "Providing life-saving procedures like transplants for children.",
      amount: "$500",
    },
    {
      img: "/images/campaign2.jpg",
      title: "Maternity & Baby Care",
      description: "Supporting high-risk moms and babies before, during, and after delivery.",
      amount: "$250",
    },
    {
      img: "/images/campaign3.jpg",
      title: "Support for Riley Kids",
      description: "Helping children overcome anxieties through play and activities.",
      amount: "$100",
    },
    {
      img: "/images/campaign4.jpg",
      title: "Clinical Research & Studies",
      description: "Developing new treatments and innovative healthcare solutions.",
      amount: "$50",
    },
    {
      img: "/images/campaign5.jpg",
      title: "Cancer Treatment Programs",
      description: "Funding new therapies for children battling cancer.",
      amount: "$400",
    },
  ];

  return (
    <CampaignsContainer>
      <Title>Ongoing Campaigns</Title>
      <SliderWrapper {...settings}>
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index}>
            <ImageWrapper>
              <img src={campaign.img} alt={campaign.title} />
            </ImageWrapper>
            <Content>
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <span>{campaign.amount}</span>
            </Content>
            <DonateButton>DONATE</DonateButton>
          </CampaignCard>
        ))}
      </SliderWrapper>
    </CampaignsContainer>
  );
};

export default OngoingCampaigns;
