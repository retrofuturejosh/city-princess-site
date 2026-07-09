import React from 'react';
import './App.css';

const musicLinks = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/3ylFTwTwvZK33nHxIq56jS'
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/artist/city-princess/1546293600'
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC2oSdSzYYnuAhBF87vuBO1w'
  },
  {
    label: 'Amazon Music',
    href: 'https://music.amazon.com/artists/B08Q757LPN/city-princess'
  },
  {
    label: 'Tidal',
    href: 'https://tidal.com/artist/22573294'
  }
];

function App() {
  return (
    <main className="page-shell">
      <section className="release" aria-labelledby="release-title">
        <div className="art-wrap">
          <img
            className="cover-art"
            src={`${process.env.PUBLIC_URL}/cant-love-you-anymore-art.jpg`}
            alt="Can't love you anymore cover art"
          />
        </div>

        <div className="release-copy">
          <p className="artist">City Princess</p>
          <h1 id="release-title">can't love you anymore</h1>
        </div>

        <nav className="link-list" aria-label="Music services">
          {musicLinks.map((link) => (
            <a
              className="service-link"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link.label}</span>
              <span aria-hidden="true">Open</span>
            </a>
          ))}
        </nav>

        <a
          className="instagram-link"
          href="https://www.instagram.com/_city_princess_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @_city_princess_
        </a>
      </section>
    </main>
  );
}

export default App;
