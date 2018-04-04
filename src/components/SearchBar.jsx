import React from 'react';


var SearchBar = (props) => (
  <div className="flex-container-vertical-spaced search-bar-container">
    <div className="search-bar-container__title">
      Custom Search Bar
    </div>
    <div>
      <input id="currentSearchInput" 
        onChange={props.currentSearchFn} 
        onKeyDown={props.enterMakesSearchHappenFn}>
      </input>
      <button className="search-bar-input-button" onClick={props.activateSearchFn}>SEARCH</button>
    </div>
  </div> 
)


export default SearchBar;
