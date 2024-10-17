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
      <p>With a strong foundation in the semiconductor industry, where I spent several years working with chemicals for computer chip manufacturing, I made a pivotal shift into software development to engage more directly with the tech landscape. My background in chemistry equips me with robust technical and analytical skills.</p>

      <p>For the past 2+ years, I’ve been refining my expertise at a media company by contributing to the marketing tech team in building consumer-facing pages.  I thrive in Agile environments, collaborating closely with cross-functional teams to deliver high-quality solutions efficiently. My skill set includes both front-end and back-end development, with proficiency in JavaScript, React, Next.js and Node.js. Additionally, I have hands-on experience with WordPress, Piano (a paywall service), AWS, and CI/CD tools such as Jenkins and Travis, as well as conducting code reviews.</p>

      <p>I am passionate about leveraging my diverse background to create innovative and user-centric solutions in the tech industry.</p>
      <p>
        Outside of school and work, I love to exercise.  Being a D1 rower in college, I learned about pushing yourself to your limits and how your mind can be your worst enemy in "uncomfortable" situations, whether it be in sports or your job.  Upon graduating, I sought out running to continue to challenge myself and have completed 5 marathons since.  Some other hobbies of mine include reading, strategic boardgaming, and (of course) binge watching shows.
      </p>
    </div>
    <div className="col-six tab-full right">
      <h3>I've Got Some skills.</h3>
      <ul className="skill-bars">
        <li>
          <div className="progress percent100"></div>
          <strong>TypeScript/JavaScript</strong>
        </li>
        <li>
          <div className="progress percent100"></div>
          <strong>NextJS</strong>
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
          <strong>Wordpress</strong>
        </li>
        <li>
          <div className="progress percent100"></div>
          <strong>Git</strong>
        </li>   
        <li>
          <div className="progress percent100"></div>
          <strong>HTML, CSS</strong>
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

            <p className="timeline__timeframe">February 2022 - present</p>
            <h3>Fortune Media</h3>
            <h5>Web Developer</h5>
          </div>
          <div className="timeline__desc">
            <ul>
              <li>
              Currently leading the replatforming of our codebase to integrate multiple business units, managing deliverables in a fast-paced environment to ensure future rapid delivery of stakeholder requirements.              </li>
              <li>
              Successfully transitioned the site’s architecture from JavaScript to TypeScript using Next.js, improving code maintainability and reducing bugs.              </li>
              <li>
              Built dynamic web pages using reusable blocks in WordPress with a headless CMS and Next.js as the frontend.              </li>
              <li>
              Integrated Braintree into our codebase, facilitating seamless purchases of Fortune 500 lists directly from our site, replacing a cumbersome third-party solution.
              </li>
              <li>
              Contributed to the redesign and implementation of our paywall system, enhancing user experience and streamlining access management.
              </li>
              <li>
              Fostered a collaborative development culture through pair programming, enhancing team productivity and knowledge sharing across cross-functional teams.
              </li>
            </ul>
          </div>
        </div> 

        <div className="col-six tab-full right">
        <div className="timeline">
        <div className="timeline__block">
          <div className="timeline__bullet" />
          <div className="timeline__header">

            <p className="timeline__timeframe">September 2018 - February 2022</p>
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
        </div>
        </div>
        </div>
        </div>

        <div className="col-six tab-full left">
        <div className="timeline">
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
