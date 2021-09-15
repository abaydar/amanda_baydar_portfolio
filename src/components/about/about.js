import React from 'react'

function About(){
    return(
        <section id="about" className="s-about target-section">
  <div className="row narrow section-intro has-bottom-sep">
    <div className="col-full text-center">
      <h3>About</h3>
      <h1>More About Me</h1>
      <p className="lead">Experienced in frontend and backend development with a focus in Ruby, Rails, Javascript, and React.  Coming from a background in chemistry, I bring strong technical and analytical skills along with experience working in a team setting.</p>
    </div>
  </div>
  <div className="row about-content">
    <div className="col-six tab-full left">
      <h3>Hi There!</h3>
      <p>I'm a recent graduate of the Flatiron School Software Engineering Program.  I decided to enroll in Flatiron in November 2020, after working in the semiconductor industry for about 7 years.  When I first started my career in chemistry, I was so excited - it seemed so interesting and challenging.  As the years passed, I began to become disheartened about how far my career could progress solely with a bachelors degree.</p>
      <p>
        One of my college friends, who was also a chemistry major, did a coding bootcamp back in 2018.  I remember her journey and how rewarded she felt.  This is when the seed was planted - I wanted to see what coding was about.  One of my first exposures to coding was writing a macro in VBA to simplify the data output for one of our instruments, so reports could be compiled in a timely manner.  After this, I was hooked. I loved the combination of logic and creativity, in addition to that rewarding feeling you get when your code finally works the way you envisioned.
      </p>
      <p>
        Outside of school and work, I love to exercise.  Being a D1 rower in college, I learned many lessons about pushing yourself to your limits and how your mind can be your worst enemy in an "uncomfortable" situation.  Upon graduating, I sought out running to continue to challenge myself and have completed 4 marathons since.  Some other hobbies of mine are reading, strategic boardgaming, and (of course) binge watching shows.
      </p>
    </div>
    <div className="col-six tab-full right">
      <h3>I've Got Some skills.</h3>
      <ul className="skill-bars">
        <li>
          <div className="progress percent95"><span>95%</span></div>
          <strong>Ruby</strong>
        </li>
        <li>
          <div className="progress percent95"><span>95%</span></div>
          <strong>JavaScript</strong>
        </li>
        <li>
          <div className="progress percent90"><span>90%</span></div>
          <strong>Rails</strong>
        </li>
        <li>
          <div className="progress percent90"><span>90%</span></div>
          <strong>React</strong>
        </li>
        <li>
          <div className="progress percent80"><span>80%</span></div>
          <strong>CSS, bootstrap, tailwind</strong>
        </li>   
        <li>
          <div className="progress percent75"><span>75%</span></div>
          <strong>SQLite</strong>
        </li>   
      </ul>
    </div>
  </div> 
  <div className="row about-content about-content--timeline">
    <div className="col-full text-center">
      <h3>My Work Experience.</h3>
    </div>
    <div className="col-six tab-full left">
      <div className="timeline">
        <div className="timeline__block">
          <div className="timeline__bullet" />
          <div className="timeline__header">
            <p className="timeline__timeframe">September 2018 - Present</p>
            <h3>EMD Electronics</h3>
            <h5>Microscopist/Spectroscopist</h5>
          </div>
          <div className="timeline__desc">
            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
          </div>
        </div> 
        <div className="timeline__block">
          <div className="timeline__bullet" />
          <div className="timeline__header">
            <p className="timeline__timeframe">November 2017 - September 2018</p>
            <h3>EMD Electronics</h3>
            <h5>Quality Control Technician</h5>
          </div>
          <div className="timeline__desc">	
            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
          </div>
        </div> 
      </div> 
    </div> 
    <div className="col-six tab-full right">
      <div className="timeline">
        <div className="timeline__block">
          <div className="timeline__bullet" />
          <div className="timeline__header">
            <p className="timeline__timeframe">July 2014 - November 2017</p>
            <h3>EMD Electronics</h3>
            <h5>Chemistry Technician</h5>
          </div>
          <div className="timeline__desc">
            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</section>
    )
}

export default About