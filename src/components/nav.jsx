import React from 'react';
import spot from '../img/logo.png';
import home from '../img/Home.png';
import search from '../img/Search.png';
import lib from '../img/lib.png';
import cr from '../img/Create.png';
import like from '../img/Liked.png';
import ep from '../img/ep.png';
import int from '../img/in.png';
import '../navbar.css';

const NavBar = () => {
    
    const navItems1 = [
        { imgSrc: home, text: 'Home' },
        { imgSrc: search, text: 'Search' },
        { imgSrc: lib, text: 'Your Library' },
    ];

    const navItems2 = [
        { imgSrc: cr, text: 'Create Playlist' },
        { imgSrc: like, text: 'Liked Songs' },
        { imgSrc: ep, text: 'Your Episodes' },
    ];

    const favItems = [
        'Daily Mix 1',
        'Discover Weekly',
        'Malayalam',
        'Dance/ElectronicxMix',
        'EDM/Populer',
    ];

    return (
        <nav className='nav'>
            <div className='logo'>
                <img src={spot} alt="Logo" />
            </div>
            <div>
               
                <div className="home">
                    {navItems1.map((item, index) => (
                        <div className={`three ${index === 1 ? 'three1' : index === 2 ? 'three2' : ''}`} key={index}>
                            <div className="image">
                                <img src={item.imgSrc} alt={item.text} />
                            </div>
                            <div className="text">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="home home1">
                    {navItems2.map((item, index) => (
                        <div className="three th" key={index}>
                            <div className="image">
                                <img src={item.imgSrc} alt={item.text} />
                            </div>
                            <div className="text">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="f">
                    <p>FAV</p>
                    {favItems.map((favItem, index) => (
                        <p key={index}>{favItem}</p>
                    ))}
                </div>

                
                <div className="install">
                    <div className="image">
                        <img src={int} alt="Install Spotify" />
                    </div>
                    <div className="text">
                        <p>Install Spotify</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
