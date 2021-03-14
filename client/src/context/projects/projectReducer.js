import {
  ADD_PROJECT,
  FORM_PROJECT,
  GET_PROJECTS,
  VALIDATE_FORM,
  SELECT_PROJECT,
  DELETE_PROJECT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        formAddProject: true,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        formAddProject: false,
        errorForm: false,
      };

    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true,
      };

    case SELECT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload
        )[0],
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null,
      };
    default:
      return state;
  }
};
