import React from 'react';



var Search = (props) => (
  <div>
    <div className="input-group">
    <input type="text"  style={{width:'854px'}} onKeyDown={props.textFn} id="currentSearch"/>
      <span className="input-group-btn">
        <button className="btn btn-default" id="searchbutton" onClick={props.clickFn}>Search</button>
      </span>
    </div>
  </div>
);



export default Search;