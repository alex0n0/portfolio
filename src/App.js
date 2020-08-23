import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "./routes/HomePage";
import ServicesPage from "./routes/ServicesPage";
import TechnologiesPage from "./routes/TechnologiesPage";
import ProjectsPage from "./routes/ProjectsPage";

import Hero from "./components/Hero";
import Topnav from "./components/Topnav";
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
