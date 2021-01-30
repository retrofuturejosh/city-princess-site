const linkMap = {
    strangers: {
        spotify: "https://open.spotify.com/track/2nwInylZO4IiKzKokNEqbK",
        apple: "https://music.apple.com/us/album/strangers-in-the-dark-single/1537016595",
        tidal: 'https://tidal.com/browse/track/159625940',
        amazon: 'https://music.amazon.com/albums/B08HKT9252?trackAsin=B08HKS1NLL&ref=dm_sh_73c3-b95d-dmcp-b60e-9df76&musicTerritory=US&marketplaceId=ATVPDKIKX0DER',
        youtube: 'https://www.youtube.com/watch?v=vOahLwWKEN0'
    },
    behere: {
        spotify: "https://open.spotify.com/track/4mpeJsQwdfgDrvSAYEiuZM",
        apple: "https://music.apple.com/us/artist/city-princess/1546293600",
        tidal: 'https://listen.tidal.com/track/168102548',
        amazon: 'https://music.amazon.com/albums/B08RYQ9SC3?trackAsin=B08RYPW78M&do=play',
        youtube: 'https://www.youtube.com/watch?v=OyQ2VMoRsLM'
    }
}

function linkMapper(song) {
    return linkMap[song];
}

export default linkMapper;