import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./JSX/routes/HomePage";
// import ServicesPage from "./JSX/routes/ServicesPage";
// import TechnologiesPage from "./JSX/routes/TechnologiesPage";
import ProjectsPage from "./JSX/routes/ProjectsPage";
import ErrorPage from "./JSX/routes/ErrorPage";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/" />
          </Route> */}
          <Route exact path="/" exact component={HomePage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
