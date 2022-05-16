import React from 'react'
import '../../App.css';
import VideoBackground from '../VideoBackground'
import Footer from '../Footer';


function Home() {
    return (
        <>
            <VideoBackground />
            <div className='footer-container'>
                <Footer />
            </div>
        </>
    );
}

export default Home