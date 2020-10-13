const linkMap = {
    strangers: {
        spotify: "https://open.spotify.com/album/3eh4VVaMBjGQwQTeRq6Ovu?si=aJO33NVnTbGLa-3iqSapug",
        apple: "https://music.apple.com/us/album/strangers-in-the-dark-single/1530525376",
        tidal: 'https://tidal.com/browse/album/154209840',
        google: 'https://play.google.com/store/music/album/Ruff_Strangers_in_the_Dark?id=Bxvum7hhsuymdxmbav26podleeq&hl=en_US',
        amazon: 'https://music.amazon.com/albums/B08HKT9252?trackAsin=B08HKS1NLL&ref=dm_sh_73c3-b95d-dmcp-b60e-9df76&musicTerritory=US&marketplaceId=ATVPDKIKX0DER',
        youtube: 'https://youtu.be/CTvUYA5V7WI'
    }
}

function linkMapper(song) {
    return linkMap[song];
}

export default linkMapper;