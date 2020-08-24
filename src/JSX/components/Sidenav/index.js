import React from "react";
import "./styles.scss";

function Sidenav() {
    return (
        <div className="sidenav-container position-sticky d-flex flex-column" style={{ top: "calc(60px + 1rem)" }}>
            <div className="p-3 mb-3 flex-grow-1 overflow-auto border border-primary rounded">
                <div className="mb-3">
                    {/* <p className="m-0 small text-muted"><b>Front End</b></p> */}
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="filter-original" />
                        <label className="w-100 custom-control-label small" htmlFor="filter-original">Original</label>
                    </div>
                </div>
                <div className="mb-3">
                    <p className="m-0 small text-muted"><b>Front End</b></p>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="filter-react" />
                        <label className="w-100 custom-control-label small" htmlFor="filter-react">React</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="filter-angular" />
                        <label className="w-100 custom-control-label small" htmlFor="filter-angular">Angular</label>
                    </div>
                </div>
                <div>
                    <p className="m-0 small text-muted"><b>Back End</b></p>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="filter-node" />
                        <label className="w-100 custom-control-label small" htmlFor="filter-node">Node</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="filter-csharp" />
                        <label className="w-100 custom-control-label small" htmlFor="filter-csharp">C#</label>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-primary align-self-start mr-3 ">Set Filters</button>
                <button className="btn btn-secondary align-self-start"><i className="fas fa-redo"></i></button>
            </div>
        </div>
    );
}

export default Sidenav;
