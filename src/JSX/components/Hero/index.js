import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";


function Hero(props) {
  return (
    <section className="hero pmw d-flex align-items-center justify-content-center flex-column text-light text-center position-relative">
      <div className="hero-pattern position-absolute"></div>
      <div className="pt-2 container position-absolute d-flex justify-content-start" style={{ left: "50%", top: "0px", transform: "translateX(-50%)" }}>
        <Link to="/" className="p-2 btn text-light d-inline-flex" style={{ fontSize: "1.25rem" }}><i className="fas fa-home"></i></Link>
      </div>

      <div className={props.showHeroAnim ?
        "text-center position-relative animate__animated animate__fadeInDown animate__slower"
        : "text-center position-relative"
      }>
        <h1>Alexander Wu</h1>
        <p>Web Developer</p>
      </div>
      <div className={
        props.showHeroAnim ?
          "rounded-pill overflow-hidden position-relative animate__animated animate__fadeIn animate__zoomIn animate__delay-4s"
          : "rounded-pill overflow-hidden position-relative"
      } style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <a href="https://www.linkedin.com/in/alexander-wu-149372194" className="px-4 btn text-light d-inline-flex" style={{ fontSize: "1.25rem" }}><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/alex0n0?tab=stars" className="px-4 btn text-light d-inline-flex" style={{ fontSize: "1.25rem" }}><i className="fab fa-github-alt"></i></a>
      </div>
    </section>
  );
}

export default Hero;
