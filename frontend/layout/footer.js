import Link from 'next/link';

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/bg10.png)"}}>
		<div className="footer-top">
            <div className="container">
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-6 col-md-4">
							<div className="footer-logo">
								<a href="/"><img src="../../images/logo-white.png" alt=""/></a> 
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-email"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>+91 987-654-3210<br/>info@example.com</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-location"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>Anandapur, East Kolkata, West Bengal, 700107</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h5 className="footer-title">About Us</h5>
							<p>We are a youth organization, which links the young and aspiring instrumentation engineers with the industry and experts of the field via several programs that are conducted periodically.</p>
							<div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://www.facebook.com/ISOIHITK/" target="_blank"></a></li>
									<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/applied-electronics-instrumentation-engineering-hit-k/" target="_blank"></a></li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
						<h5 className="footer-title">Our links</h5>
							<ul>
								<li><Link href="/">Home</Link></li>
								<li><Link href="/about-us">About Us</Link></li>
								<li><Link href="/faculty">Faculty</Link></li>
								
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Other links</h5>
						   <ul>
								<li><Link href="/privacy-policy">Privacy Policy</Link></li>
								<li><Link href="/terms-conditions">Terms & Conditions</Link></li>
								<li><Link href="/refund-cancellation">Refunds & Cancellation</Link></li>
								<li><Link href="/contact-us">Support </Link></li>
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2021 <a href="/" target="_blank">ISOI-Heritage Institute of Technology</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;