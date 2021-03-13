import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../layout/Topbar";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";

export const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Topbar />
        <main>
          <TaskForm />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
