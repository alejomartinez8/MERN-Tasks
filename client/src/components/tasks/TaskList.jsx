import React from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = [
    { id: 1, name: "MERN Takss", state: true },
    { id: 2, name: "NextJS", state: false },
    { id: 3, name: "Testing", state: false },
    { id: 4, name: "Cypress", state: true },
  ];
  return (
    <>
      <h2>Project: React Udemy Course</h2>
      <ul className="listado-tareas">
        {tasks.length ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
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
