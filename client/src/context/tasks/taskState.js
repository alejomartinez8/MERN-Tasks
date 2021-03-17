import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import {
  PROJECT_TASKS,
  ADD_TASK,
  ERROR_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATE,
  SELECT_TASK,
  EDIT_TASK,
} from "../../types";

const TaskState = (props) => {
  const intitalState = {
    tasks: [
      { id: 1, name: "MERN Taks", state: true, projectId: 1 },
      { id: 2, name: "NextJS", state: false, projectId: 2 },
      { id: 3, name: "Testing", state: false, projectId: 3 },
      { id: 4, name: "Cypress", state: true, projectId: 1 },
    ],
    tasksProject: null,
    errorTask: false,
    taskSelected: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, intitalState);

  // Actions
  const getTasks = (projectId) => {
    dispatch({ type: PROJECT_TASKS, payload: projectId });
  };

  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({ type: ADD_TASK, payload: task });
  };

  const validateTask = () => {
    dispatch({ type: ERROR_TASK });
  };

  const deleteTask = (task) => {
    dispatch({ type: DELETE_TASK, payload: task });
  };

  const toggleTaskState = (task) => {
    task.state = !task.state;
    dispatch({ type: TOGGLE_TASK_STATE, payload: task });
  };

  const selectTask = (task) => {
    dispatch({ type: SELECT_TASK, payload: task });
  };

  const editTask = (task) => {
    dispatch({ type: EDIT_TASK, payload: task });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        taskSelected: state.taskSelected,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        toggleTaskState,
        selectTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
