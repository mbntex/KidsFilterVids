import React from 'react';

var SpecificSearchTopicButtons = (props) => (
  <div>
    <button 
      className="search-select-buttons" 
      style={{backgroundImage: `url(./ButtonImages/${props.buttonInfo.image})`, color: `${props.buttonInfo.color}`}} 
      id={props.buttonInfo.term} 
      onClick={()=>props.topicButtonClick(props.buttonInfo.term)}
    >
        {props.buttonInfo.buttonLabel}
    </button>
    
  </div>
)


{/*
<img className="about-image" src="./images/donovonjenson.jpg"/>
<img className="test1234" src="./ButtonImages/Daniel.jpeg"/>
style={{backgroundImage: './ButtonImages/Daniel.jpeg'}}
*/}

export default SpecificSearchTopicButtons;