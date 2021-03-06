import React from "react";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const TechnologyCard = (props) => {
  if (props.skill.projectsUsed > 0) {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id={`skill-${props.skill.id}`}>
          {props.skill.projectsUsed}&nbsp;{props.skill.projectsUsed === 1 ? "project" : "projects"}
        </Tooltip>}
      >
        <div key={props.skill.id} className="px-4 d-flex flex-column align-items-center justify-content-center small text-center">
          <div className="d-flex align-items-center" style={{ minHeight: "80px", width: "60px" }}>
            <img src={props.skill.skillIcon} alt="" width="100%" height="auto" />
          </div>
          {props.skill.name}
        </div>
      </OverlayTrigger>
    )
  }
  return (<div key={props.skill.id} className="px-4 d-flex flex-column align-items-center justify-content-center small text-center">
    <div className="d-flex align-items-center" style={{ minHeight: "80px", width: "60px" }}>
      <img src={props.skill.skillIcon} alt="" width="100%" height="auto" />
    </div>
    {props.skill.name}
  </div>)
}

export default TechnologyCard;