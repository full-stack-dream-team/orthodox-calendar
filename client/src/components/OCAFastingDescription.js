import React, { Component } from "react";

class OCAFastingDescription extends Component {
  render() {
    const { day } = this.props;

    let allowed;
    let disallowed;

    switch (day.fast_exception_desc) {
      case "Wine and Oil are Allowed":
        allowed = "All of STRICT FAST, wine and oil";
        disallowed = "Meat, fish, dairy and eggs";
        break;
      case "Fish, Wine and Oil are Allowed":
        allowed = "All of STRICT FAST, wine, oil, caviar and fish";
        disallowed = "Meat, dairy and eggs";
        break;
      case "Meat Fast":
        allowed = "All of STRICT FAST, wine, oil, fish, eggs and dairy";
        disallowed = "Meat";
        break;
      case "Wine, Oil and Caviar are Allowed":
        allowed = "All of STRICT FAST, wine, oil and caviar";
        disallowed = "Meat, fish, dairy and eggs";
        break;
      case "Strict Fast":
        allowed = "Vegetables, fruit, legumes and bread";
        disallowed = "Meat, fish, oil, wine, dairy, and eggs";
        break;
      default:
        allowed = "";
        disallowed = "";
    }

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

export default OCAFastingDescription;
