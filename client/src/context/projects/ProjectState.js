/* eslint-disable */
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
} from "../../types";

const projects = [
  { id: 1, name: "React Udemy Course" },
  { id: 2, name: "Devops course" },
  { id: 3, name: "Advanced github" },
];

const ProjectState = ({ children }) => {
  const initialState = {
    formAddProject: false,
    projects: [],
    errorForm: false,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Actions
  const showForm = () => {
    dispatch({ type: FORM_PROJECT });
  };

  const getProjects = () => {
    dispatch({ type: GET_PROJECTS, payload: projects });
  };

  const addProject = (project) => {
    project.id = uuidv4();
    dispatch({ type: ADD_PROJECT, payload: project });
  };

  const showError = () => {
    dispatch({ type: VALIDATE_FORM });
  };

  const valueContext = {
    formAddProject: state.formAddProject,
    projects: state.projects,
    errorForm: state.errorForm,
    showForm,
    getProjects,
    addProject,
    showError,
  };

  return (
    <ProjectContext.Provider value={valueContext}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
