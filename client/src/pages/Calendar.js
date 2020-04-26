import React from "react";
import { connect } from "react-redux";
import { getDate } from "../redux/actions/calendarActions";

class Calendar extends React.Component {
  componentDidMount() {
    this.props.getDate();
  }

  render() {
    const { date } = this.props;

    console.log(date);

    return (
      <div className="main">
        <div className="container"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  date: state.calendar.date,
});

export default connect(mapStateToProps, { getDate })(Calendar);
