import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const TaskList = () => {
  const projectContext = useContext(ProjectContext);
  const { project, deleteProject } = projectContext;

  const taskContext = useContext(TaskContext);
  const { tasksProject } = taskContext;

  if (!project) return <h2>Select a Project</h2>;

  const handleOnClick = () => {
    deleteProject(project.id);
  };

  return (
    <>
      <h2>{project.name}</h2>
      <ul className="listado-tareas">
        {tasksProject?.length ? (
          tasksProject.map((task) => <TaskItem key={task.id} task={task} />)
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
