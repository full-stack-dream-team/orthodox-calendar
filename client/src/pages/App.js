import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import "../sass/index.scss";
import Footer from "../components/Footer";
import {
  getDate,
  setDateQuery,
  setJurisdiction,
  getRussianFast,
  getROCSaints,
  // getRussianInfo,
  getOCASaintLives,
} from "../redux/actions/calendarActions";

import DayNav from "../components/DayNav";
import DateCard from "../components/DateCard";
import FastingCard from "../components/FastingCard";
import FeastDayCard from "../components/FeastDayCard";
import Readings from "../components/Readings";
import JurisdictionsSelector from "../components/JurisdictionsSelector";

class App extends React.Component {
  state = {
    day: {},
    currentUrlParams: {},
  };

  today = new Date();

  datepickerInitialized = false;
  unmounted = false;

  setUrlParamsState = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const queries = {};
    for (let [key, value] of urlParams) {
      queries[key] = parseInt(value);
    }

    if (!this.unmounted) {
      this.setState({ currentUrlParams: queries });
    }
  };

  setDateToQuery = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const queries = {};
    for (let [key, value] of urlParams) {
      queries[key] = value;
    }

    const { year, month, day } = queries;

    if (!year || !month || !day) {
      this.props.history.push(
        `/?year=${this.today.getFullYear()}&month=${
          this.today.getMonth() + 1
        }&day=${this.today.getDate()}`
      );
    }

    if (!this.unmounted) {
      this.props.setDateQuery(
        (year || year === 0) && (month || month === 0) && (day || day === 0)
          ? { year, month, day }
          : null
      );

      this.props.getDate();
    }
  };

  initializeDatepicker = () => {
    const {
      currentUrlParams: { year, month, day },
    } = this.state;

    const currentDate = new Date();
    if (year && month && day) {
      currentDate.setFullYear(year);
      currentDate.setMonth(month - 1);
      currentDate.setDate(day);
    }

    if (!this.datepickerInitialized) {
      const options = {
        autoClose: true,
        setDefaultDate: true,
        defaultDate: currentDate,
        format: "yyyy,m,d",
        onClose: () => {
          const [year, month, day] = this.CalPicker.value.split(",");

          this.props.history.push(`/?year=${year}&month=${month}&day=${day}`);
        },
      };
      M.Datepicker.init(this.CalPicker, options);

      this.datepickerInitialized = true;
    } else {
      const calPickerInst = M.Datepicker.getInstance(this.CalPicker);
      calPickerInst.setDate(currentDate);
    }
  };

  componentDidMount() {
    this.setDateToQuery();
    this.setUrlParamsState();
    this.props.getRussianFast();
    this.props.getROCSaints();
    this.props.getOCASaintLives();

    this.unlisten = this.props.history.listen(() => {
      this.setDateToQuery();
      this.setUrlParamsState();
      this.props.getRussianFast();
      this.props.getROCSaints();
      this.props.getOCASaintLives();
    });
  }

  componentDidUpdate() {
    this.initializeDatepicker();
  }

  componentWillUnmount() {
    this.unmounted = true;
    this.unlisten();
  }

  render() {
    const { day, jurisdiction, russianFast } = this.props;

    // console.log(day);

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col s12 right-align mt-2">
              <button
                id="calendar-picker"
                ref={(CalPicker) => {
                  this.CalPicker = CalPicker;
                }}
                className="btn waves-effect waves-cyan grey lighten-5 black-text"
              >
                <i
                  className="iconify"
                  data-icon="dashicons:calendar-alt"
                  data-inline="false"
                ></i>{" "}
                Calendar
              </button>
            </div>
          </div>
          <h2 className="center-align mt-0">
            <i
              className="iconify"
              data-icon="emojione-monotone:orthodox-cross"
              data-inline="false"
            ></i>{" "}
            Daily Readings
          </h2>
          <DayNav {...this.state.currentUrlParams} />

          <JurisdictionsSelector
            setJurisdiction={(nextJurisdiction) => {
              this.props.setJurisdiction(nextJurisdiction);
              this.props.getDate();
            }}
            jurisdiction={jurisdiction}
          />

          <div className="row">
            <DateCard
              titles={day.titles}
              jurisdiction={jurisdiction}
              currentUrlParams={this.state.currentUrlParams}
            />
          </div>

          <div className="row">
            <FastingCard
              day={day}
              jurisdiction={jurisdiction}
              russianFast={russianFast}
            />
            <FeastDayCard
              day={day}
              jurisdiction={jurisdiction}
              rocSaints={this.props.rocSaints}
              // getRussianInfo={this.props.getRussianInfo}
              // russianInfo={this.props.russianInfo}
              ocaSaintLives={this.props.ocaSaintLives}
            />
          </div>

          <div className="row">
            <Readings day={day} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ calendar }) => ({
  day: calendar.date || {},
  jurisdiction: calendar.jurisdiction,
  russianFast: calendar.russianFast,
  rocSaints: calendar.rocSaints,
  // russianInfo: calendar.russianInfo,
  ocaSaintLives: calendar.ocaSaintLives,
});

export default connect(mapStateToProps, {
  getDate,
  setDateQuery,
  setJurisdiction,
  getRussianFast,
  getROCSaints,
  // getRussianInfo,
  getOCASaintLives,
})(App);
