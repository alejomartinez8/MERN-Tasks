import React from 'react';
import Sidebar from '../../components/layout/Sidebar'

export const Projects = () => {
  return <div className="contenedor-app">
    <Sidebar></Sidebar>
    <div className="seccion-principal">
      <main>
        <div className="contenedor-tareas"></div>
      </main>
    </div>
  </div>
};

export default Projects;
