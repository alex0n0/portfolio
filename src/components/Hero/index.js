import React from "react";
import "./styles.scss";
// import imgHeroPattern from "../../assets/images/hero-pattern.png";

function Hero() {
  return (
    <section className="hero pmw d-flex align-items-center justify-content-center flex-column text-light text-center position-relative">
      <div className="hero-pattern position-absolute"></div>

      <div className="text-center position-relative animate__animated animate__fadeInDown animate__slower">
        <h1>Alexander Wu</h1>
        <p>Web Developer</p>
      </div>
      <div className="rounded-pill overflow-hidden position-relative animate__animated animate__fadeIn animate__zoomIn animate__delay-4s" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <a href="https://www.linkedin.com/in/alexander-wu-149372194" className="px-4 btn text-light d-inline-flex" style={{ fontSize: "1.25rem" }}><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/alex0n0?tab=stars" className="px-4 btn text-light d-inline-flex" style={{ fontSize: "1.25rem" }}><i className="fab fa-github-alt"></i></a>
      </div>
    </section>
  );
}

export default Hero;
