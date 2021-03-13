import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT } from "../../types";

const ProjectState = ({ children }) => {
  const initialState = {
    form: false,
    projects: [
      { id: 1, name: "React Udemy Course" },
      { id: 2, name: "Devops course" },
      { id: 3, name: "Advanced github" },
    ],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({ type: FORM_PROJECT });
  };

  const valueContext = {
    form: state.form,
    projects: state.projects,
    showForm,
  };

  return (
    <ProjectContext.Provider value={valueContext}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
