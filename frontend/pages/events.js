import Footer from "../layout/footer";
import Header from "../layout/header-3";
import Events from "../element/events";
import Link from 'next/link';
import Head from "next/head";
import Cta from "../element/cta";
import { useEffect } from "react";
import { setUserDetails, setPaidEvents , getMemberDetails } from "../redux/actions/index"
import { useDispatch , useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { route } from "next/dist/next-server/server/router";

function Event() {
	const data = useSelector(state => state.user);
	const dispatch = useDispatch();

	const router = useRouter();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		dispatch(setUserDetails(user));
		dispatch(setPaidEvents());
		dispatch(getMemberDetails())
		if (!user) {
			router.push("/login");
		}

		
	}, [])
	return (
		<>
			<Head>
				<title>ISOI-HITK | Event</title>
			</Head>
			<Header />
			<div className="page-content bg-white">
				{/* <!-- Banner  --> */}
				<div className="dlab-bnr-inr overlay-primary-dark" style={{ "backgroundImage": "url(images/banner/bnr1.jpg)" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>Event</h1>
							{/* <!-- Breadcrumb Row --> */}
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
									<li className="breadcrumb-item active" aria-current="page">Event</li>
								</ul>
							</nav>
							{/* <!-- Breadcrumb Row End --> */}
						</div>
					</div>
				</div>
				<Events />

				<Footer />
			</div>
		</>
	)
}

export default Event;