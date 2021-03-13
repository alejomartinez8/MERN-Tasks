import React from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = [
    { name: "MERN Takss", state: true },
    { name: "NextJS", state: false },
    { name: "Testing", state: false },
    { name: "Cypress", state: true },
  ];
  return (
    <>
      <h2>Project: React Udemy Course</h2>
      <ul className="listado-tareas">
        {tasks.length ? (
          tasks.map((task) => <TaskItem task={task} />)
        ) : (
          <li>There are not tasks</li>
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Delete Project &times;
      </button>
    </>
  );
};

export default TaskList;
