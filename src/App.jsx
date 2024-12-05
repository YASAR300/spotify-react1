import React from 'react';
import NavBar from './components/nav';
import Header from './components/header';
import MainContent from './components/mainc';
import MainContent1 from './components/main1';

import Footer from './components/footer';
import './style.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <MainContent />
            <MainContent1 />
            <MainContent1 />
            <MainContent1 />

            <Footer />
        </div>
    );
};

export default App;
