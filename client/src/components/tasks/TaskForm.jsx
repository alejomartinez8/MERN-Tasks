import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const TaskForm = () => {
  const context = useContext(projectContext);
  const { project } = context;

  if (!project) return null;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name..."
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
