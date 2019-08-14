import React from 'react';

function Player(){
    return (
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "25%",
              height: "25%"
            }}
            src='https://www.youtube.com/embed/OoItSYcrB40?rel=0;&autoplay=1'
            frameBorder="0"
          />
        </div>
    )
}

export default Player;