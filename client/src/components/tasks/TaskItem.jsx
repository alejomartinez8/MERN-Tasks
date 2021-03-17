import React, { useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const TaskItem = ({ task }) => {
  const projectContext = useContext(ProjectContext);
  const { project } = projectContext;

  const taskContext = useContext(TaskContext);
  const { deleteTask, getTasks, toggleTaskState, selectTask } = taskContext;

  const handleDeleteTask = () => {
    deleteTask(task);
    getTasks(project.id);
  };

  const handleToggleTask = (task) => {
    toggleTaskState(task);
  };

  const handleEditTask = () => {
    selectTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button
            className="completo"
            type="button"
            onClick={() => handleToggleTask(task)}
          >
            Done
          </button>
        ) : (
          <button
            className="incompleto"
            type="button"
            onClick={() => handleToggleTask(task)}
          >
            Open
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={handleEditTask}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
