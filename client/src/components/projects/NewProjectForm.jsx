import React, { useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProjectForm = () => {
  const context = useContext(projectContext);
  const {
    formAddProject,
    errorForm,
    showForm,
    addProject,
    showError,
  } = context;

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
    if (name !== "") {
      addProject(project);
      setProject({ name: "" });
    } else {
      showError();
    }
  };

  const handleOnClick = () => {
    showForm();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={handleOnClick}
      >
        New Project
      </button>
      {formAddProject ? (
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
      ) : null}
      {errorForm ? (
        <p className="mensaje error">Type a name for project</p>
      ) : null}
    </>
  );
};

export default NewProjectForm;
