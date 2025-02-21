import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Project Details (ID: {id})</h2>
      <p>More details about this project will be displayed here.</p>
      <button style={{ padding: "10px", background: "#007bff", color: "white", fontSize: "16px", border: "none", cursor: "pointer" }}>Fund This Project</button>
    </div>
  );
};

export default ProjectDetails;
