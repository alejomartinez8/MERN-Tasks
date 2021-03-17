import React, { useContext, useState, useEffect } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const projectContext = useContext(ProjectContext);
  const { project } = projectContext;

  const taskContext = useContext(TaskContext);
  const {
    taskSelected,
    errorTask,
    addTask,
    validateTask,
    getTasks,
    editTask,
  } = taskContext;

  const [task, setTask] = useState({ name: "" });
  const { name } = task;

  const handleOnChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      validateTask();
      return;
    }

    if (taskSelected === null) {
      task.projectId = project.id;
      task.state = false;
      addTask(task);
    } else {
      editTask(task);
    }

    setTask({ name: "" });
    getTasks(project.id);
  };

  useEffect(() => {
    if (taskSelected) setTask(taskSelected);
  }, [taskSelected]);

  return (
    <>
      {project ? (
        <div className="formulario">
          <form onSubmit={handleOnSubmit}>
            <div className="contenedor-input">
              <input
                type="text"
                className="input-text"
                placeholder="Task name..."
                name="name"
                onChange={handleOnChange}
                value={name}
              />
            </div>
            <div className="contenedor-input">
              <input
                type="submit"
                className="btn btn-primario btn-submit btn-block"
                value={taskSelected ? "Edit Task" : "Add Task"}
              />
            </div>
          </form>
          {errorTask ? <p className="mensaje error">Add name task</p> : null}
        </div>
      ) : null}
    </>
  );
};

export default TaskForm;
