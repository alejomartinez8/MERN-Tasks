import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, NewAccount, Projects } from "./components";
import ProjectState from "./context/projects/ProjectState";

function App() {
  return (
    <ProjectState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </ProjectState>
  );
}

export default App;
