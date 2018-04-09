import React from 'react';
import SpecificSearchTopicButtons from './SpecificSearchTopicButtons.jsx';


class SearchButtonsList extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showLeftArrow: false,
      showRightArrow: true
    }
  } 


  determineIfArrowsShow(e) {
    // console.log(window.innerWidth);
    // var t = document.getElementById("test6789");
    // console.log('SCROLL WIDTH = ', t.scrollWidth);
    let scrollBarWidth = e.target.scrollWidth;
    let howFarScrolled = e.target.scrollLeft;
    let totalScroll = scrollBarWidth - howFarScrolled;
    console.log('TOTAL SCROLL = ', totalScroll);

    if (totalScroll < 5600) {
      // console.log('make left arrow appear');
      this.setState({showLeftArrow: true});
    } 
    if (this.state.showLeftArrow && totalScroll > 5600) {
      this.setState({showLeftArrow: false});
    }
    
    if (totalScroll > 1410) {
      // console.log('make right arrow apear');
      this.setState({showRightArrow: true});
    } 
    if (this.state.showRightArrow && totalScroll < 1410) { 
      this.setState({showRightArrow: false});
    }

    
  }
  


  render() {
    return (
      <div>
        <div className="flex-container-align-center overall-search-wrapper">
          { (this.state.showLeftArrow) ? <div><img className="search-scroll-arrow" src="./ButtonImages/left.jpg"/></div> : <div className="search-scroll-arrow"></div> }
          <div className="flex-container standard-button-container" onScroll={this.determineIfArrowsShow.bind(this)} id="test6789">
            {this.props.allPossibleSearches.map ((item, i) => <SpecificSearchTopicButtons buttonInfo={item} key={i} topicButtonClick={this.props.useSearchTopicButton} ActiveButtonSelectorFn={this.props.ActiveButtonSelectorFn} activeSearchForButtonActivation={this.props.activeSearchForButtonActivation}/> )}
          </div>
          { (this.state.showRightArrow) ? <div><img className="search-scroll-arrow" src="./ButtonImages/right.jpg"/></div> : <div className="search-scroll-arrow"></div> }
        </div>
      </div>


    )
  }
}


export default SearchButtonsList;
