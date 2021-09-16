import React from 'react'
import resumeData from './resumeData'


function Home(){

    return(  
        <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/robynne-hu-HOrhCnQsxnQ-unsplash.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
            <div className="row home-content__main">
            <h3>Hello There</h3>
            <h1>
                I am {resumeData.name}. <br />
                I am a {resumeData.role} based in {resumeData.location}.
            </h1>
            <div className="home-content__buttons">
                <a href="#works" className="smoothscroll btn btn--stroke">
                Latest Projects
                </a>
                <a href="#about" className="smoothscroll btn btn--stroke">
                More About Me
                </a>
            </div>
            <div className="home-content__scroll">
                <a href="#about" className="scroll-link smoothscroll">
                <span>Scroll Down</span>
                </a>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Home
