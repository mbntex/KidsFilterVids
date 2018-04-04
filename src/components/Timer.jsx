import React from 'react';
import moment from 'moment';



class Timer extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      timerShownSeconds: 0,
      timerShownMinutes: 0,
      timerShownHours: 0
    }
  } 

  componentWillMount() {
    this.sortHMSFn(this.props.currentSecondsLeft);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentSecondsLeft !== this.props.currentSecondsLeft) {
      this.sortHMSFn(nextProps.currentSecondsLeft);
      // console.log('CHANGED!!!');
    } 
  }

  sortHMSFn(num) {
    let total = {timerShownHours: 0, timerShownMinutes: 0, timerShownSeconds: 0};
    let tally = function (num) {
      if (num > 3600) {
        num -= 3600;
        total.timerShownHours ++;
        if (num > 3600) { return tally(num) }
      }
      if (num > 60) {
        num -= 60;
        total.timerShownMinutes ++;
        if (num > 60) { return tally(num) }
      }
      if (num >= 0) {
        total.timerShownSeconds = num;
      }
    };
    tally(num);
    // console.log(total);
    this.setState(total);
    return total;
  };
  



  render() {
    return(
      <div className="flex-container-vertical-spaced visible-timer">
        <div className="flex-container">
          <div className="visible-timer__unit">HOURS: {this.state.timerShownHours}</div>
          <div className="visible-timer__unit">MINUTES: {this.state.timerShownMinutes}</div>
          <div className="visible-timer__unit">SECONDS: {this.state.timerShownSeconds}</div>
        </div>
      </div>
    )
  }

}



export default Timer;