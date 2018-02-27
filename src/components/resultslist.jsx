import React from 'react';
import ResultsListItem from './resultslistitem.jsx';


var ResultsList = (props) => (
  <div>
    {
      props.listItems.map((item, i) => 
        <ResultsListItem movieName={item} key={i}/>
      )
    }
  </div>
  );




export default ResultsList;