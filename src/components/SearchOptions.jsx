import React from 'react';
import SearchTopicButton from './SearchButtons.jsx';

var SearchOptions = (props) => (
  <div>
    Search Options:
    <div>
      Pick A Show!
      <div className="flex-container standard-button-container">
        {props.allPossibleSearches.map ((item, i) => <SearchTopicButton buttonInfo={item} key={i} topicButtonClick={props.useSearchTopicButton}/> )}
      </div>
    </div>
  </div>
)


export default SearchOptions;
