import React from 'react';
import like from '../img/Liked.png';
import image from '../img/image4.png';
import image1 from '../img/image3.png';
import image2 from '../img/image1.png';
import image3 from '../img/image2.png';
import '../main.css';

const MainSection = () => {
    
    const items = [
        { imgSrc: like, altText: 'Liked Songs', title: 'Liked Songs' },
        { imgSrc: image, altText: 'Neffex Playlist', title: 'Neffex Playlist' },
        { imgSrc: image1, altText: 'K/DA', title: 'K/DA' },
        { imgSrc: image2, altText: 'Liked Songs', title: 'Liked Songs' },
        { imgSrc: image3, altText: 'Dance / Electronic Mix', title: 'Dance / Electronic Mix' },
    ];

    return (
        <div className="main">
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <img src={item.imgSrc} alt={item.altText} />
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    );
};

export default MainSection;
