import React from 'react';



var Search = (props) => (
  <div>
    <input type="text" onChange={props.textFn} id="currentSearch"/> 
    <button onClick = {props.clickFn}>Search</button>
  </div>

  );



export default Search;