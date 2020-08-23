import React from "react";
import { PropTypes } from "prop-types";

import TechnologyCard from "../TechnologyCard";

const TechnologiesGroup = (props) => {
  return (
    <div className="card mb-5 p-3 flex-row flex-wrap align-items-start justify-content-center justify-content-sm-start">
      {
        props.skills.length > 0 ?
          props.skills.map(currSkill => {
            return <TechnologyCard skill={currSkill} />
          }): null
      }
    </div>
  );
}
TechnologiesGroup.propTypes = {
  skills: PropTypes.array.isRequired
}

export default TechnologiesGroup;