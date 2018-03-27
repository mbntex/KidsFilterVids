import React from 'react';
import VideoListItem from './VideoListItem.jsx';

var VideoList = (props) => (
  <div className="flex-container-vertical listed-videos">
    { props.videoData.map ((item, i) => <VideoListItem pickVideoFn={props.pickVideoFn} specificInfo={item} key={i} /> )}
  </div>
)


export default VideoList;
