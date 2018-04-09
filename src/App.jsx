import React from 'react';
import MainVideo from './components/MainVideo.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchButtonsList from './components/SearchButtonsList.jsx';
import VideoList from './components/VideoList.jsx';
import Timer from './components/Timer.jsx';
import AdjustTimer from './components/AdjustTimer.jsx';
import AddButton from './components/AddButton.jsx';
import DefaultSearchData from './components/DefaultSearchData.js';
import AllowedSearches from './components/AllowedSearches.js';
import VerificationQuestions from './components/VerificationQuestions.js';
import TimerOutPopUp from './components/TimerOut.jsx';
import axios from 'axios';
import keys from '../git_ignore_folder/keys.js';
import Cookies from 'js-cookie';
 
  
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideoPlaying: DefaultSearchData[0].id.videoId,
      currentVideoTitle: DefaultSearchData[0].snippet.title,
      currentVideoChannelTitle: DefaultSearchData[0].snippet.channelTitle,
      currentVideoChannelDescription: DefaultSearchData[0].snippet.description,
      currentSearchInput: '',
      activeSearchForButtonActivation: '',
      allVideoData: DefaultSearchData,
      listedSearches: AllowedSearches,
      parentAccessOn: false,
      timerStartTimeThisRun: 0,
      timerSecondsLeft: 5,
      timerOn: false,
      timerOnEver: false,
      newButtonSearchTerm: '',
      newButtonLabel: '',
      newButtonImageFile: '',
      deleteButtons: false,
      timerOutPopUp: 'willOpen',
      timerGraphic: 'linear-gradient(to left, green , white, white, white)'
    };
  }



//   ///////////////////////////////////////////////////////


// makeACookieFn() {
//   console.log(typeof AllowedSearches)
//   console.log('CV = ', AllowedSearches)
//   var cookieValueAsString = JSON.stringify(AllowedSearches);
//   var cookieStringEncoded = encodeURIComponent(cookieValueAsString);
//   document.cookie = 'parentsChoiceTEST =' + cookieStringEncoded + '; expires=Thu, 18 Dec 2035 12:00:00 UTC;';
//   // console.log(document.cookie);
//   //cookieValue=AllowedSearches, cookieKey='parentsChoiceTEST'
// };


// pullOutCookieFn(cookieKey='parentsChoiceTEST') {
//   var cookieAsArray = document.cookie[cookieKey].split(';');
//   var cookieDataToPullOut = cookieAsArray[0];
//   var cookieDecoded = decodeURIComponent(cookieDataToPullOut);
//   var finalObjFromDecoded = JSON.parse(cookieDecoded);
//   console.log(typeof finalObjFromString);
//   console.log(finalObjFromDecoded);
//   // return finalObjFromDecoded;
// };


// InsertDefaultsFsFn() {
//   var contextHere = this;
//   axios.post('/reset-defaults', {})
//   .then(function (response) {
//     // console.log(typeof response.data);
//     // console.log('BACK ON RESET = ', response.data);
//     contextHere.setState({listedSearches: response.data});
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }





  ActiveButtonSelectorFn(searchTerm = null) {
    this.setState({activeSearchForButtonActivation: searchTerm})
  }


  deleteCookiesFn() {
    Cookies.remove('parentChoice');
    Cookies.remove('parentsChoiceTEST');
  }


  showCurrentCookie() {
    var theCookie = Cookies.getJSON('parentChoice');
    console.log(theCookie);
  }

  
  componentWillMount() {
    var contextHere = this;
    axios.post('/initialize', {})
    .then(function (response) {
      console.log('INITIALIZATION TYPE OF RESPONSE = ', typeof response);
      console.log('INITIALIZATION RESPONSE = ', response);
      contextHere.setState({listedSearches: response.data})
    })
    .catch(function (error) {
      console.log('INITIALIZATION ERROR = ', error);
    });
  }

  newButtonCreateFn() {
    var imageFileDefault = 'DefaultNewImage.jpg';
    if (this.state.newButtonSearchTerm.length > 0 && this.state.newButtonLabel.length > 0) {
      if (this.state.newButtonImageFile.length < 1) { this.setState({newButtonImageFile: imageFileDefault}) }
      var currentAllowedSearches = this.state.listedSearches;
      currentAllowedSearches.push({term: this.state.newButtonSearchTerm, buttonLabel: this.state.newButtonLabel, image: this.state.newButtonImageFile, category: 'personal', color: 'blue' }); 

      var contextHere = this;
      axios.post('/update-current', {
        data: currentAllowedSearches
      })
      .then(function (response) {
        // console.log(typeof response.data);
        // console.log('BACK ON NEW BUTTON = ', response.data);
        contextHere.setState({listedSearches: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });

      this.setState({listedSearches: currentAllowedSearches});
      this.setState({newButtonSearchTerm: '', newButtonLabel: '', newButtonImageFile: ''});
      alert('New Button Made');
    }
  }

  deleteButtonsPopUpCallerFn() {
    this.setState({deleteButtons: !this.state.deleteButtons});
  }

  deleteSelectedButtonFn(buttonTerm) {
    console.log('delete clicked!');
    console.log(buttonTerm);
    var currentSearchesListHere = this.state.listedSearches;
    for (var i = 0 ; i < currentSearchesListHere.length; i++) {
      if (currentSearchesListHere[i].term === buttonTerm) {
        currentSearchesListHere.splice(i, 1);
      }
    }
    // this.setState({listedSearches: currentSearchesListHere});
    var contextHere = this;
    //WHY DOUBLE NEEDED? LINE BELOW MAKES SMOOTHER STATE BUT UNSTABLE ON REFRESH and other setstate alone allows only one visible deletion with delete window open!!!!!!
    contextHere.setState({listedSearches: currentSearchesListHere})
    axios.post('/delete-button', {
      currentSearchesListWithButtonDeleted: currentSearchesListHere
    })
    .then(function (response) {
      // console.log('DELETION TYPE OF RESPONSE = ', typeof response.data);
      // console.log('DELETION RESPONSE = ', response.data);
      contextHere.setState({listedSearches: response.data})
    })
    .catch(function (error) {
      console.log('DELETE ERROR = ', error);
    });
  }


  resetToDefaultsFn() {
    var contextHere = this;
    axios.post('/reset-defaults', {})
    .then(function (response) {
      // console.log(typeof response.data);
      console.log('BACK ON RESET = ', response.data);
      contextHere.setState({listedSearches: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  timerSetFn() {
    // console.log('test timer set ran!!!');
  }

  timerStartFn() {
    if (this.state.timerOnEver === false) {
      var timerCountDown = setInterval(()=> {
        if (this.state.timerSecondsLeft > 0 && this.state.timerOn === true ) {
          this.setState({timerSecondsLeft: this.state.timerSecondsLeft - 1});
          this.timerGraphicParseFn();
        } 
      }, 1000);
      this.setState({timerOnEver: true});
    } 
    
      this.setState({timerStartTimeThisRun: this.state.timerSecondsLeft});
      this.setState({timerOn: true});
      this.setState({timerOutPopUp: 'willOpen'});
      console.log('timer started!!!');    
  }

  timerGraphicParseFn() {
    let percentRemaining = this.state.timerSecondsLeft / this.state.timerStartTimeThisRun;
    let percentRemainingRounded = Math.floor(percentRemaining * 10);
    // console.log('PERCENT ROUNDED = ', percentRemainingRounded);
    let graphicFadeColors = [];
    for (var i = 0; i < 10; i++) {
      if (i < percentRemainingRounded) { 
        graphicFadeColors.push('red');
      } else {
        graphicFadeColors.push('white');
      }
    }
    let graphicFadeColorsString = graphicFadeColors.join(', ');
    let updatedFadeColorStyle = `linear-gradient(to left, ${graphicFadeColorsString})`
    this.setState({timerGraphic: updatedFadeColorStyle})
    console.log('graphicFadeColors = ', graphicFadeColors);
  }

  timerStopFn() {
    // clearInterval(timerCountDown);
    this.setState({timerOn: false})
    console.log('timer stopped!!!');

  }

  currentSearchInputFn(e) {
    var newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  addButtonFieldUpdaterFn(e) {
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

  // ADJUST TIMER FUNCTIONS
  addSecondsFn() {
    this.setState({timerSecondsLeft: this.state.timerSecondsLeft + 1})
  }

  subtractSecondsFn() {
    if (this.state.timerSecondsLeft > 0) {
      this.setState({timerSecondsLeft: this.state.timerSecondsLeft - 1}) 
    }
  }

  addMinutesFn() {
    this.setState({timerSecondsLeft: this.state.timerSecondsLeft + 60})
  }

  subtractMinutesFn() {
    if (this.state.timerSecondsLeft > 60) {
      this.setState({timerSecondsLeft: this.state.timerSecondsLeft - 60}) 
    }
  }
  
  addHoursFn() {
    this.setState({timerSecondsLeft: this.state.timerSecondsLeft + 3600})
  }

  subtractHoursFn() {
    if (this.state.timerSecondsLeft > 3600) {
      this.setState({timerSecondsLeft: this.state.timerSecondsLeft - 3600}) 
    }
  }

  quickSetTimerFn() {
    this.setState({timerSecondsLeft: 1200})
  }

  manualInputTimeHours(e) {
    // // let total = {timerShownHours: 0, timerShownMinutes: 0, timerShownSeconds: 0};
    let manualHours = 0;
    let manualMinutes = 0;
    let manualSeconds = 0;
    let tally = function (num) {
      if (num > 3600) {
        num -= 3600;
        manualHours ++;
        if (num > 3600) { return tally(num) }
      }
      if (num > 59) {
        num -= 60;
        manualMinutes ++;
        if (num > 59) { return tally(num) }
      }
      if (num >= 0) {
        manualSeconds = num;
      }
    };
    tally(this.state.timerSecondsLeft);
    // console.log(total);
    // this.setState(total);
    // // return total;
    // if (hours !== 0) {manualHours = hours};
    // if (minutes !== 0) {manualMinutes = minutes};
    // if (seconds !== 0) {manualSeconds = seconds}
    // let manuallyUpdatedTotalSeconds = (manualHours * 3600) + (manualMinutes * 60) + manualSeconds;
    // this.setState({timerSecondsLeft: manuallyUpdatedTotalSeconds});
    manualHours = e.target.value;


    console.log('TOTALS = ', manualHours, manualMinutes, manualSeconds);
    console.log('HOURS INPUT = ', e.target.value)

  }

  updateCurrentTimerWithNewTime(hours, minutes, seconds) {
    console.log('TOP = ', hours, minutes, seconds);
    let newTotalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    this.setState({timerSecondsLeft: newTotalSeconds})
  }



  toggleParentalAccessFn() {
    if (this.state.parentAccessOn === false) {
      var roll = Math.floor(Math.random() * VerificationQuestions.length);
      var parentCheck = prompt(VerificationQuestions[roll][0]);
      if (parentCheck === VerificationQuestions[roll][1]) {
        this.setState({parentAccessOn: !this.state.parentAccessOn});  
      }
    } else {
      if(this.state.timerOn === false) { 
        var parentCloseAnswer = window.confirm('Note the timer is not running. Close anyways?');
        if (parentCloseAnswer === true) {
          this.setState({parentAccessOn: false});
        }
      } else {
        this.setState({parentAccessOn: false});
      }
    }
  }

  serverSearchFn(stringToSearch = this.state.currentSearchInput) {
    console.log('Debug: function worked!')
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

  closeTimerPopUp() {
    this.setState({timerOutPopUp: 'close'});
  }
  
 
  render() {
    var myFade = this.state.timerGraphic;
    return (
      <div>
      <button onClick={this.deleteCookiesFn.bind(this)}>TEMP DELETE COOKIES BTN</button>
      <button onClick={this.showCurrentCookie.bind(this)}>SHOW COOKIE</button>
      {/*<button onClick={this.InsertDefaultsFsFn.bind(this)}>FS RESET</button>*/}

      <div className="flex-container-spaced app-header">
        <h1 className="app-header__title-style">Parent's Choice Tube</h1>
        { (this.state.parentAccessOn)?
          <button className="app-header__parental-access-button" onClick={this.toggleParentalAccessFn.bind(this)}>Close Parent Access</button>
          :<button className="app-header__parental-access-button" onClick={this.toggleParentalAccessFn.bind(this)}>Open Parental Access</button>
        }
      </div>
      {this.state.parentAccessOn ?  
      <div className="parental-control__overall-wrapper">
        <div className="parental-control__item timer-controls-height-maker">
          <div className="parental-control__item__label">Timer Controls</div>
          <AdjustTimer
            addSecondsFn={this.addSecondsFn.bind(this)} 
            subtractSecondsFn={this.subtractSecondsFn.bind(this)}
            addMinutesFn={this.addMinutesFn.bind(this)} 
            subtractMinutesFn={this.subtractMinutesFn.bind(this)}
            addHoursFn={this.addHoursFn.bind(this)} 
            subtractHoursFn={this.subtractHoursFn.bind(this)}
            timerStatus={this.state.timerOn}
            currentSecondsLeft={this.state.timerSecondsLeft}
            timerSetFn={this.timerSetFn.bind(this)}
            timerStartFn={this.timerStartFn.bind(this)}
            timerStopFn={this.timerStopFn.bind(this)}
            quickSetTimerFn={this.quickSetTimerFn.bind(this)}
            manualInputTimeHours={this.manualInputTimeHours.bind(this)}
            updateCurrentTimerWithNewTime={this.updateCurrentTimerWithNewTime.bind(this)}
          />
        </div>
        <div className="parental-control__item search-controls-height-maker">
          <div className="parental-control__item__label">Manual Search</div>
          <SearchBar 
            currentSearchFn={this.currentSearchInputFn.bind(this)}
            activateSearchFn={this.makeSearchHappenFn.bind(this)}
            enterMakesSearchHappenFn={this.enterMakesSearchHappenFn.bind(this)}
          />
        </div>
        <div className="parental-control__item button-controls-height-maker">
          <div className="parental-control__item__label">Add/Remove Custom Button</div>
          <AddButton
            AddButtonLabel={this.state.newButtonLabel}
            AddButtonTerm={this.state.newButtonSearchTerm}
            AddButtonFile={this.state.newButtonImageFile}
            buttonFieldUpdater={this.addButtonFieldUpdaterFn.bind(this)}
            newButtonCreate={this.newButtonCreateFn.bind(this)}
            toggleDeleteButtonsPopUpToggleFn={this.deleteButtonsPopUpCallerFn.bind(this)}
            isDeleteButtonsOpen={this.state.deleteButtons}
            deleteChosenButton={this.deleteSelectedButtonFn.bind(this)}
            allPossibleSearches={this.state.listedSearches}
            resetToDefaultsFn={this.resetToDefaultsFn.bind(this)}
          />
        </div>
      </div> :
      <div></div>}
        <div className="flex-container-spaced all-video--general-container app-wrapper">
          <div>
          { (this.state.timerSecondsLeft > 0) ? 
            <MainVideo 
              currentVideo={this.state.currentVideoPlaying} 
              currentTitle={this.state.currentVideoTitle}
            /> : 
            <div className="timer-is-out-notice">
              <div>No Video Allowed, Add Time To Continue</div>
            </div>
          }

          {
            (this.state.timerSecondsLeft === 0 && this.state.timerOutPopUp === 'willOpen') ?
              <TimerOutPopUp closeTimerPopUp={this.closeTimerPopUp.bind(this)}/> :
              <div></div>
          }
   
          </div>
          <div>
            <VideoList 
              currentVideoPlaying={this.state.currentVideoPlaying}
              videoData={this.state.allVideoData}
              pickVideoFn={this.pickVideoFromListFn.bind(this)}
            />
          </div>
        </div>
        <div className="timer-graphic-wrapper ">
        <div className="flex-container">
          <div className="timer-bar-top" style={{background: myFade}}>
            <div className="timer">

              <Timer 
                timerStartTimeThisRun = {this.state.timerStartTimeThisRun}
                timerSecondsLeft = {this.state.timerSecondsLeft}
                isTimerOn = {this.state.timerOn}
                accessLevel={this.state.parentAccessOn}
              />
            </div>
          </div>
        </div>
        </div>
        <div>
          <SearchButtonsList 
            ActiveButtonSelectorFn={this.ActiveButtonSelectorFn.bind(this)}
            useSearchTopicButton={this.useSearchTopicButtonFn.bind(this)}
            allPossibleSearches={this.state.listedSearches}
            activeSearchForButtonActivation={this.state.activeSearchForButtonActivation}
          />
        </div>
         <div className="flex-container">
          <div className="timer-bar-bottom" style={{background: myFade}}>
            <div className="timer">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;