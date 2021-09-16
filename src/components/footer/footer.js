import React from 'react'

function Footer(){
    return(
        <footer>
  <div className="row">
    <div className="col-full">
      <div className="footer-logo">
      </div>
      <ul className="footer-social">
        <li><a href="https://www.linkedin.com/in/amanda-baydar-387651a0/">
            <i className="im im-linkedin" aria-hidden="true" />
            <span>LinkedIn</span>
          </a></li>
        <li><a href="https://abay1022.medium.com/">
            <i className="im im-blog" aria-hidden="true" />
            <span>Medium</span>
          </a></li>
        <li><a href="https://www.github.com/abaydar/">
          <i className="im im-github" aria-hidden="true" />
          <span>GitHub</span>
        </a></li>
      </ul>
    </div>
  </div>
  <div className="row footer-bottom">
    <div className="col-twelve">
      <div className="copyright">
        <span>© Copyright Hola 2017</span> 
        <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>	
      </div>
      <div className="go-top">
        <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true" /></a>
      </div>
    </div>
  </div> 
</footer>

    )
}

export default Footer