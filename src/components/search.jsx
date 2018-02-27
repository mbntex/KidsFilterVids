import React from 'react';



var Search = (props) => (
  <div>
    <div className="input-group" style={{padding: "20px 5px 5px 20px"}}>
    <input type="text" size="75" onChange={props.textFn} id="currentSearch"/>
      <span className="input-group-btn">
        <button className="btn btn-default" id="searchbutton" onClick={props.clickFn}>Search</button>
      </span>
    </div>
  </div>
);



export default Search;