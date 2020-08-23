import React from "react";
import "./styles.scss";

function TechnologyCard() {
  return (
    <div className="card mb-5">
      <div className="m-0 row">
        <div className="titleSection py-3 col-12 col-md-auto">
          <div className="px-4 h-100 d-flex align-items-center justify-content-center">
            <div className="bg-primary m-2 small text-center" style={{ height: "90px", width: "60px" }}>Angular</div>
          </div>
        </div>
        <div className="py-2 col-12 col-md px-2">
          <div className="h-100 d-flex align-items-center flex-wrap">
            <div className="bg-primary my-2 mx-3" style={{ height: "90px", width: "60px" }}></div>
            <div className="bg-primary my-2 mx-3" style={{ height: "90px", width: "60px" }}></div>
            <div className="bg-primary my-2 mx-3" style={{ height: "90px", width: "60px" }}></div>
            <div className="bg-primary my-2 mx-3" style={{ height: "90px", width: "60px" }}></div>
            <div className="bg-primary my-2 mx-3" style={{ height: "90px", width: "60px" }}></div>
            <div className="bg-primary my-2 mx-3" style={{ height: "90px", width: "60px" }}></div>
            <div className="bg-primary my-2 mx-3" style={{ height: "90px", width: "60px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;
