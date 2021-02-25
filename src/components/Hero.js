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
      <div className="video-background">
        <div className="video-foreground">
          <iframe src="https://www.youtube.com/embed/qM5kHFOGgvg?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Hero;
