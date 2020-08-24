import React from "react";
// import Sidenav from "../../components/Sidenav";
import ProjectCard from "../../components/ProjectCard";

import apis from "../../../APIs";

import "./styles.scss";

function ProjectsPage() {
  return (
    <>
      <main className="pagePadding pmw container-xl">
        <h2 className="mb-5 text-center">Project Gallery</h2>
        <div className="row">
          {/* <div className="col d-none d-md-block" style={{ flex: "0 0 260px" }}>
           <Sidenav></Sidenav>
          </div> */}
          {/* <div className="col"> */}
          <div className="mx-auto col-12 col-md-8">
            {apis.projects.map((curr, i) => <ProjectCard key={i} project={curr}></ProjectCard>)}
          </div>
        </div>
      </main>
    </>
  );
}

export default ProjectsPage;
