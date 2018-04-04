import React from 'react';

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  

  render() {
    if (!this.props.specificInfo.snippet.description) { var replacementDescription = "No Description Is Available"}
    return (
      <div className="listed-videos__item" onClick={()=>(this.props.pickVideoFn(this.props.specificInfo))}>
        <div className="listed-videos__item--title">
          {this.props.specificInfo.snippet.title}
        </div>
        <div className="flex-container listed-videos__item--content-wrapper">
          <div className="listed-videos__item--images">
            <img src={this.props.specificInfo.snippet.thumbnails.default.url}></img>
          </div>
          <div className="listed-videos__item--text-content">
            {this.props.specificInfo.snippet.description || replacementDescription}
          </div>
        </div>
          <div className="listed-videos__item--text-content">
            { /*Channel: {this.props.specificInfo.snippet.channelTitle} */ }
          </div>    
      </div>
    )
  }
} 


export default VideoListItem;


