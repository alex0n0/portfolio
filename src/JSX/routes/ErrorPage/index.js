import React from "react";

import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <section className="hero short pmw d-flex align-items-center justify-content-center flex-column text-light text-center position-relative">
        <div className="hero-pattern position-absolute"></div>
        <div className="pt-2 container position-absolute d-flex justify-content-start" style={{ left: "50%", top: "0px", transform: "translateX(-50%)" }}>
          <Link to="/" className="p-2 btn text-light d-inline-flex" style={{ fontSize: "1.25rem" }}><i className="fas fa-home"></i></Link>
        </div>

        <div className="text-center position-relative">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </section>
      <div className="container py-5">
        <p>The page you are looking for does not exist.</p>
        <p>Return to the <Link to="/portfolio">Homepage</Link></p>
      </div>
    </>
  );
}

export default ErrorPage;
