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
      currentSearch : ''

    };
  }

  textInputFn (e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  searchClickFn () {
    console.log('clicked');
    console.log('API = ', keys.youTubeKey);
    // axios.get('https://www.googleapis.com/youtube/v3/search', {
    //   params: {
    //     q: 'kittens',
    //     maxResults: 5,
    //     key: 'hello',
    //     videoEmbeddable: true,
    //     part: 'snippet',
    //     type: 'video'
    //   }
    // })
  }








 
  render() {
    return (
      <div>
        <p>Filter Tube</p>
        <Search textFn = {this.textInputFn.bind(this)} clickFn={this.searchClickFn.bind(this)}/>
        <Player/>
        <ResultsList/>
        
      </div>
    );
  }
}



export default App;