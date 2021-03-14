/* eslint-disable */
import { useReducer } from "react";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT, GET_PROJECTS } from "../../types";

const projects = [
  { id: 1, name: "React Udemy Course" },
  { id: 2, name: "Devops course" },
  { id: 3, name: "Advanced github" },
];

const ProjectState = ({ children }) => {
  const initialState = {
    form: false,
    projects: [],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Actions
  const showForm = () => {
    dispatch({ type: FORM_PROJECT });
  };

  const getProjects = () => {
    dispatch({ type: GET_PROJECTS, payload: projects });
  };

  const valueContext = {
    form: state.form,
    projects: state.projects,
    showForm,
    getProjects,
  };

  return (
    <ProjectContext.Provider value={valueContext}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
