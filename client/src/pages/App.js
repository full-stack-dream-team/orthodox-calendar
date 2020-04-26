import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
// import { logoutUser } from "../redux/actions/authActions";
import { getDate } from "../redux/actions/calendarActions";

class App extends React.Component {
  state = {
    day: {},
  };

  unmounted = false;

  componentDidMount() {
    this.props.getDate();
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
              <div className="card-panel">
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
                      subtract={{ months: 1, days: 13 }}
                    />
                  </strong>
                </p>
                <p>
                  Gregorian (New Calendar):{" "}
                  <strong>
                    <Moment
                      date={day}
                      format={"dddd, MMMM Do, YYYY"}
                      subtract={{ months: 1 }}
                    />
                  </strong>
                </p>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel">
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

          <div className="row">
            <div className="col s12">
              <div className="card-panel">
                <h5>
                  <i
                    className="iconify"
                    data-icon="maki:monument-11"
                    data-inline="false"
                  ></i>{" "}
                  Commemorations
                </h5>
                <div className="row">
                  <div className="col s12 m6">
                    <ul>
                      {day.feasts
                        ? day.feasts.map((feast) => (
                            <li key={feast}>{feast}</li>
                          ))
                        : null}
                    </ul>
                  </div>
                  <div className="col s12 m6">
                    <ul>
                      {day.saints
                        ? day.saints.map((saint) => (
                            <li key={saint}>{saint}</li>
                          ))
                        : null}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>Readings:</h2>
          <ul>
            {day.readings
              ? day.readings.map((reading) => (
                  <li key={reading.display}>
                    <div>
                      <h3>{reading.short_display}</h3>
                      {reading.passage.map((verse) => (
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

const mapStateToProps = (state) => ({
  day: state.calendar.date,
});

export default connect(mapStateToProps, { getDate })(App);
