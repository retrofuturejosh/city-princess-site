import React from 'react';
import { Link } from 'react-router-dom';

function Hero(props) {
  const { image } = props;
  console.log(image);
  return (
    <div className="Hero">
      {/* <Link id="hero-link" to="/?songLink=strangers">
        <img id="Hero-img" src={process.env.PUBLIC_URL + image}></img>
      </Link> */}
    <div
      className="video"
      style={{
        position: "relative",
        width: "100%",
        display: "block",
        paddingBottom: "0%" /* 16:9 */,
        height: "90vh"
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://player.vimeo.com/video/467827976?autoplay=1&muted=1`}
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
    </div>
    </div>
  );
}

export default Hero;
