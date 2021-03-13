import React from "react";
import NewProjectForm from "../projects/NewProjectForm";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MENR<span>Tasks</span>
      </h1>
      <NewProjectForm />
      <div className="proyectos">
        <h2>Projects</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
