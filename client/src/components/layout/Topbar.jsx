import React from "react";

const Topbar = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hi, <span>User</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Logout</a>
      </nav>
    </header>
  );
};

export default Topbar;
