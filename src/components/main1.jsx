import React from 'react';
import image4 from '../img/image9.png';
import image5 from '../img/image8.png';
import image6 from '../img/image7.png';
import image7 from '../img/image6.png';
import image8 from '../img/image5.png';
import image9 from '../img/image10.png';

const MainSection = () => {
    const items = [
        { imgSrc: image4, title: 'Weekly Motivation... <br /> Ben Lee Scoot' },
        { imgSrc: image5, title: 'Weekly Motivation... <br /> Ben Lee Scoot' },
        { imgSrc: image6, title: 'Weekly Motivation... <br /> Ben Lee Scoot' },
        { imgSrc: image7, title: 'Weekly Motivation... <br /> Ben Lee Scoot' },
        { imgSrc: image8, title: 'Weekly Motivation... <br /> Ben Lee Scoot' },
        { imgSrc: image9, title: 'Weekly Motivation... <br /> Ben Lee Scoot' },
    ];

    return (
        <div className="main1">
            {items.map((item, index) => (
                <div className="item1" key={index}>
                    <img src={item.imgSrc} alt="" />
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
            ))}
        </div>
    );
};

export default MainSection;
