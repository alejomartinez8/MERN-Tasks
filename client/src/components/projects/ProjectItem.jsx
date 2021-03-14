import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const ProjectItem = ({ project }) => {
  const context = useContext(projectContext);
  const { selectProject } = context;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default ProjectItem;
