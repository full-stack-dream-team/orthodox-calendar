import React, { Component } from "react";

class FastingDescription extends Component {
  render() {
    const { day } = this.props;

    let allowed;
    let disallowed;

    switch (day.fast_exception_desc) {
      case "Wine and Oil are Allowed":
        allowed = "All of the strict fast items, wine and oil";
        disallowed = "Meat, fish, dairy and eggs";
        break;
      case "Fish, Wine and Oil are Allowed":
        allowed = "All of the strict fast items, wine, oil, caviar and fish";
        disallowed = "Meat, dairy and eggs";
        break;
      case "Meat Fast":
        allowed =
          "All of the strict fast items, wine, oil, fish, eggs and dairy";
        disallowed = "Meat";
        break;
      case "Wine, Oil and Caviar are Allowed":
        allowed = "All of the strict fast items, wine, oil and caviar";
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
            <strong>Allowed: </strong>
            {allowed}
          </div>
          <div className="col s12">
            <strong>Refrain from: </strong>
            {disallowed}
          </div>
        </div>
      </>
    );
  }
}

export default FastingDescription;
