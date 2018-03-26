import React from 'react';


var VideoListItem = (props) => (
  <div className="listed-videos__item" onClick={()=>(props.pickVideoFn(props.specificInfo))}>
    <div className="listed-videos__item--title">
      Title = {props.specificInfo.snippet.title}
    </div>
    <div className="flex-container listed-videos__item--content-wrapper">
      <img className="listed-videos__item--images" src={props.specificInfo.snippet.thumbnails.default.url}></img>
      <p>
        Channel Title = {props.specificInfo.snippet.channelTitle}
        Description = {props.specificInfo.snippet.description}
      </p>
    </div>
  </div>
)


export default VideoListItem;


