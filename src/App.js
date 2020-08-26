import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./JSX/routes/HomePage";
// import ServicesPage from "./JSX/routes/ServicesPage";
// import TechnologiesPage from "./JSX/routes/TechnologiesPage";
import ProjectsPage from "./JSX/routes/ProjectsPage";
import ErrorPage from "./JSX/routes/ErrorPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/portfolio" />
        </Route>
        <Route path="/portfolio" exact component={HomePage} />
        {/* <Route path="/portfolio/services" exact component={ServicesPage} /> */}
        {/* <Route path="/portfolio/technologies" exact component={TechnologiesPage} /> */}
        <Route path="/portfolio/projects" exact component={ProjectsPage} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
