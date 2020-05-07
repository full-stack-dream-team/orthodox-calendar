import React, { Component } from "react";
import M from "materialize-css";

class JurisdictionsSelector extends Component {
  componentDidMount() {
    const options = {};
    M.Tabs.init(this.Tabs, options);
  }

  render() {
    const { jurisdiction } = this.props;

    return (
      <div id="jurisdictions">
        <div className="row">
          <div className="col s12">
            <ul
              className="tabs"
              ref={(Tabs) => {
                this.Tabs = Tabs;
              }}
            >
              <li className="tab col s2">
                <a
                  onClick={() => this.props.setJurisdiction("oca")}
                  className={jurisdiction === "oca" ? "active" : ""}
                  href="#oca"
                >
                  OCA
                </a>
              </li>
              <li className="tab col s2">
                <a
                  onClick={() => this.props.setJurisdiction("rocor")}
                  className={jurisdiction === "rocor" ? "active" : ""}
                  href="#rocor"
                >
                  ROC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default JurisdictionsSelector;
