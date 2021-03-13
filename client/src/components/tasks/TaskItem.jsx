import React from "react";

const TaskItem = ({ task }) => {
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button className="completo" type="button">
            Done
          </button>
        ) : (
          <button className="incompleto" type="button">
            Open
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button type="button" className="btn btn-secundario">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
