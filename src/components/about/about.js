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
      <p>I'm a recent graduate of the Flatiron School Software Engineering Program.  My first exposure to coding was writing a macro in VBA to facilitate manipulation of data for a report that was being generated on a daily basis.  Before the macro, it was very tedious, repetitive work to move data around and build the same charts.  With the macro, a task that once took 5-10 minutes was now done with the click of a button.  After this experience, I knew I had to pursue coding.  I'm very proud of all I have accomplished and learned throughout the program at Flatiron.</p>
      <p>
        Outside of school and work, I love to exercise.  Being a D1 rower in college, I learned about pushing yourself to your limits and how your mind can be your worst enemy in "uncomfortable" situations, whether it be in sports or your job.  Upon graduating, I sought out running to continue to challenge myself and have completed 5 marathons since.  Some other hobbies of mine include reading, strategic boardgaming, and (of course) binge watching shows.
      </p>
    </div>
    <div className="col-six tab-full right">
      <h3>I've Got Some skills.</h3>
      <ul className="skill-bars">
        <li>
          <div className="progress percent100"></div>
          <strong>Ruby</strong>
        </li>
        <li>
          <div className="progress percent100"></div>
          <strong>JavaScript</strong>
        </li>
        <li>
          <div className="progress percent100"></div>
          <strong>Ruby on Rails</strong>
        </li>
        <li>
          <div className="progress percent100"></div>
          <strong>React</strong>
        </li>
        <li>
          <div className="progress percent100"></div>
          <strong>Node.js</strong>
        </li>
        <li>
          <div className="progress percent100"></div>
          <strong>CSS, bootstrap, tailwind</strong>
        </li>   
        <li>
          <div className="progress percent100"></div>
          <strong>SQLite, PostgreSQL, MongoDB</strong>
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
            <ul>
              <li>
                Run up to 5 different instruments and interpret data in timely manner to deliver to team to meet product shipment deadlines
              </li>
              <li>
              Wrote macros to to facilitate processes involving data manipulation - decreased total time spent on tasks up to 90%
              </li>
              <li>
              Collaborate with R&D on methodology to improve timing and accuracy of analytical results
              </li>
              <li>
              Trained 70+ tech ops employees about electronics industry, company purpose and strategy so they understood the importance of their role within the company and enhance performance
              </li>
              <li>
              Volunteer member of the Emergency Response Team on site - attend trainings monthly for fire, hazmat, medical, and confined space rescue
              </li>
            </ul>
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
            <ul>
              <li>
              Led QC team to improve timing and delivery of metal organic product testing and analysis by 60 days 
              </li>
              <li>
              Led safety and security while working with pyrophoric chemicals in an inert environment
              </li>
            </ul>
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
            <ul>
              <li>
                Contribute to the expansion of R&D projects in the Novel Technologies team by performing synthetic, process, and QC tasks efficiently and methodically
              </li>
              <li>
                Prepared and gave bi-weekly technical presentations on lab work and progress
              </li>
              <li>
                Key User for new ERP system - trained and certified up to 20 end users and remained a point of contact for any future issues
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</section>
    )
}

export default About