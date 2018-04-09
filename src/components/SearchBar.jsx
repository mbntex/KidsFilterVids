import React from 'react';


var SearchBar = (props) => (
  <div className="item-wrapper-internal">
    <div>
      <div className="flex-center-content parental-control__input-wrapper">
        <input id="currentSearchInput" 
          placeholder="Your Search Here"
          onChange={props.currentSearchFn} 
          onKeyDown={props.enterMakesSearchHappenFn}>
        </input>
      </div>
      <div>
        <button className="parental-control__button--search-bar" onClick={props.activateSearchFn}>SEARCH</button>
      </div>
    </div>
  </div>
)

 
export default SearchBar;
