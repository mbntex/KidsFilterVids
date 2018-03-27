import React from 'react';
import YouTube from 'react-youtube'; 

var MainVideo = (props) => { 
  var opts = {
    // height: '390',
    // width: '640',
    height: '450',
    width: '738',
    playerVars: {rel: 0}
  };
  console.log('PLAYER STATE = ', YouTube.PlayerState)

  return(
    <div className="You-Tube-display">
      <div className="You-Tube-display--title-text">
        {props.currentTitle}
      </div>
      <div>
        <YouTube
          videoId={props.currentVideo}
          opts={opts}
        />
      </div>
    </div>
  )
}


export default MainVideo;



