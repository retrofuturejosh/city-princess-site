import React from 'react';
import { Link } from 'react-router-dom';

import Hero from './Hero'
import linkMapper from '../mappers/linkMapper';

function StreamingLinks(props) {
    const { song } = props;
    const links = linkMapper(song);
    return (
        <div className="Links">
            <div id='ruff-home'>
                <Link to='/'>
                    <span id='ruff-home-name'>RUFF</span>
                </Link>
            </div>
            <div className="Hero">
                <img id="Hero-img" src={process.env.PUBLIC_URL + './city-vhs.png'}></img>
            </div>
            <div class='linkClass' id='link1'> <span><a className="link" target="_blank" href={links.spotify}>Spotify</a></span></div>
            <div class='linkClass' id='link2'> <span><a className="link" target="_blank" href={links.apple}>Apple Music</a></span></div>
            <div class='linkClass' id='link3'> <span><a className="link" target="_blank" href={links.tidal}>Tidal</a></span></div>
            <div class='linkClass' id='link4'> <span><a className="link" target="_blank" href={links.youtube}>YouTube</a> </span></div>
            <div class='linkClass' id='link5'> <span><a className="link" target="_blank" href={links.amazon}>Amazon Music</a></span></div>
        </div>
    );
}

export default StreamingLinks;