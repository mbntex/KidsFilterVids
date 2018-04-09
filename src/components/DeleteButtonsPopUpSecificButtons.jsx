import React from 'react';

var DeleteButtonSpecificButton = (props) => (
  <div>
    <button 
      className="search-select-buttons" 
      style={{backgroundImage: `url(./ButtonImages/${props.buttonInfo.image})`, color: `${props.buttonInfo.color}`}} 
      id={props.buttonInfo.term} 
      onClick={()=>props.deleteButtonFn(props.buttonInfo.term)}
      >
        {props.buttonInfo.buttonLabel}
      </button>
    
  </div>
)


export default DeleteButtonSpecificButton;