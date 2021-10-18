import Header from "../layout/header-3";
import Footer from '../layout/footer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector , useDispatch} from "react-redux"
import { setUserDetails } from "../redux/actions/index"

function BlogLargeRightSidebar() {
	const router = useRouter()
	const dispatch = useDispatch()
	const { query } = useRouter()
	const [fevent, setEvent] = useState();
	const data = useSelector(state => state.user);
	const id = query.id;


	useEffect(() => {
		
		document.title = "ISOI | Membership Details";
		const user = JSON.parse(localStorage.getItem("user"));
		dispatch(setUserDetails(user));
		if (!user) {
			router.push("/login");
		}
	}, [])

	useEffect(() => {

		

		fetch(`https://isoi-backend.herokuapp.com/api/admin//paidevent/${id}`, {
			method : "GET",
			headers : {
				"Content-Type" : "application/json"
			}
		}).then(res => res.json()).then(data => {
			setEvent(data)
		})

		
		
	}, [])


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
									<li className="breadcrumb-item active" aria-current="page">Talk on the Topic, "{fevent && fevent.eventName}".</li>
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
										<img src="https://isoi-backend.herokuapp.com/uploads/poster/ISOI-Poster-1633931782725.png" />
									</div>
									<div className="dlab-info">
										<h3 className="dlab-title">
											{fevent && fevent.eventName}
											
										</h3>
										<p className="m-b0">{fevent && fevent.eventDescription}</p>
									</div>

								</div>
							</div>
							<div className="col-xl-5 col-lg-4 m-b30">
								<aside className="side-bar ">
									<div className="widget widget_archive">
										<h2 className="widget-title">Event Detail</h2>
										<ul>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-ui-calendar"></i>Date: {fevent && fevent.eventDate} </a></li>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-clock-time"></i>Time: From {fevent && fevent.eventTime}</a></li>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-map-pins"></i>Venue: {fevent && fevent.venue} </a></li>
										</ul>
									</div>
									<div className="widget widget_archive">
										<h2 className="widget-title">Contact</h2>
										<ul>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-ui-user"></i> Name: {fevent && fevent.contactName} </a></li>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-email"></i>Email: {fevent && fevent.contactEmail}</a></li>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-phone"></i>Phone: {fevent && fevent.contactPhone} </a></li>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-certificate-alt-2"></i>Designation: {fevent && fevent.contactDesignation}</a></li>
										</ul>
									</div>
									<div className="widget widget_archive">
										<h2 className="widget-title">Social Share</h2>
										<ul>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-facebook"></i> Facebook </a></li>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-instagram"></i>Instagram </a></li>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-linkedin"></i>Linkedin </a></li>
											<li><a href="javascript:void(0);"><i style={{ paddingRight: "10px" }} class="icofont-whatsapp"></i>WhatsApp</a></li>
										</ul>
									</div>

									<div className="widget widget_archive">
										<div className="col-sm-12 mt-2">
											<button type="button" onClick={() => router.push('/about-us')} className="btn btn-link d-inline-flex align-items-center" ><i className="fa fa-angle-right m-r10"></i>Register Event Now</button>
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