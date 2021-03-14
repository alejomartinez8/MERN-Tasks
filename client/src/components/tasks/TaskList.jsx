import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import ProjectContext from "../../context/projects/projectContext";

const TaskList = () => {
  const context = useContext(ProjectContext);
  const { project, deleteProject } = context;

  if (!project) return <h2>Select a Project</h2>;

  const handleOnClick = () => {
    deleteProject(project.id);
  };

  const tasks = [
    { id: 1, name: "MERN Takss", state: true },
    { id: 2, name: "NextJS", state: false },
    { id: 3, name: "Testing", state: false },
    { id: 4, name: "Cypress", state: true },
  ];
  return (
    <>
      <h2>Project: {project.name}</h2>
      <ul className="listado-tareas">
        {tasks.length ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <li>There are not tasks</li>
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={handleOnClick}
      >
        Delete Project &times;
      </button>
    </>
  );
};

export default TaskList;
