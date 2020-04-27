import React, { Component } from "react";
import M from "materialize-css";

class DatePicker extends Component {
  componentDidMount() {
    const options = {
      defaultDate: new Date(),
      setDefaultDate: true
    };
    M.Datepicker.init(this.DatePicker, options);
  }

  render() {
    return (
      <span
        style={{ marginRight: "2em", fontSize: "2em", verticalAlign: "top" }}
        ref={DatePicker => (this.DatePicker = DatePicker)}
        className="datepicker"
      >
        <i
          className="iconify"
          data-icon="dashicons:calendar-alt"
          data-inline="false"
        ></i>{" "}
      </span>
    );
  }
}

export default DatePicker;
