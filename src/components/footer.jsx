import React from 'react';
import d from '../img/d.png';
import bh from '../img/gh.png';
import m from '../img/m.png';
import r from '../img/r.png';
import '../footer.css'
const Footer = () => {
    return (
        <div className="last">
            <div className="bottom1">
                <div className="right">
                    <img src={d} alt="" className="j" />
                    <span>
                        Dreaming on <br />
                        NEFFEX
                    </span>
                    <img src={bh} alt="" className="heart" />
                </div>
                <div className="middle">
                    <img src={m} alt="" />
                </div>
                <div className="left">
                    <img src={r} alt="" />
                </div>
            </div>
            <div className="bottom">
                <p>Listening on ASUS-ROG-G531GT</p>
            </div>
        </div>
    );
};

export default Footer;
