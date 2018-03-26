import React from 'react';



var Player = (props) => {
  return (
    <div>
      <div style={{padding: "10px"}}>
        <iframe style={{width:854, height:480}} src={`http://www.youtube.com/embed/${props.vidInfo.currentVideoId}`} allowFullScreen></iframe>
        <div>
          <div>
            Title: {props.vidInfo.currentVideoTitle}
          </div>
          <div>
            Channel: {props.vidInfo.currentVideoChannel}
          </div>
        </div>
      </div>

    </div>
  );
}
  



export default Player;