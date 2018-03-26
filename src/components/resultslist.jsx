import React from 'react';
import ResultsListItem from './resultslistitem.jsx';


var ResultsList = (props) => (
  <div className="scrolling">
    {
      props.listItems.map((item, i) => 
        <ResultsListItem movieName={item.snippet.title} vidId={item.id.videoId} image={item.snippet.thumbnails.default.url} channelTitle={item.snippet.channelTitle} videoChangeFn={props.videoSelectFn}  key={i}/>
      )
    }
  </div>
  );


     


export default ResultsList;




