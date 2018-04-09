import React from 'react';
import DeleteButtonsPopUp from './DeleteButtonsPopUp.jsx';

 
var AddButton = (props) => {
  var lableInputTextColor ='black';
  var fileInputTextColor = 'black';
  (props.AddButtonLabel.length > 12) ? lableInputTextColor = 'red' : lableInputTextColor = 'black';
  (props.AddButtonFile.split('')[0] !== '.' || props.AddButtonFile.split('')[1] !== '/') ? fileInputTextColor = 'red' : fileInputTextColor = 'black';

  return (
    <div className="flex-container-vertical-spaced item-wrapper-internal">
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
        <span className="add-button-controls-float-left">Button Image File:</span>  
        <span className="add-button-controls-float-right">
          <input 
            style={{color: fileInputTextColor}}
            className="add-btn-inuput" 
            id="newButtonImageFile" 
            onChange={props.buttonFieldUpdater} 
            placeholder="OPTIONAL: i.e. Rogers.jpg @1x1 Ratio"
            value={props.AddButtonFile}
          >
          </input>
        </span>
      </div>
      <div>
        <div className="parental-control__button-wrapper add-button-button-wrapper">
          <button className="parental-control__button" onClick={props.newButtonCreate}>Create Button</button>
          <button className="parental-control__button" onClick={props.toggleDeleteButtonsPopUpToggleFn}>Delete Buttons</button>
          <button className="parental-control__button" onClick={props.resetToDefaultsFn}>Restore To Defaults</button>

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