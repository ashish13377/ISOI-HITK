import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/img4.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                              <h2 className="title">ISOI Student Chapter in A Nutshell</h2>
                          </div>
                          <p>Established in the year ___ , the student chapter of ISOI has focused on providing a platform for  the tech enthusiasts in the dept of electronic and instrumentation engineering To showcase their skills in an industrial environment under the guidance of experts.</p>
                          <p className="m-b30">Students get to participate in several events Which go on throughout the year and improve their understanding in the subject and thus help in the development of the instrumentation systems.</p>
                         <Link href="about-us"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link> 
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;