import React, { useContext, useEffect } from "react";
import ProjectContext from "../../context/projects/projectContext";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  // Extract project from Context
  const context = useContext(ProjectContext);
  const { projects, getProjects } = context;

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {projects.length ? (
        <ul className="listado-proyectos">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default ProjectList;
