import React from 'react';
import MainVideo from './components/MainVideo.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchOptions from './components/SearchOptions.jsx';
import UserLogin from './components/UserLogin.jsx';
import VideoList from './components/VideoList.jsx';
import Timer from './components/Timer.jsx';
import DefaultSearchData from './components/DefaultSearchData.js';
import AllowedSearches from './components/AllowedSearches.js';
import VerificationQuestions from './components/VerificationQuestions.js';
import axios from 'axios';
import keys from '../git_ignore_folder/keys.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideoPlaying: DefaultSearchData[0].id.videoId,
      currentVideoTitle: DefaultSearchData[0].snippet.title,
      currentVideoChannelTitle: DefaultSearchData[0].snippet.channelTitle,
      currentVideoChannelDescription: DefaultSearchData[0].snippet.description,
      currentSearchInput: '',
      allVideoData: DefaultSearchData,
      listedSearches: AllowedSearches,
      parentAccessOn: false,
    };
  }

  currentSearchInputFn(e) {
    var newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  makeSearchHappenFn() {
    this.serverSearchFn();
  }

  useSearchTopicButtonFn(inputProp) {
    this.serverSearchFn(inputProp);
  }

  enterMakesSearchHappenFn(e) {
    if (e.keyCode === 13) {
      this.serverSearchFn();
    }
  }

  toggleParentalAccessFn() {
    if (this.state.parentAccessOn === false) {
      var roll = Math.floor(Math.random() * VerificationQuestions.length);
      var parentCheck = prompt(VerificationQuestions[roll][0]);
      if (parentCheck === VerificationQuestions[roll][1]) {
        this.setState({parentAccessOn: !this.state.parentAccessOn});  
      }
    } else {
      this.setState({parentAccessOn: false});
    }
  }

  serverSearchFn(stringToSearch = this.state.currentSearchInput) {
    var contextHere = this;
    axios.post('/search', {
      searchString: stringToSearch
    })
    .then(function (response) {
      console.log('SERVER RESPONSE TO FRONT END = ', response.data);
      var newState = {};
      newState.allVideoData = response.data;
      newState.currentVideoPlaying = response.data[0].id.videoId;
      newState.currentVideoTitle = response.data[0].snippet.title,
      newState.currentVideoChannelTitle = response.data[0].snippet.channelTitle,
      newState.currentVideoChannelDescription = response.data[0].snippet.description,
      contextHere.setState(newState);

    })
    .catch(function (error) {
      console.log('SERVER RESPONSE TO FRONT END ERROR = ', error);
    });
  }

  pickVideoFromListFn(properties) {
    console.log('video picked', properties);
    var newState = {};
    newState.currentVideoPlaying = properties.id.videoId;
    newState.currentVideoTitle = properties.snippet.title,
    newState.currentVideoChannelTitle = properties.snippet.channelTitle,
    newState.currentVideoChannelDescription = properties.snippet.description,
    this.setState(newState);
  }


 
  render() {
    return (
      <div>
      <div className="flex-container-spaced app-header">
        <h1 className="app-header__title-style">Parent's Choice Tube</h1>
        <button className="app-header__parental-access-button" onClick={this.toggleParentalAccessFn.bind(this)}>Parental Access</button>
      </div>
        <div>
          <SearchBar 
            currentSearchFn={this.currentSearchInputFn.bind(this)}
            activateSearchFn={this.makeSearchHappenFn.bind(this)}
            enterMakesSearchHappenFn={this.enterMakesSearchHappenFn.bind(this)}
          />
        </div>
        <div className="flex-container-spaced all-video--general-container">
          <div>
            <MainVideo 
              currentVideo={this.state.currentVideoPlaying} 
              currentTitle={this.state.currentVideoTitle}
            />
          </div>
          <div>
            <VideoList 
              videoData={this.state.allVideoData}
              pickVideoFn={this.pickVideoFromListFn.bind(this)}
            />
          </div>
        </div>
        <div>
          <SearchOptions 
            useSearchTopicButton={this.useSearchTopicButtonFn.bind(this)}
            allPossibleSearches={this.state.listedSearches}
          />
        </div>
        <div>
          <UserLogin />
        </div>
          <Timer />
      </div>
    );
  }
}


export default App;