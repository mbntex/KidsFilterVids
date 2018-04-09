import React from 'react';

var TimerOutPopUp = (props) => (
  <div>
    <div className="button-no-video-popup">
      <div className="button-no-video-popup_inner">
        <div className="no-time-left-close-x" onClick={props.closeTimerPopUp}>X</div>
        Timer Is Out!
      </div>
    </div>
  </div>
)



export default TimerOutPopUp;
