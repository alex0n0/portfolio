import React from "react";
import { PropTypes } from "prop-types";
import "./styles.scss";

const ProjectCard = (props) => {
  return (
    <>
      <div className="mb-big">
        <div className="border-top border-right border-left border-secondary rounded-top">
          <div className="row m-0">
            <div className={props.projectScreenshot != null ? "col-12 col-sm-4 px-0" : "d-none"}>
              <img src={props.projectScreenshot} height="auto" width="100%"></img>
            </div>
            <div className={props.projectScreenshot != null ? "pt-3 col-12 col-sm-8" : "col-12 pt-3"}>
              <div className="d-flex align-items-start">
                <h6 className="m-0 mr-auto"><b>{props.projectName}</b></h6>
                {props.isOriginal ? <span className="py-1 mr-1 badge badge-primary b-400 d-inline-block">Original</span> : null}
              </div>
              <p>{props.projectDescription}</p>
              {
                props.categories.map(currCategory =>
                  <>
                    <p className="m-0 small"><b>{currCategory.category}</b></p>
                    <div className="mb-3">
                      {currCategory.list.map((curr, i) => <span key={i} className="py-1 mr-1 badge badge-dark b-400 d-inline-block">{curr}</span>)}
                    </div>
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className="rounded-bottom overflow-hidden">
          <div className="row">
            <div className="col-12 d-flex">
              <a href={props.designURL} target={props.designURL ? "_blank" : null} className={props.designURL ? "btn btn-secondary rounded-0" : "btn btn-secondary rounded-0 disabled"}><i className="far fa-images"></i></a>
              <a href={props.liveURL} target={props.liveURL ? "_blank" : null} className={props.liveURL ? "btn btn-primary flex-grow-1 rounded-0" : "btn btn-primary flex-grow-1 rounded-0 disabled"}>LIVE SITE</a>
              <a href={props.repoURL} target={props.repoURL ? "_blank" : null} className={props.repoURL ? "btn btn-secondary rounded-0" : "btn btn-secondary rounded-0 disabled"}><i className="fab fa-github-alt"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.string,
  isOriginal: PropTypes.bool,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectScreenshot: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.node),
  frontEnd: PropTypes.arrayOf(PropTypes.string),
  backEnd: PropTypes.arrayOf(PropTypes.string),
  deployment: PropTypes.arrayOf(PropTypes.string),
  designURL: PropTypes.string,
  liveURL: PropTypes.string,
  repoURL: PropTypes.string,
}

export default ProjectCard;