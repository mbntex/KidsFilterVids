import React from 'react';
import Player from './components/player.jsx';
import ResultsList from './components/resultslist.jsx';
import Search from './components/search.jsx';
import AdjustmentPanel from './components/adjustmentpanel.jsx'
import axios from 'axios';
import keys from '../git_ignore_folder/keys.js';
import starterResults from '../starterresults.js';
import Cookies from 'js-cookie';
import approvedVideoObject from './siteslist.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSearch : '',
      data: starterResults,
      currentVideoId: starterResults[0].id.videoId,
      currentVideoTitle: starterResults[0].snippet.title,
      currentVideoChannel: starterResults[0].snippet.channelTitle,
      adjustmentPanelMode: false
    };
  }

  componentWillMount () {
    //document.addEventListener("keydown", this.textInputFn.bind(this));
  }

 textInputFn (e) {
    if (e.keyCode === 13) { this.searchClickFn() }
    this.setState({ [e.target.id]: e.target.value });
  }

  panelClickButtonFn () {
    this.setState({adjustmentPanelMode: !this.state.adjustmentPanelMode});
  }

  changeMainVideoFn (information) { 
    console.log(information);
    this.setState({currentVideoId: information.vidID, currentVideoTitle: information.movieName, currentVideoChannel: information.channelTitle })






    //   currentVideoId: starterResults[0].id.videoId,
    //   currentVideoTitle: starterResults[0].snippet.title,
    //   currentVideoChannel: starterResults[0].snippet.channelTitle,




  }


  searchClickFn () {
    // console.log('clicked');
    // console.log('API = ', keys.YouTube_API_Key);
    // axios.get('https://www.googleapis.com/youtube/v3/search', {
    //   params: {
    //     q: 'kittens',
    //     maxResults: 5,
    //     key: keys.YouTube_API_Key,
    //     videoEmbeddable: true,
    //     part: 'snippet',
    //     type: 'video'
    //   }
    // })
    // .then(function (res) {
    //   console.log('RESPONSE = ', res);
    //   for (var i = 0; i < res.data.items.length; i++) {
    //     console.log(
    //       'RESPONSE ITEM ', i, 
    //       'VIDEO ID=', res.data.items[i].id.videoId,
    //       'TITLE = ', res.data.items[i].snippet.title, 
    //       'SNIPPET = ', res.data.items[i].snippet.description, 
    //       'CHANNEL TITLE=', res.data.items[i].snippet.channelTitle, 
    //       'CHANNEL ID=', res.data.items[i].snippet.channelId, 
    //       'THUMBNAIL = ', res.data.items[i].snippet.thumbnails.default.url
    //       );
    //   }
    // })
    // .catch(function (err) {
    //   console.log('ERR =', err);
    // });
    var contextHere = this;
    var searchObject = {wordsToSearch: this.state.currentSearch};
    if (this.state.currentSearch.length < 1) { 
        searchObject = {wordsToSearch: 'Mr Rogers Neighborhood'};
     }
    console.log('searching ', searchObject.wordsToSearch);
    axios.post('/search', searchObject)
    .then(function(res) {
      // console.log('GOT A RESPONSE!!!! RESPONSE = ', res);
      // console.log('info = ', res.data[0].snippet.title);
      contextHere.setState({
        data: res.data,
        currentVideoId: res.data[0].id.videoId,
        currentVideoTitle: res.data[0].snippet.title,
        currentVideoChannel: res.data[0].snippet.channelTitle
      })
    })
    .catch(function(err) {console.log('APP ERROR!', err)})
  }

 

  renderview () {
    if (this.state.adjustmentPanelMode === true) {
      return <AdjustmentPanel openCloseFn={this.panelClickButtonFn.bind(this)}/>
    }
  }



 
  render() {
    var controlButtontext = {}
    console.log(this.state.data[0]);

    return (
      <div>
        <div className="row test2">
          <div className="col test3">
            <p>Filter Tube</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 search-area">
            <Search id="search-component" textFn={this.textInputFn.bind(this)} clickFn={this.searchClickFn.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 video-area">
            <Player vidInfo = {this.state} />
          </div>
          <div className="col-sm-4 list-area">
            <ResultsList className="scrolling" listItems={this.state.data} videoSelectFn={this.changeMainVideoFn.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 designated-area">
            {this.state.adjustmentPanelMode?
            <button id="controlaccessbutton" onClick={this.panelClickButtonFn.bind(this)}>Control Panel LogOff</button>  
            :
            <button id="controlaccessbutton" onClick={this.panelClickButtonFn.bind(this)}>Control Panel LogOn</button>
            } 
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 designated-area">
            {this.renderview()}
          </div>
        </div>
      </div>
    );
  }
}



export default App;