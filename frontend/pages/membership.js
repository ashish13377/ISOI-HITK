import { useState } from "react";
import Footer from '../layout/footer';
import Header from '../layout/header-3';
import Link from 'next/link';
import Head from "next/head";
import { useEffect } from "react";
import { setUserDetails, setPaidEvents , setProducts } from "../redux/actions/index"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import Pricing from "../element/pricing";
function PricingTable1() {
	const [open, setOpen] = useState("p2")
	const data = useSelector(state => state.user);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		dispatch(setProducts())
		dispatch(setUserDetails(user));
		if (!user) {
			router.push("/login");
		}
	}, [])
	return (
		<>
			<Head>
				<title> ISOI-HITK | Membership </title>
			</Head>
			<Header />
			<div className="page-content bg-white">
				{/* <!-- Banner  --> */}
				<div className="dlab-bnr-inr overlay-primary-dark" style={{ "backgroundImage": "url(images/banner/bnr1.jpg)" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>Membership </h1>
							{/* <!-- Breadcrumb Row --> */}
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
									<li className="breadcrumb-item active" aria-current="page">Membership</li>
								</ul>
							</nav>
							{/* <!-- Breadcrumb Row End --> */}
						</div>
					</div>
				</div>
				{/* <!-- Banner End --> */}

				{/* <!-- Pricing Table --> */}
				<Pricing />

				{/* <!-- Call to Action --> */}
				<section style={{ "backgroundImage": "url(images/background/bg5.jpg)", "backgroundSize": "cover" }}>
					<div className="container">
						<div className="row action-box style-1 align-items-center">
							<div className="col-xl-7 col-lg-8 col-md-8">
								<div className="section-head style-1">
								<h6 className="sub-title bgl-primary m-b20 text-primary">Come Join Us</h6>
									<h2 className="title">Enroll now and get your membership Join With Us</h2>
								</div>
							</div>
							<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30">
								<a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
							</div>
						</div>
					</div>
				</section>

			</div>
			<Footer />
		</>
	)
}

export default PricingTable1;