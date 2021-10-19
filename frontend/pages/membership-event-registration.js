import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { useSelector , useDispatch } from "react-redux"
import { setUserDetails } from "../redux/actions/index"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast} from "react-toastify";

function EventRegistraion() {

	const dispatch = useDispatch();
	const data = useSelector(state => state.user);
	const [loading, setLoading] = useState(false)
	const [wpNumber, setwpNumber] = useState()
	const [fname, setfname] = useState();
	const [mname, setmname] = useState();
	const [lname, setlname] = useState();
	const [phone, setphone] = useState();
	const [department  , setdepartment] = useState()
	const { query } = useRouter()
	const [pevent, setEvent] = useState();
	const id = query.id;
	const router = useRouter();

	const joinEvent = (e) => {
		e.preventDefault();
		fetch(`https://isoi-backend.herokuapp.com/api/users/paid-events-registration/${id}` , {
			method : "PUT",
			headers : {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + JSON.parse(localStorage.getItem("jwt"))
			},
			body : JSON.stringify({
				fname , lname , mname , phone , wpNumber , department 
			})
		}).then(res => res.json())
		.then(data => {
			if(data.error){
				toast.error(data.message, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored'
				});
			}else{
				toast.success(data.message, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored'
				});
				setfname("")
				setlname("")
				setmname("")
				setphone("")
				setwpNumber("")
				setdepartment("")
			}
		})
	}


	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		dispatch(setUserDetails(user));
		if (!user) {
			router.push("/login");
		}
		setLoading(true)


		fetch(`https://isoi-backend.herokuapp.com/api/admin//paidevent/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json()).then(data => {
			setEvent(data)
			setLoading(false)
		})



	}, [])

	return (
		<>
			<Head>
				<title>ISOI-HITK | Event Registraion</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
			</Head>
			<Header />
			<div className="page-content bg-white">
				<br />
				<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg1.png)", "backgroundSize": "contain" }}>
					<div className="container">

						{loading ? (<div style={{
							marginLeft: "3rem"
						}}>
							<ReactLoading type="bars" color="#896eff" height={'20%'} width={'20%'} />
						</div>) : (<div className="section-head style-1 text-center">
							<h6 className="sub-title bgl-primary m-b20 text-primary"> Event Registration Form</h6>
							<h2 className="title">{pevent && pevent.eventName} Event  Registration Form</h2>
							<p>Fill out the form carefully for registration</p>
						</div>)}

						<div className=" clr col-md-offset-4 m-b30  fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<form className="dlab-form dzForm" method="POST" action="script/contact.php">
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />

								{/* <!-- Student Name --> */}
								<h5>Student Name</h5>
								<div className="row">
									<div className="col-sm-4">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzName" value={fname} onChange={(e) => setfname(e.target.value)} type="text" required className="form-control" placeholder="First Name" />
										</div>
									</div>
									<div className="col-sm-4">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="las la-user-cog"></i></span>
											</div>
											<input name="dzName" value={mname} onChange={(e) => setmname(e.target.value)} type="text" required className="form-control" placeholder="Middle Name" />
										</div>
									</div>
									<div className="col-sm-4">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="las la-user-cog"></i></span>
											</div>
											<input name="dzOther[last_name]" value={lname} onChange={(e) => setlname(e.target.value)} type="text" className="form-control" required placeholder="Last Name" />
										</div>
									</div>
								</div>
								{/* <!-- End Student Name --> */}


								{/* <!-- Email and Phone --> */}
								<div className="row">
									<div className="col-sm-6">
										<h5>Email</h5>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="las la-envelope-open-text"></i></span>
											</div>
											<input name="dzName" type="text" required value={data && data.email} className="form-control" placeholder="ex: xyz@gmail.com" />
										</div>
									</div>

									<div className="col-sm-6">
										<h5>Phone No.</h5>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="las la-phone"></i></span>
											</div>
											<input value={phone} onChange={(e) => setphone(e.target.value)} name="dzOther[last_name]" type="text" className="form-control" required placeholder="(+91) 000-000-0000" />
										</div>
									</div>
								</div>
								{/* <!-- End Email and Phone --> */}

								{/* <!-- whatsapp and Years --> */}
								<div className="row">
									<div className="col-sm-6">
										<h5>WhatsApp Number </h5>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-whatsapp"></i></span>
											</div>
											<input value={wpNumber} onChange={(e) => setwpNumber(e.target.value)} name="dzName" type="text" required className="form-control" placeholder="(+91) 000-000-0000" />
										</div>
									</div>
									<div className="col-sm-6">
										<h5>Department</h5>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-codepen"></i></span>
											</div>
											<input value={department} onChange={(e) => setdepartment(e.target.value)} name="dzName" type="text" required className="form-control" placeholder=" Applied Electronics & Instrumentation " />
										</div>
									</div>
								</div>
								{/* <!-- End whatsapp and Department --> */}


								<div className="col-sm-12 mt-2">
									<button onClick={joinEvent} name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Event Now</button>
								</div>

							</form>
						</div>
					</div>
					<ToastContainer />
				</section>

				<Footer />
			</div>
		</>
	)
}

export default EventRegistraion;