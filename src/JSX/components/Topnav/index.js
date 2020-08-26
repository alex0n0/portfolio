import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

function Topnav() {
  return (
    <section className="topnav position-sticky shadow" style={{top: "0px", zIndex: "1000"}}>
      <div className="container-xl p-0">
        <nav className="row no-gutters flex-nowrap justify-content-center">
          {/* <div className="col-4"><NavLink exact to="/" activeClassName="active" className="link b-700"><span className="text-truncate">SERVICES</span></NavLink></div> */}
          {/* <div className="col-4"><NavLink to="/technologies" activeClassName="active" className="link b-700"><span className="text-truncate">TECHNOLOGIES</span></NavLink></div> */}
          <div className="col-4"><NavLink to="/portfolio" exact activeClassName="active" className="link b-700"><span className="text-truncate">SKILLS</span></NavLink></div>
          <div className="col-4"><NavLink to="/portfolio/projects" exact activeClassName="active" className="link b-700"><span className="text-truncate">PROJECTS</span></NavLink></div>
        </nav>
      </div>
    </section>
  );
}

export default Topnav;
