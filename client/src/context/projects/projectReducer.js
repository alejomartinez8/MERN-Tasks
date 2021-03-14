import { FORM_PROJECT, GET_PROJECTS } from "../../types";

export default function projectReducer(state, action) {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: !state.form,
      };

    case GET_PROJECTS:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
}
