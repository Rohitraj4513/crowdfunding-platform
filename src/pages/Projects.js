import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const ProjectCard = styled.div`
  background: white;
  padding: 20px;
  margin: 20px auto;
  width: 50%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

function Projects() {
  return (
    <ProjectsContainer>
      <h2>Our Crowdfunding Projects</h2>
      <ProjectCard>
        <h3>Water for Rural Areas</h3>
        <p>Help us provide clean drinking water to 5000+ families.</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Education for All</h3>
        <p>Fund education for underprivileged children.</p>
      </ProjectCard>
    </ProjectsContainer>
  );
}

export default Projects;
