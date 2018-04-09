import React from 'react';
import DeleteButtonSpecificButton from './DeleteButtonsPopUpSecificButtons.jsx';

var DeleteButtonsPopUp = (props) => (
  <div className="button-delete-popup">
    <div className="button-delete-popup_inner">
    <div onClick={props.toggleStatusFn}>X</div>
      <div>
      Delete A Button
      <div className="flex-container standard-button-container">
        {props.allPossibleSearchesList.map ((item, i) => <DeleteButtonSpecificButton buttonInfo={item} key={i} deleteButtonFn={props.deleteClickedButton}/> )}
      </div>
    </div>
    </div>
  </div>
)

export default DeleteButtonsPopUp;




