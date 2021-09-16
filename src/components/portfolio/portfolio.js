import React from 'react'

function Portfolio(){
    return(
        <section id="works" className="s-works target-section">
  <div className="row narrow section-intro has-bottom-sep">
    <div className="col-full">
      <h3>Portfolio</h3>
      <h1>See My Latest Projects.</h1>
    </div>
  </div>
  <div className="row masonry-wrap">
    <div className="masonry">
      <div className="masonry__brick">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href="images/marvin-meyer-SYTO3xs06fU-unsplash.jpg" className="thumb-link" title="Tech Networking" data-size="1050x700">
              <img src="images/marvin-meyer-SYTO3xs06fU-unsplash.jpg" srcSet="images/marvin-meyer-SYTO3xs06fU-unsplash.jpg 1x, images/marvin-meyer-SYTO3xs06fU-unsplash.jpg 2x" alt="" />
              <span className="shadow-overlay" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              Tech Networking
            </h3>
            <p className="item-folio__cat">
              React/Redux, Rails API
            </p>
          </div>
          <a href="https://github.com/abaydar/tech_networking_client" className="item-folio__project-link" title="Project link">
            <i className="im im-link" />
          </a>
        </div> {/* end item-folio */}
      </div> {/* end masonry__brick */}
      <div className="masonry__brick">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href="images/toa-heftiba-ip9R11FMbV8-unsplash.jpg" className="thumb-link" title="Books" data-size="1050x700">
              <img src="images/toa-heftiba-ip9R11FMbV8-unsplash.jpg" srcSet="images/toa-heftiba-ip9R11FMbV8-unsplash.jpg 1x, images/toa-heftiba-ip9R11FMbV8-unsplash.jpg 2x" alt="" />
              <span className="shadow-overlay" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              Book Journey
            </h3>
            <p className="item-folio__cat">
              Javascript, Rails API
            </p>
          </div>
          <a href="https://github.com/abaydar/books_client" className="item-folio__project-link" title="Project link">
            <i className="im im-link" />
          </a>
        </div> {/* end item-folio */}
      </div> {/* end masonry__brick */}
      <div className="masonry__brick">
        <div className="item-folio">
          <div className="item-folio__thumb">
            <a href="images/cameron-venti-I1EWTM5mFEM-unsplash.jpg" className="thumb-link" data-size="1050x700">
              <img src="images/cameron-venti-I1EWTM5mFEM-unsplash.jpg" srcSet="images/cameron-venti-I1EWTM5mFEM-unsplash.jpg 1x, images/cameron-venti-I1EWTM5mFEM-unsplash.jpg 2x" alt="" />
              <span className="shadow-overlay" />
            </a>
          </div>
          <div className="item-folio__text">
            <h3 className="item-folio__title">
              Race Tracker
            </h3>
            <p className="item-folio__cat">
              Ruby on Rails
            </p>
          </div>
          <a href="https://github.com/abaydar/running_races_app" className="item-folio__project-link" title="Project link">
            <i className="im im-link" />
          </a>
        </div> {/* end item-folio */}
      </div> {/* end masonry__brick */}
    </div>
  </div> {/* end masonry */}
</section>

    )
}

export default Portfolio