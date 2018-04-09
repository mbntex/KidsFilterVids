import React from 'react';
import YouTube from 'react-youtube'; 
 
var MainVideo = (props) => { 

// console.log('WIDTH = ', window.innerWidth);
// showMeTheScreenWidthFn() {
//   console.log('WIDTH = ', window.innerWidth);
// }

//  On screens that are 600px wide or less, make the menu links stack on top of each other instead of next to each other 
// @media screen and (max-width: 600px) {
//   .topnav a {
//     float: none;
//     width: 100%;
//   }
// }

// document.addEventListener("resize", console.log('WIDTH = ', window.innerWidth) );

if (window.innerWidth < 1200 && window.innerWidth > 600) {
  console.log('SMALL screen now!');
  opts = {
    height: '390',
    width: '640',
    playerVars: {rel: 0}
  };
} else if (window.innerWidth < 600) {
  console.log('SUPER SMALL screen now!');
  opts = {
    height: '304',
    width: '500',
    playerVars: {rel: 0}
  };
} else {
  console.log('LARGE');
  var opts = {
    height: '548',
    width: '900',
    playerVars: {rel: 0}
  };
}




  

  // if (window.innerWidth < 1400) {
  //   opts = {
  //     height: '390',
  //     width: '640',
  //     playerVars: {rel: 0}
  //   };
  // }
  
  // console.log('PLAYER STATE = ', YouTube.PlayerState)

  return(
    <div className="You-Tube-display">
      <div className="You-Tube-display--title-text">
        {props.currentTitle}
      </div>
      <div>
        <YouTube
          videoId={props.currentVideo}
          opts={opts}
        />
      </div>
    </div>
  )
}


export default MainVideo;



