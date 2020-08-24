import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "./JSX/routes/HomePage";
import ServicesPage from "./JSX/routes/ServicesPage";
import TechnologiesPage from "./JSX/routes/TechnologiesPage";
import ProjectsPage from "./JSX/routes/ProjectsPage";

import Hero from "./JSX/components/Hero";
import Topnav from "./JSX/components/Topnav";
// import logo from './logo.svg';

function App() {
  return (
    <>
      <Hero></Hero>
      <Topnav></Topnav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/technologies" exact component={TechnologiesPage} />
        <Route path="/projects" exact component={ProjectsPage} />
      </Switch>
    </>
  );
}

export default App;
