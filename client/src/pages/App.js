import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
// import { logoutUser } from "../redux/actions/authActions";
import { fetchDay } from "../redux/actions/calendarActions";

class App extends React.Component {
  state = {
    day: {}
  };

  unmounted = false;

  getDay = () => {
    this.props.fetchDay();
    // .then((res) => {
    //   if (!this.unmounted) {
    //     this.setState({ day: res || {} });
    //   }
    // });
  };

  componentDidMount() {
    this.props.fetchDay();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.day !== this.props.day) {
      this.setState({ day: this.props.day });
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const { day } = this.state;

    console.log(day);

    return (
      <div className="App main">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel light-blue lighten-5">
                {/*<button onClick={this.props.logoutUser}>Log Out</button>*/}
                <h5>
                  <i
                    className="iconify"
                    data-icon="el:calendar-sign"
                    data-inline="false"
                  ></i>{" "}
                  DATE
                </h5>
                <p>
                  Julian (Old Calendar):{" "}
                  <strong>
                    <Moment
                      date={day}
                      format={"dddd, MMMM Do, YYYY"}
                      subtract={{ days: 13 }}
                    />
                  </strong>
                </p>
                <p>
                  Gregorian (New Calendar):{" "}
                  <strong>
                    <Moment date={day} format={"dddd, MMMM Do, YYYY"} />
                  </strong>
                </p>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel light-blue lighten-5">
                <h5>
                  <i
                    className="iconify"
                    data-icon="mdi:bolnisi-cross"
                    data-inline="false"
                  ></i>{" "}
                  FAST
                </h5>
                <p>
                  <strong>{day.fast_exception_desc}</strong>
                </p>
              </div>
            </div>
          </div>

          <h2>Readings:</h2>
          <ul>
            {day.readings
              ? day.readings.map(reading => (
                  <li key={reading.display}>
                    <div>
                      <h3>{reading.short_display}</h3>
                      {reading.passage.map(verse => (
                        <p key={verse.content}>{verse.content}</p>
                      ))}
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  day: state.calendar.day
});

export default connect(
  mapStateToProps,
  { fetchDay }
)(App);
