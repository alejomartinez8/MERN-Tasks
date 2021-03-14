import { ADD_TASK, PROJECT_TASKS, ERROR_TASK } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        tasksProject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        errorTask: false,
      };

    case ERROR_TASK:
      return {
        ...state,
        errorTask: true,
      };

    default:
      return state;
  }
};
