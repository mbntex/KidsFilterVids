import React from 'react';
import Player from './components/player.jsx';
import ResultsList from './components/resultslist.jsx';
import Search from './components/search.jsx';
import axios from 'axios';
import keys from '../git_ignore_folder/keys.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSearch : '',
      currentVideoId: 'https://www.youtube.com/watch?v=skZVMB74vSM',
      tempList: ['red', 'orange', 'yellow']
    };
  }

  textInputFn (e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  searchClickFn () {
    // console.log('clicked');
    // console.log('API = ', keys.YouTube_API_Key);
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: 'kittens',
        maxResults: 5,
        key: keys.YouTube_API_Key,
        videoEmbeddable: true,
        part: 'snippet',
        type: 'video'
      }
    })
    .then(function (res) {
      console.log('RESPONSE = ', res);
    })
    .catch(function (err) {
      console.log('ERR =', err);
    });
  }



 
  render() {
    return (
      <div>
        <div className="row test2">
          <div className="col test3">
            <p>Filter Tube</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 search-area">
            <Search textFn = {this.textInputFn.bind(this)} clickFn={this.searchClickFn.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 video-area">
            <Player vidId = {this.state.currentVideoId} />
          </div>
          <div className="col-sm-4 list-area">
            <ResultsList listItems={this.state.tempList}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;