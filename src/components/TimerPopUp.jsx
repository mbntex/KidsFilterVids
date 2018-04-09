import React from 'react';

 

class TimerPopUp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      localTimerHours: null, 
      localTimerMinutes: null,
      localTimerSeconds: null
    }
  }


  componentWillMount() {
    var initStateTimes = {};
    initStateTimes.localTimerHours = this.props.info.timerShownHours;
    initStateTimes.localTimerMinutes = this.props.info.timerShownMinutes;
    initStateTimes.localTimerSeconds = this.props.info.timerShownSeconds;
    this.setState(initStateTimes);
  }


  updateLocalTimer(e) {
    console.log('hit');
    let newState = {};
    // if(this.state[e.target.id] === 0) {
    //   this.setState({[e.target.id]:''});
    // }
    if (!isNaN(parseInt(e.target.value))) {
      newState[e.target.id] = parseInt(e.target.value);


      if (e.target.id === "localTimerMinutes" && parseInt(e.target.value) > 59) {
        newState.localTimerMinutes = 0;
      }
      if (e.target.id === "localTimerSeconds" && parseInt(e.target.value) > 59) {
        newState.localTimerSeconds = 0;
      }
      if (e.target.id === "localTimerHours" && parseInt(e.target.value) > 99) {
        newState.localTimerHours = 99;
      }

      this.setState(newState);
    } else {
      newState[e.target.id] = 0;
      this.setState(newState);
    }
  }

  addLocalSeconds() {
    if (this.state.localTimerSeconds < 59) {
      this.setState({localTimerSeconds: this.state.localTimerSeconds + 1});
    } else {
      this.setState({localTimerSeconds: this.state.localTimerMinutes + 1});
    }

  }




  closeTimerAdjust() {
    this.props.togglePopUp();
    this.props.updateCurrentTimerWithNewTime(this.state.localTimerHours, this.state.localTimerMinutes, this.state.localTimerSeconds);

  }


  addHoursInTimerFn() {
    this.setState({localTimerHours: this.state.localTimerHours + 1});
  }

  subtractHoursInTimerFn() {
    if (this.state.localTimerHours > 0) {
      this.setState({localTimerHours: this.state.localTimerHours - 1});
    }
  }

  addMinutesInTimerFn() {
    this.setState({localTimerMinutes: this.state.localTimerMinutes + 1});
  }

  subtractMinutesInTimerFn() {
    if (this.state.localTimerMinutes > 0) {
      this.setState({localTimerMinutes: this.state.localTimerMinutes - 1});
    }
  }

  addSecondsInTimerFn() {
    this.setState({localTimerSeconds: this.state.localTimerSeconds + 1});
  }

  subtractSecondsInTimerFn() {
    if (this.state.localTimerSeconds > 0) {
      this.setState({localTimerSeconds: this.state.localTimerSeconds - 1});  
    }
  }


// .flex-center-content {
//   display: flex;
//   justify-content: center;
// }
  
// .flex-container-align-center {
//   display: flex;
//   flex-direction: row;
//   align-items: center;

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="flex-container">  
            <div className="popup__timer-output-notes">
              <div className="popup__timer-title">Set The Timer</div>
               { /*Hours: {this.state.localTimerHours}
                Minutes: {this.state.localTimerMinutes}
                Seconds {this.state.localTimerSeconds}
              */}
              <div className="popup__timer-flex-container">
                <div className="popup__timer-individual-notes">Hours: {this.state.localTimerHours}</div>
                <div className="popup__timer-individual-notes">Minutes: {this.state.localTimerMinutes}</div>
                <div className="popup__timer-individual-notes">Seconds: {this.state.localTimerSeconds}</div>
              </div>
            </div>
          </div>
          <div className="flex-container-timer-popup">    
            <div className="flex-container-align-center timer-adjuster">
              <div className="timer-adjuster__text">
                Hours:
              </div> 
              <div className="flex-container-vertical-centered timer-adjuster__unit-wrapper">
                <div className="timer-adjuster__buttons" onClick={this.addHoursInTimerFn.bind(this)}>+</div>
                <input className="timer-adjuster__input" id="localTimerHours" value={this.state.localTimerHours} onChange={this.updateLocalTimer.bind(this)}></input>
                <div className="timer-adjuster__buttons" onClick={this.subtractHoursInTimerFn.bind(this)}>-</div>
              </div>
            </div>
            <div className="flex-container-align-center timer-adjuster">
              <div className="timer-adjuster__text">
                Minutes:
              </div> 
              <div className="flex-container-vertical-centered timer-adjuster__unit-wrapper">
                <div className="timer-adjuster__buttons" onClick={this.addMinutesInTimerFn.bind(this)}>+</div>
                <input className="timer-adjuster__input" id="localTimerMinutes" value={this.state.localTimerMinutes} onChange={this.updateLocalTimer.bind(this)}></input>
                <div className="timer-adjuster__buttons" onClick={this.subtractMinutesInTimerFn.bind(this)}>-</div>
              </div>
            </div>
            <div className="flex-container-align-center timer-adjuster">
              <div className="timer-adjuster__text">
                Seconds:
              </div> 
              <div className="flex-container-vertical-centered timer-adjuster__unit-wrapper">
                <div className="timer-adjuster__buttons" onClick={this.addSecondsInTimerFn.bind(this)}>+</div>
                <input className="timer-adjuster__input" id="localTimerSeconds" value={this.state.localTimerSeconds} onChange={this.updateLocalTimer.bind(this)}></input>
                <div className="timer-adjuster__buttons" onClick={this.subtractSecondsInTimerFn.bind(this)}>-</div>
              </div>
            </div>
          </div>
          <div className="popup__close-popup-button" onClick={this.closeTimerAdjust.bind(this)}>
            Close & Update
          </div>

        </div>
      </div>
    )
  }
}



export default TimerPopUp;