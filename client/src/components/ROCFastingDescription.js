import React, { Component } from "react";

class ROCFastingDescription extends Component {
  render() {
    const {
      russianFast: { allowed, disallowed },
    } = this.props;

    return (
      <>
        <div className="row">
          <div className="col s12">
            {allowed ? <strong>Allowed: {allowed}</strong> : null}
          </div>
          <div className="col s12">
            {disallowed ? <strong>Refrain from: {disallowed}</strong> : null}
          </div>
        </div>
      </>
    );
  }
}

export default ROCFastingDescription;
