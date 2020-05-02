import React, { Component } from "react";

class ROCORFastingDescription extends Component {
  render() {
    const { russianFast } = this.props;

    let allowed;
    let disallowed;

    if (russianFast.includes("Full abstention from food")) {
      disallowed = "All food";
    } else if (russianFast.includes("Strict Fast")) {
      allowed = "Raw vegetables, fruit and bread";
      disallowed = "Cooked food, meat, fish, oil, wine, dairy and eggs";
    } else if (russianFast.includes("Food without Oil")) {
      allowed = "Cooked vegetables, fruit, legumes and bread";
      disallowed = "Fried foods, meat, fish, oil, wine, dairy and eggs";
    } else if (russianFast.includes("Food with Oil")) {
      allowed = "All of DRY FAST, wine and oil";
      disallowed = "Meat, fish, dairy and eggs";
    } else if (russianFast.includes("Caviar Allowed")) {
      allowed = "All of DRY FAST, wine, oil and caviar";
      disallowed = "Meat, fish, dairy and eggs";
    } else if (russianFast.includes("Fish Allowed")) {
      allowed = "All of DRY FAST, wine, oil, caviar and fish";
      disallowed = "Meat, dairy and eggs";
    } else if (russianFast.includes("Meat is excluded")) {
      allowed = "All of DRY FAST, wine, oil, fish, eggs and dairy";
      disallowed = "Meat";
    } else {
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

export default ROCORFastingDescription;
