import React, { useContext, useEffect } from "react";
import ProjectContext from "../../context/projects/projectContext";
import ProjectItem from "./ProjectItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
          <TransitionGroup>
            {projects.map((project) => (
              <CSSTransition
                key={project.id}
                classNames="proyecto"
                timeout={200}
              >
                <ProjectItem project={project} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      ) : (
        <p>There are not projects, create a new Project</p>
      )}
    </>
  );
};

export default ProjectList;
