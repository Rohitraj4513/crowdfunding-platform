import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div style={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Funds Raised:</strong> ${project.amountRaised}</p>
      <Link to={`/project/${project.id}`} style={styles.button}>View Details</Link>
    </div>
  );
};

const styles = {
  card: { border: "1px solid #ddd", padding: "15px", margin: "10px", width: "300px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" },
  button: { display: "block", marginTop: "10px", padding: "5px 10px", background: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px" }
};

export default ProjectCard;
