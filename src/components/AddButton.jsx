import React from 'react';
import DeleteButtonsPopUp from './DeleteButtonsPopUp.jsx';


var AddButton = (props) => {
  var lableInputTextColor ='black';
  var fileInputTextColor = 'black';
  (props.AddButtonLabel.length > 12) ? lableInputTextColor = 'red' : lableInputTextColor = 'black';
  (props.AddButtonFile.split('')[0] !== '.' || props.AddButtonFile.split('')[1] !== '/') ? fileInputTextColor = 'red' : fileInputTextColor = 'black';

  return (
    <div className="flex-container-vertical-spaced add-button-controls">
      <div>Add Your Own Button</div>
      <div className="add-button-controls-clear-both">
        <span className="add-button-controls-float-left">Button Search Term:</span> 
        <span className="add-button-controls-float-right">
          <input 
            className="add-btn-inuput" 
            id="newButtonSearchTerm" 
            onChange={props.buttonFieldUpdater}
            value={props.AddButtonTerm}
          >
          </input>
        </span>
      </div>
      <div className="add-button-controls-clear-both">
        <span className="add-button-controls-float-left">Button Label:</span>       
        <span className="add-button-controls-float-right">
          <input 
            style={{color: lableInputTextColor}}
            className="add-btn-inuput" 
            id="newButtonLabel" 
            onChange={props.buttonFieldUpdater}
            value={props.AddButtonLabel}
          >
          </input>
        </span>
      </div>
      <div className="add-button-controls-clear-both">
        <span className="add-button-controls-float-left">Button Image File (Optional):</span>  
        <span className="add-button-controls-float-right">
          <input 
            style={{color: fileInputTextColor}}
            className="add-btn-inuput" 
            id="newButtonImageFile" 
            onChange={props.buttonFieldUpdater} 
            placeholder="i.e. Rogers.jpg"
            value={props.AddButtonFile}
          >
          </input>
        </span>
      </div>
      <div>
        <div className="add-button-controls-clear-both">
          <div className="flex-container">
            <div>
              <div className="add-button-controls-clear-both add-button-note-text">IMPORTANT NOTES FOR IMAGES: <span style={{color: 'blue'}}>FOLLOW THESE!!!</span></div>
              <div className="add-button-controls-clear-both add-button-note-text">1. Place image in images folder with same EXACT name & file extension</div>
              <div className="add-button-controls-clear-both add-button-note-text">2. A 1x1 ratio is best for images</div>
            </div>
            <div className="flex-container-vertical">
              <button className="add-new-button" onClick={props.newButtonCreate}>Create Button</button>
              <button className="add-new-button" onClick={props.toggleDeleteButtonsPopUpToggleFn}>Delete Buttons</button>
            </div>
          </div>
        </div>
      </div> 
      { props.isDeleteButtonsOpen ? 
          <DeleteButtonsPopUp 
            allPossibleSearchesList={props.allPossibleSearches} 
            toggleStatusFn={props.toggleDeleteButtonsPopUpToggleFn}
            deleteClickedButton={props.deleteChosenButton}
          />  
        : <div></div> 
      }
    </div>
  )
}


export default AddButton;