import React from 'react';


var AdjustmentPanel = (props)=> (
  
  <div className="popup">
    <div className="popup_inner">
      <button className="btn btn-primary" onClick={props.openCloseFn}>CLOSE EXPANDED LIST</button>
      <button className="btn btn-primary toprightclass" onClick={props.openCloseFn}>X</button>
      <h2>Tips Expanded Reader</h2>
      <div className="popup_list_scrolls">
        More
      </div>
    </div>
  </div>




  );




export default AdjustmentPanel;