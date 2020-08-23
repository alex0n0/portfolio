import React from "react";
import { PropTypes } from "prop-types";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import "./styles.scss";

const ProjectCard = (props) => {
  return (
    <>
      <div className="mb-big">
        <div className="border-top border-right border-left border-secondary rounded-top">
          <div className="row m-0">
            <div className={props.projectScreenshotDesktop != null ? "col-12 col-sm-4 px-0 position-relative" : "d-none"}>
              <img src={props.projectScreenshotDesktop} height="auto" width="100%" className="mx-auto d-block d-sm-none"></img>
              <img src={props.projectScreenshotMobile} height="auto" width="100%" className="mx-auto d-none d-sm-block"></img>
            </div>
            <div className={props.projectScreenshotDesktop != null ? "pt-3 col-12 col-sm-8" : "col-12 pt-3"}>
              <div className="d-flex align-items-start">
                <h6 className="m-0 mr-auto"><b>{props.projectName}</b></h6>
                {props.isOriginal ? <span className="py-1 mr-1 badge badge-primary b-400 d-inline-block">Original design</span> : null}
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
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={`design-link-${props.id}`}>
                    Designs
                    </Tooltip>
                }
              >
                <a href={props.designURL} target={props.designURL ? "_blank" : null} className={props.designURL ? "btn btn-secondary rounded-0" : "btn btn-secondary rounded-0 disabled"}><i className="far fa-images"></i></a>
              </OverlayTrigger>
              <a href={props.liveURL} target={props.liveURL ? "_blank" : null} className={props.liveURL ? "btn btn-primary flex-grow-1 rounded-0" : "btn btn-primary flex-grow-1 rounded-0 disabled"}>LIVE SITE</a>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={`source-link-${props.id}`}>
                    Source code
                    </Tooltip>
                }
              >
                <a href={props.repoURL} target={props.repoURL ? "_blank" : null} className={props.repoURL ? "btn btn-secondary rounded-0" : "btn btn-secondary rounded-0 disabled"}><i className="fab fa-github-alt"></i></a>
              </OverlayTrigger>
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
  projectScreenshotMobile: PropTypes.string,
  projectScreenshotDesktop: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.node),
  frontEnd: PropTypes.arrayOf(PropTypes.string),
  backEnd: PropTypes.arrayOf(PropTypes.string),
  deployment: PropTypes.arrayOf(PropTypes.string),
  designURL: PropTypes.string,
  liveURL: PropTypes.string,
  repoURL: PropTypes.string,
}

export default ProjectCard;
