import React from 'react';

class SpecificSearchTopicButtons extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
     
    }
  }

  // makeButtonActive() {
  //   if (this.props.buttonInfo.term === this.props.activeSearchForButtonActivation) {
  //     console.log('WOOT! = ', this.props.buttonInfo.term);
  //   }
  // }


  runTwoFuncitonsOnClick(searchTermFromButton) {
    this.props.ActiveButtonSelectorFn(searchTermFromButton);
    this.props.topicButtonClick(this.props.buttonInfo.term)
    // makeButtonActive();
  }

  // componentWillReceiveProps() {
  //   if (this.props.buttonInfo.term === this.props.activeSearchForButtonActivation) {
  //     buttonStyle.border = '5px solid orange'
  //     console.log('WOOT! = ', this.props.buttonInfo.term);
  //   }
  // }


  render() {
    var buttonStyle = {backgroundImage: `url(./ButtonImages/${this.props.buttonInfo.image})`, color: `${this.props.buttonInfo.color}`} 
    if (this.props.buttonInfo.term === this.props.activeSearchForButtonActivation) {
      buttonStyle.border = '5px solid orange';
      buttonStyle.boxShadow = '0px 10px 8px #5D5D5D';

      console.log('WOOT! = ', this.props.buttonInfo.term);
    }
    return (
      <div>
        <button 
          className="search-select-buttons" 
          style={buttonStyle} 
          id={this.props.buttonInfo.term} 
          onClick={()=>this.runTwoFuncitonsOnClick(this.props.buttonInfo.term)}

        >
            {this.props.buttonInfo.buttonLabel}
        </button>
      </div>
    )
  }


} 









// var SpecificSearchTopicButtons = (props) => {
//   var makeButtonActive = () => {
//     if (props.buttonInfo.term === props.activeSearchForButtonActivation) {
//       console.log('WOOT! = ', props.buttonInfo.term);
//     }
//   }

//   var runTwoFuncitonsOnClick = function(searchTermFromButton) {
//     props.ActiveButtonSelectorFn(searchTermFromButton);
//     props.topicButtonClick(props.buttonInfo.term)
//     makeButtonActive();
//   }


//   return (
//     <div>
//       <button 
//         className="search-select-buttons" 
//         style={{backgroundImage: `url(./ButtonImages/${props.buttonInfo.image})`, color: `${props.buttonInfo.color}`}} 
//         id={props.buttonInfo.term} 
//         onClick={()=>runTwoFuncitonsOnClick(props.buttonInfo.term)}

//       >
//           {props.buttonInfo.buttonLabel}
//       </button>
      
//     </div>
//   )
// }


{/*
<img className="about-image" src="./images/donovonjenson.jpg"/>
<img className="test1234" src="./ButtonImages/Daniel.jpeg"/>
style={{backgroundImage: './ButtonImages/Daniel.jpeg'}}
*/}

export default SpecificSearchTopicButtons;