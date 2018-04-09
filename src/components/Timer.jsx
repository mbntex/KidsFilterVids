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
    this.sortHMSFn(this.props.timerSecondsLeft);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timerSecondsLeft !== this.props.timerSecondsLeft) {
      this.sortHMSFn(nextProps.timerSecondsLeft);
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
      if (num > 59) {
        num -= 60;
        total.timerShownMinutes ++;
        if (num > 59) { return tally(num) }
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
  

// timerStartTimeThisRun = {this.state.timerStartTimeThisRun}
//                 timerSecondsLeft = {this.state.timerSecondsLeft}

  render() {
    var visibleTimerTextColor = 'red';
    var visibleTimerTextStyle = {color: 'red'};
    // (this.props.isTimerOn) ? visibleTimerTextColor = 'red' : visibleTimerTextColor = 'white'
    ((this.props.timerSecondsLeft / this.props.timerStartTimeThisRun) > 0.7) ? visibleTimerTextStyle = {color: 'white', textShadow: '2px 2px #000000'} : visibleTimerTextStyle = {color: 'red', textShadow: '0px 0px #000000'}
    return(
      <div className="flex-container-vertical-spaced visible-timer">
      { (this.props.isTimerOn) ? 
        <div className="flex-container" style={visibleTimerTextStyle}>
          <div className="visible-timer__unit">HOURS: {this.state.timerShownHours}</div>
          <div className="visible-timer__unit">MINUTES: {this.state.timerShownMinutes}</div>
          <div className="visible-timer__unit">SECONDS: {this.state.timerShownSeconds}</div>
        </div> : 
        <div className="flex-container">
          <div className="visible-timer__unit" style={{color: 'green'}}>TIMER IS OFF</div>
        </div>
      }
      </div>
    )
  }
}



export default Timer;