import React from 'react'


function Home(){

    return(  
        <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
            <div className="row home-content__main">
            <h3>Hello There</h3>
            <h1>
                I am Jonathan Doe. <br />
                I am a graphic &amp; UI/UX <br />
                designer based in Somewhere.
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
