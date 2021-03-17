import {
  ADD_TASK,
  PROJECT_TASKS,
  ERROR_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATE,
  SELECT_TASK,
  EDIT_TASK,
} from "../../types";

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
        tasks: [action.payload, ...state.tasks],
        errorTask: false,
      };

    case ERROR_TASK:
      return {
        ...state,
        errorTask: true,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    case EDIT_TASK:
    case TOGGLE_TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        errorTask: false,
        taskSelected: null,
      };

    case SELECT_TASK:
      return {
        ...state,
        taskSelected: action.payload,
      };

    default:
      return state;
  }
};
