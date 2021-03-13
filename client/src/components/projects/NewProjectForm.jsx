import React, { useState } from "react";

const NewProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  const handleOnChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>
      <form onSubmit={handleOnSubmit} className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="name"
          onChange={handleOnChange}
          value={name}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Add Project"
        />
      </form>
    </>
  );
};

export default NewProjectForm;
