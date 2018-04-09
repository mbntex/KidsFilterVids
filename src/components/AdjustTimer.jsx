import React from 'react';
import TimerPopUp from '../components/TimerPopUp.jsx';

 
class AdjustTimer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      timerShownSeconds: 0,
      timerShownMinutes: 0,
      timerShownHours: 0,
      setTimerPopUpShown: false
    }
  }

  componentWillMount() {
    this.sortHMSFn(this.props.currentSecondsLeft);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentSecondsLeft !== this.props.currentSecondsLeft) {
      this.sortHMSFn(nextProps.currentSecondsLeft);
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

  toggleSetTimerPopUpFn() {
    this.setState({setTimerPopUpShown: !this.state.setTimerPopUpShown});
    this.props.timerStopFn()
  }

  combinedFuncitonsOnClick() {
    this.toggleSetTimerPopUpFn();
    this.props.timerSetFn();
  }
  

  render() {
    return(
      <div className="item-wrapper-internal">
        <div>
          DON'T FORGET TO START THE TIMER
        </div>
        <div className="flex-container-align-center-spaced parental-control__timer-visualizer">
          <div>Hours: {this.state.timerShownHours}</div>
          <div>Minutes: {this.state.timerShownMinutes}</div>
          <div>Seconds: {this.state.timerShownSeconds}</div>
        </div>
        {this.state.setTimerPopUpShown ? 
        <div>
          <TimerPopUp 
            addSecondsFn={this.props.addSecondsFn}
            subtractSecondsFn={this.props.subtractSecondsFn}
            addMinutesFn={this.props.addMinutesFn}
            subtractMinutesFn={this.props.subtractMinutesFn}
            addHoursFn={this.props.addHoursFn}
            subtractHoursFn={this.props.subtractHoursFn}
            info={this.state} 
            togglePopUp={this.toggleSetTimerPopUpFn.bind(this)} 
            manualInputTimeHours={this.props.manualInputTimeHours}
            updateCurrentTimerWithNewTime={this.props.updateCurrentTimerWithNewTime}
          />
        </div> : 
        <div>
        </div>}
        <div className="parental-control__button-wrapper">
          <button className="parental-control__button" onClick={this.combinedFuncitonsOnClick.bind(this)}>SET TIMER</button>
          {(this.props.timerStatus)?
            <button className="parental-control__button" onClick={this.props.timerStopFn}>STOP TIMER</button> :
            <button className="parental-control__button" onClick={this.props.timerStartFn}>START TIMER</button> 
          }
          <button className="parental-control__button" onClick={this.props.quickSetTimerFn}>Quickset To 20 Min</button> 

        </div>
      </div>
    )
  }

}

export default AdjustTimer;


