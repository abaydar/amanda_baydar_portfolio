import React from 'react'

function Blog(){
    return(
        <section id="blog" className="s-blog target-section">
  <div className="row narrow section-intro has-bottom-sep">
    <div className="col-full">
      <h3>Journal</h3>
      <h1>Latest From The Blog.</h1>
      <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute. 
        Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum 
        ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
    </div>
  </div>
  <div className="row blog-content">
    <div className="col-full">
      <div className="blog-list block-1-2 block-tab-full">
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">Sept 16, 2017</a>
          </div>  
          <h2 className="h01"><a href="blog-single.html">The 10 Golden Rules of Clean Simple Design.</a></h2>
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh..
          </p>
          <div className="blog-cat">
            <a href="blog.html">Branding</a><a href="blog.html">Design</a>
          </div>
        </article>
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">Sept 15, 2017</a>
          </div>  
          <h2 className="h01"><a href="blog-single.html">Photography Can Improve Your Graphic Design.</a></h2>
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh..
          </p>
          <div className="blog-cat">
            <a href="blog.html">Photography</a>
          </div>
        </article>
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">Sept 14, 2017</a>
          </div>
          <h2 className="h01"><a href="blog-single.html">Workspace Design Trends and Ideas.</a></h2>
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh dolore irure esse Duis nulla sint.
          </p>
          <div className="blog-cat">
            <a href="blog.html">Branding</a><a href="blog.html">Wordpress</a>
          </div>
        </article>
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">Sept 12, 2017</a>
          </div>    
          <h2 className="h01"><a href="blog-single.html">Using Patterns in your Branding.</a></h2>
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
          </p>
          <div className="blog-cat">
            <a href="blog.html">Design</a><a href="blog.html">Branding</a>
          </div>
        </article>
      </div> {/* end blog-list */}
    </div> {/* end col-full */}
  </div> {/* end blog-content */}
</section>

    )
}

export default Blog