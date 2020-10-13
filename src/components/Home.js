import React from 'react';

import Main from './Hero';
import Header from './Header'
import Footer from './Footer';

function Home() {
    return (
        <div className="Home">
            <Main image='/VHSHero.png' ></Main>
            <Footer></Footer>
        </div>
    );
}

export default Home;