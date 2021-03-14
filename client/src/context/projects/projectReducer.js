import {
  ADD_PROJECT,
  FORM_PROJECT,
  GET_PROJECTS,
  VALIDATE_FORM,
} from "../../types";

export default function projectReducer(state, action) {
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
    default:
      return state;
  }
}
