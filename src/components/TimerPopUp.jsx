import React from 'react';


var TimerPopUp = (props) => (
  <div className="popup">
    <div className="popup_inner">
    <div onClick={props.togglePopUp}>X</div>
    Set The Timer
      <div>
        Hours: {props.info.timerShownHours}
        Minutes: {props.info.timerShownMinutes}
        Seconds {props.info.timerShownSeconds}
      </div>
      <div className="flex-container">    
        <div className="flex-container-align-center timer-adjuster">
          <div className="timer-adjuster__text">
            Hours:
          </div> 
          <div className="flex-container-vertical-centered">
            <div className="timer-adjuster__buttons" onClick={props.addHoursFn}>+</div>
            <input className="timer-adjuster__input" value={props.info.timerShownHours}></input>
            <div className="timer-adjuster__buttons" onClick={props.subtractHoursFn}>-</div>
          </div>
        </div>
        <div className="flex-container-align-center timer-adjuster">
          <div className="timer-adjuster__text">
            Minutes:
          </div> 
          <div className="flex-container-vertical-centered">
            <div className="timer-adjuster__buttons" onClick={props.addMinutesFn}>+</div>
            <input className="timer-adjuster__input" value={props.info.timerShownMinutes}></input>
            <div className="timer-adjuster__buttons" onClick={props.subtractMinutesFn}>-</div>
          </div>
        </div>
        <div className="flex-container-align-center timer-adjuster">
          <div className="timer-adjuster__text">
            Seconds:
          </div> 
          <div className="flex-container-vertical-centered">
            <div className="timer-adjuster__buttons" onClick={props.addSecondsFn}>+</div>
            <input className="timer-adjuster__input" value={props.info.timerShownSeconds}></input>
            <div className="timer-adjuster__buttons" onClick={props.subtractSecondsFn}>-</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TimerPopUp;