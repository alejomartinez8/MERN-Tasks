import { FORM_PROJECT } from "../../types";

export default function projectReducer(state, action) {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: !state.form,
      };
    default:
      return state;
  }
}
