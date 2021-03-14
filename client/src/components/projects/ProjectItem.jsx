import React, { useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const ProjectItem = ({ project }) => {
  const projectContext = useContext(ProjectContext);
  const { selectProject } = projectContext;

  const taskContext = useContext(TaskContext);
  const { getTasks } = taskContext;

  const handleOnClick = () => {
    selectProject(project.id);
    getTasks(project.id);
  };

  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={handleOnClick}>
        {project.name}
      </button>
    </li>
  );
};

export default ProjectItem;
