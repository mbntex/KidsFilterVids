import React from 'react';

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  // changeSelectedFn() {
  //   this.setState({selected: !this.state.selected})
  // }

  // selectVideoWrapperFn() {
  //   this.changeSelectedFn();
  //   this.props.pickVideoFn(this.props.specificInfo);
  // }


  render() {
    if (!this.props.specificInfo.snippet.description) { var replacementDescription = "No Description Is Available"}
    var defaultStyle;
    // if (this.state.selected === true) { border = {border: '5px solid red'} }
    if (this.props.currentVideoPlaying === this.props.specificInfo.id.videoId) {
      console.log('PLAYING = ', this.props.specificInfo.id.videoId);
      defaultStyle = {border: '5px solid black', background: 'linear-gradient(to bottom, white, grey)'}
    }


    return (
      <div className="listed-videos__item" style={defaultStyle} onClick={()=>this.props.pickVideoFn(this.props.specificInfo)}>
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


