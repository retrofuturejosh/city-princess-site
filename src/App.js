import React from 'react';
import './App.css';

const musicLinks = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/track/5iN6pm11cjU1Um2dXVpz33?si=32976b6083f64a13'
  },
  {
    label: 'Apple Music',
    href: 'https://music.apple.com/us/song/cant-love-you-anymore/6788693001'
  },
  {
    label: 'YouTube',
    href: 'https://music.youtube.com/playlist?list=OLAK5uy_m_wLIkqMcJbiXUlWvWIrWnhdWkFmDPYfY&si=_62qyvdRyGn96fCg'
  },
  {
    label: 'Amazon Music',
    href: 'https://music.amazon.com/albums/B0H83C5J57?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_VE3Bxt1hw92GWsowTr8yt39mU&trackAsin=B0H83L4DX4'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_city_princess_/'
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
            alt="City Princess cover art"
          />
        </div>

        <h1 id="release-title" className="release-title">City Princess</h1>

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
      </section>
    </main>
  );
}

export default App;
