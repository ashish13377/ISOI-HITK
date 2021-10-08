import Header from "../layout/header-3";
import Footer from '../layout/footer';
import Link from 'next/link';
import { useRouter } from 'next/router';


function BlogLargeRightSidebar() {
	const router = useRouter()
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				{/* <!-- Banner  --> */}
				<div className="dlab-bnr-inr overlay-primary-dark" style={{ "backgroundImage": "url(images/banner/bnr1.jpg)" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>ISOI Event</h1>
							{/* <!-- Breadcrumb Row --> */}
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
									<li className="breadcrumb-item" aria-current="page">Event</li>
									<li className="breadcrumb-item active" aria-current="page">Talk on the Topic, "Application of Sensing Technology".</li>
								</ul>
							</nav>
							{/* <!-- Breadcrumb Row End --> */}
						</div>
					</div>
				</div>
				{/* <!-- Banner End --> */}

				{/* <!-- Blog Large --> */}
				<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
					<div className="container">
						<div className="row">
							<div className="col-xl-7 col-lg-8 m-b50">
								<div className="dlab-blog style-1 bg-white text-center m-b50">
									<div className="dlab-media ">
										<img src="images/blog/default/thum1.jpg" />
									</div>
									<div className="dlab-info">
										<h3 className="dlab-title">
											1st Webinar of the series on the topic.<br />
											"Application of Sensing Technology"
										</h3>
										<p className="m-b0">ISOI-student Chapter, HITK & the Department of AEIE presents, Industry Academia Interaction series in association with #TCS innovation lab, Kolkata. We are starting the series with a talk on the Topic, "Application of Sensing Technology".
											We proudly welcome Dr. Arpan Pal, Distinguished Scientist and a resource speaker from TCS Research and Innovation for this session.
											registernow to earn a certificate from a prestigious organization, Get an idea of Internship and career  #opportunities at TCS Research and Innovation.</p>
									</div>

								</div>
							</div>
							<div className="col-xl-5 col-lg-4 m-b30">
								<aside className="side-bar ">
									<div className="widget widget_archive">
										<h2 className="widget-title">Event Detail</h2>
										<ul>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-ui-calendar"></i>Date: 09/04/2021 </a></li>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-clock-time"></i>Time: From 7:00 pm</a></li>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-map-pins"></i>Venue: </a></li>
										</ul>
									</div>
									<div className="widget widget_archive">
										<h2 className="widget-title">Contact</h2>
										<ul>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-ui-user"></i> Name: Prof (Dr) Madhurima Chattopadhyay </a></li>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-email"></i>Email: madhurima.chattopadhyay@heritageit.edu</a></li>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-phone"></i>Phone: </a></li>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-certificate-alt-2"></i>Designation: Professor (HOD)</a></li>
										</ul>
									</div>
									<div className="widget widget_archive">
										<h2 className="widget-title">Social Share</h2>
										<ul>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-facebook"></i> Facebook </a></li>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-instagram"></i>Instagram </a></li>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-linkedin"></i>Linkedin </a></li>
											<li><a href="javascript:void(0);"><i style={{paddingRight: "10px"}} class="icofont-whatsapp"></i>WhatsApp</a></li>
										</ul>
									</div>

									<div className="widget widget_archive">
										<div className="col-sm-12 mt-2">
											<button type="button"  onClick={() => router.push('/about-us')} className="btn btn-link d-inline-flex align-items-center" ><i className="fa fa-angle-right m-r10"></i>Register Event Now</button>
										</div>
									</div>
									{/* <div className="widget widget_archive">
										<h2 className="widget-title">Archives</h2>
										<ul>
											<li><a href="javascript:void(0);">January<span>05</span></a></li>
											<li><a href="javascript:void(0);">Fabruary<span>25</span></a></li>
											<li><a href="javascript:void(0);">March<span>20</span></a></li>
											<li><a href="javascript:void(0);">April<span>08</span></a></li>
											<li><a href="javascript:void(0);">May<span>22</span></a></li>
											<li><a href="javascript:void(0);">Jun<span>11</span></a></li>
											<li><a href="javascript:void(0);">July<span>19</span></a></li>
										</ul>
									</div>
									<div className="widget widget_tag_cloud">
										<h2 className="widget-title">Tags</h2>
										<div className="tagcloud">
											<a href="javascript:void(0);">Business</a>
											<a href="javascript:void(0);">News</a>
											<a href="javascript:void(0);">Brand</a>
											<a href="javascript:void(0);">Website</a>
											<a href="javascript:void(0);">Internal</a>
											<a href="javascript:void(0);">Strategy</a>
											<a href="javascript:void(0);">Brand</a>
											<a href="javascript:void(0);">Mission</a>
										</div>
									</div> */}
								</aside>
							</div>
						</div>
					</div>
				</section>


			</div>
			<Footer />
		</>
	)
}

export default BlogLargeRightSidebar;