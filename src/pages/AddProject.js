import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 30px;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: #27ae60;
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #219150;
    }
`;

function AddProject() {
    const [project, setProject] = useState({
        name: "",
        description: "",
        goal: "",
    });

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Project Submitted!");
    };

    return (
        <FormContainer>
            <h2>Create a New Project</h2>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Project Name" onChange={handleChange} />
                <Input type="text" name="description" placeholder="Project Description" onChange={handleChange} />
                <Input type="number" name="goal" placeholder="Funding Goal ($)" onChange={handleChange} />
                <Button type="submit">Create Project</Button>
            </form>
        </FormContainer>
    );
}

export default AddProject;
