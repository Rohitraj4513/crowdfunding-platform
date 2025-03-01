import React, { useState } from "react";
import styled from "styled-components";
import OngoingCampaigns from "../components/OngoingCampaigns";  // ✅ Import here

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url("/images/join-bg.jpg") no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(135deg, #ff4b2b, #ff416c);
    transform: scale(1.05);
  }
`;

const Join = () => {
  const [showCampaigns, setShowCampaigns] = useState(false);

  return (
    <JoinContainer>
      {!showCampaigns ? (
        <Button onClick={() => setShowCampaigns(true)}>Join Now</Button>
      ) : (
        <OngoingCampaigns /> // ✅ Display campaigns after clicking
      )}
    </JoinContainer>
  );
};

export default Join;
