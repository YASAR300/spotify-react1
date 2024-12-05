import React from 'react';
import arr from '../img/ar.png';
import user from '../img/User.png';
import '../header.css'
const Header = () => {
    return (
        <div className="container">
            <h1>Good morning</h1>
            <div className="list_container">
                <div className="left">
                    <img src={arr} alt="" className="arrow" />
                </div>
                <div className="right">
                    <img src={user} alt="" className="user" />
                </div>
            </div>
        </div>
    );
};

export default Header;
