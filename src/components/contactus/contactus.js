import React from 'react' 

function Contact (){
    return(
        <section id="contact" className="s-contact target-section">
  <div className="overlay" />
  <div className="row narrow section-intro">
    <div className="col-full">
      <h3>Contact</h3>
      <h1>Say Hello.</h1>
    </div>
  </div>
  <div className="row contact__main">
    
    <div className="tab-full contact__infos">
      <h4 className="h06">Phone</h4>
      <p>Phone: (908) 963 2281<br />
      </p>
      <h4 className="h06">Email</h4>
      <p>amandabaydar@gmail.com<br />
      </p>
      <h4 className="h06">Address</h4>
      <p>
        17 Division Street<br />
        Apt 301<br />
        Somerville, NJ<br />
        08876 US
      </p>
    </div>
  </div>
</section>

    )
}

export default Contact