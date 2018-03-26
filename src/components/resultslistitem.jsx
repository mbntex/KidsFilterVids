import React from 'react';



var ResultsListItem = (props) => (
  <div onClick={()=>props.videoChangeFn(props)}>
    <div>
      <img src={props.image}/>
    </div>
    <div>
      {props.movieName}
    </div>
  </div>
);




export default ResultsListItem;




