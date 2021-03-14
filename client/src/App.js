/* eslint-disable */

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, NewAccount, Projects } from "./components";
import ProjectState from "./context/projects/projectState";
import TaskState from "./context/tasks/taskState";
function App() {
  return (
    <ProjectState>
      <TaskState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </BrowserRouter>
      </TaskState>
    </ProjectState>
  );
}

export default App;
