import React from "react";
// import Hero from "../../components/Hero";
// import Topnav from "../../components/Topnav";

import apis from "../../APIs";

import TechnologiesGroup from "../../components/TechnologiesGroup";

function TechnologiesPage() {
  return (
    <>
      {/* <Hero></Hero> */}
      {/* <Topnav></Topnav> */}
      <main className="pagePadding pmw container-xl">
        <h2 className="text-center">Resume</h2>
        <div className="mb-5 d-flex">
          <a href="https://alex0n0.github.io/portfolio/assets/res/AlexanderWuCV.pdf"
            target="_blank" rel="noopener noreferrer" className="mx-auto btn" style={{ fontSize: "2rem" }}><i className="fas fa-file-pdf"></i></a>
        </div>

        <h2 className="text-center">Technologies Used</h2>
        <h6 className="pl-md-5">Languages</h6>
        <TechnologiesGroup skills={apis.skills.languages} />

        <h6 className="pl-md-5">Front End</h6>
        <TechnologiesGroup skills={apis.skills.frontEnd} />

        <h6 className="pl-md-5">Back End</h6>
        <TechnologiesGroup skills={apis.skills.backEnd} />
        
        <h6 className="pl-md-5">Design</h6>
        <TechnologiesGroup skills={apis.skills.design} />

        <h6 className="pl-md-5">Other</h6>
        <TechnologiesGroup skills={apis.skills.other} />


      </main>
    </>
  );
}

export default TechnologiesPage;
