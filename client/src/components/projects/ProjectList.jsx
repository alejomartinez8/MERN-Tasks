import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const projects = [
    { name: "React Udemy Course" },
    { name: "Devops course" },
    { name: "Advanced github" },
  ];

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <ProjectItem project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
