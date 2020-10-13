import React from 'react';
import { Link } from 'react-router-dom'
import AudioPlayer from "react-modular-audio-player";

let audioFiles = [
  {
    src: process.env.PUBLIC_URL + '/strangers.mp3',
    title: "Strangers in the Dark"
  }
];


let rearrangedPlayer = [
  {
    className: "tier-top",
    style: { width: "fit-content" },
    innerComponents: [
      {
        type: "name",
        style: { width: "fit-content" }
      },
      {
        type: "play",
        style: { width: "fit-content" }
      },
      {
        type: "rewind",
        style: { width: "fit-content" }
      },
      {
        type: "forward",
        style: { width: "fit-content" }
      },
      {
        type: "volume",
        style: { width: "5rem" }
      }
    ]
  }
]

function Footer() {
  console.log("Shout out from the console!");
  return (
    <div className="Footer">
      
      <div id="footer-text">
        <a href="https://www.instagram.com/__r_u_f_f__/">@__r_u_f_f__</a>
      </div>
      <div>
        <Link to="/?songLink=strangers">Listen to debut single Strangers in the Dark</Link>
      </div>
      {/* <AudioPlayer
          iconSize="1.5rem"
          fontSize="1rem" audioFiles={audioFiles} rearrange={rearrangedPlayer} /> */}
    </div>
  );
}

export default Footer;
