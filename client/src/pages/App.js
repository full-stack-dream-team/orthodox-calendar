import React from "react";
import { connect } from "react-redux";
// import { logoutUser } from "../redux/actions/authActions";
import { fetchDay } from "../redux/actions/calendarActions";

class App extends React.Component {
  state = {
    day: {},
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
        {/*<button onClick={this.props.logoutUser}>Log Out</button>*/}
        <h3>Date {`${day.year}/${day.month}/${day.day}`}</h3>
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
    );
  }
}

const mapStateToProps = (state) => ({
  day: state.calendar.day,
});

export default connect(mapStateToProps, { fetchDay })(App);
