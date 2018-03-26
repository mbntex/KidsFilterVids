import React from 'react';


var SearchBar = (props) => (
  <div className="flex-container search-bar-container">
    Search Bar Component
    <input id="currentSearchInput" 
      onChange={props.currentSearchFn} 
      onKeyDown={props.enterMakesSearchHappenFn}>
    </input>
    <button onClick={props.activateSearchFn}>SEARCH</button>
    
  </div>
)


export default SearchBar;
