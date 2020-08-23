import React from "react";
import Hero from "../../components/Hero";
import Topnav from "../../components/Topnav";
import TechnologyCard from "../../components/TechnologyCard";

function TechnologiesPage() {
  return (
    <>
      {/* <Hero></Hero> */}
      {/* <Topnav></Topnav> */}
      <main className="pagePadding pmw container-xl">
        <h2 className="text-center">Resume</h2>
        <div className="mb-5 d-flex">
          <a href="https://alex0n0.github.io/portfolio/assets/res/AlexanderWuCV.pdf"
            target="_blank" className="mx-auto btn" style={{fontSize: "2rem"}}><i className="fas fa-file-pdf"></i></a>
        </div>

        <h2 className="text-center">Technologies Used</h2>
        <h6 className="px-5">Front End</h6>
        <TechnologyCard></TechnologyCard>
        <TechnologyCard></TechnologyCard>

        <h6 className="px-5">Back End</h6>
        <TechnologyCard></TechnologyCard>
        <TechnologyCard></TechnologyCard>

        <h6 className="px-5">Other</h6>
        <TechnologyCard></TechnologyCard>
        <TechnologyCard></TechnologyCard>




      </main>
    </>
  );
}

export default TechnologiesPage;
