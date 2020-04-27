import React, { Component } from "react";

class DayNav extends Component {
  render() {
    return (
      <div id="day-nav">
        <div className="row">
          <div className="col s12 center-align">
            <button className="waves-effect waves-light btn">
              Previous Day
            </button>
            <button className="today btn waves-effect waves-teal teal lighten-5 black-text">
              TODAY
            </button>{" "}
            <button className="waves-effect waves-light btn">Next Day</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DayNav;
