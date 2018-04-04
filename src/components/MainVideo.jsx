import React from 'react';
import YouTube from 'react-youtube'; 

var MainVideo = (props) => { 

  var opts = {
    height: '548',
    width: '900',
    playerVars: {rel: 0}
  };

  

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



