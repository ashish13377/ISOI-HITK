import { useState } from "react";
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegistraionFrom() {


	const user = useSelector(state => state.user)
	const router = useRouter()



	const [wpNumber, setwpNumber] = useState()
	const [birthData, setbirthData] = useState()
	const [gender, setgender] = useState()
	const [years, setyears] = useState()
	const [address, setaddress] = useState()
	const [city, setcity] = useState()
	const [state, setstate] = useState()
	const [postalCode, setpostalCode] = useState()
	const [autonomyRoll, setautonomyRoll] = useState()
	const [collegeRoll, setcollegeRoll] = useState()
	const [attendAnyEvent, setattendAnyEvent] = useState()
	const [feedback, setfeedback] = useState()
	const [image, setimage] = useState()
	const [fName, setfname] = useState();
	const [mName, setmname] = useState();
	const [lName, setlname] = useState();
	const [phone, setphone] = useState();

	const submitApplication = (e) => {
		e.preventDefault()
		fetch("https://isoi-backend.herokuapp.com/api/membership/addmembers", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + JSON.parse(localStorage.getItem("jwt"))
			},
			body: JSON.stringify({
				fName, mName, lName, birthData, gender, email: user.email, phone, wpNumber, years, address, city, state, postalCode, autonomyRoll, collegeRoll, attendAnyEvent, feedback, image
			})
		}).then(res => res.json())
			.then(data => {
				if (data.error) {
					toast.info(data.error, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored'
					})
				} else {
					alert(data.message);
					router.push("/profile-page");
				}
			})
	}

	const imageUpload = (pic) => {
		console.log(pic);
		const filename = pic.name
		const ext = filename.split('.').pop();
		if (ext === 'jpg' || ext === 'png' || ext === 'jpeg') {
			const data = new FormData();
			data.append("file", pic);
			data.append("upload_preset", "ISOI-HITK");
			data.append("cloud_name", "amritrajmaurya");
			fetch("https://api.cloudinary.com/v1_1/amritrajmaurya/image/upload", {
				method: "post",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					setimage(data.url.toString());
					console.log(data.url);
				})
				.catch((err) => {
					toast.error(err, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored'
					});
				});
		} else {
			toast.info("Please select a valid image [Either JPEG or PNG]", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored'
			})
			setimage("https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png");
		}
	}


	return (
		<>
			{/* <!-- Blog Large --> */}
			<br />
			<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg1.png)", "backgroundSize": "contain" }}>
				<div className="container">
					<div className="section-head style-1 text-center">
						<h6 className="sub-title bgl-primary m-b20 text-primary">Registration Form</h6>
						<h2 className="title">ISOI Student Registration Form</h2>
						<p>Fill out the form carefully for registration</p>
					</div>
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
										<input name="dzName" type="text" required value={fName} onChange={(e) => setfname(e.target.value)} className="form-control" placeholder="First Name" />
									</div>
								</div>
								<div className="col-sm-4">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="las la-user-cog"></i></span>
										</div>
										<input name="dzName" type="text" required value={mName} onChange={(e) => setmname(e.target.value)} className="form-control" placeholder="Middle Name" />
									</div>
								</div>
								<div className="col-sm-4">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="las la-user-cog"></i></span>
										</div>
										<input name="dzOther[last_name]" type="text" className="form-control" required value={lName} onChange={(e) => setlname(e.target.value)} placeholder="Last Name" />
									</div>
								</div>
							</div>
							{/* <!-- End Student Name --> */}

							{/* <!-- Birth and gender --> */}
							<div className="row">
								<div className="col-sm-6">
									<h5>Birth Date</h5>
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="las la-calendar-day"></i></span>
										</div>
										<input value={birthData} onChange={(e) => setbirthData(e.target.value)} name="dzName" type="date" required className="form-control" placeholder="First Name" />
									</div>
								</div>
								<div className="col-sm-6">
									<h5>Gender</h5>
									<div className="input-group">
										<select value={gender} onChange={(e) => setgender(e.target.value)} style={{ appearance: 'none' }} name="dzOther[last_name]" className="form-control">
											<option>Please select</option>
											<option>Male</option>
											<option>Female</option>
											<option>Other</option>
										</select>
									</div>
								</div>
							</div>
							{/* <!-- End Birth and gender --> */}

							{/* <!-- Email and Phone --> */}
							<div className="row">
								<div className="col-sm-6">
									<h5>Email</h5>
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="las la-envelope-open-text"></i></span>
										</div>
										<input name="dzName" value={user && user.email} type="text" required className="form-control" placeholder="ex: xyz@gmail.com" />
									</div>
									<small>Note : Email same as during signup & payment for ISOI Membership</small>
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
										<input name="dzName" type="text" required value={wpNumber} onChange={(e) => setwpNumber(e.target.value)} className="form-control" placeholder="(+91) 000-000-0000" />
									</div>
								</div>
								<div className="col-sm-6">
									<h5>Years</h5>
									<div className="input-group">

										<select value={years} onChange={(e) => setyears(e.target.value)} style={{ appearance: 'none', padding: '10px 20px 10px 20px' }} name="dzOther[last_name]" className="form-control">
											<option>Please select</option>
											<option>1st Year</option>
											<option>2nd Year</option>
											<option>3rd Year</option>
											<option>4rd Year</option>
											<option>M. Tech</option>
										</select>
									</div>
								</div>
							</div>
							{/* <!-- End whatsapp and Years --> */}

							{/* <!-- Duration --> */}
							{/* <div className="row row2">
								<div className="col-sm-6">
									<h5>Duration</h5>
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-history"></i></span>
										</div>
										<select style={{ appearance: 'none' }} name="dzOther[last_name]" className="form-control">
											<option>Please select</option>
											<option>4 Year</option>
										</select>

									</div>
									<p>Registration Fees: Rs.400/- for 4 years</p>
								</div>
							</div> */}
							{/* <!-- End Duration --> */}

							{/* <!-- Address Row --> */}
							<div className="row">
								<div className="col-sm-12">
									<h5>Address</h5>
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required value={address} onChange={(e) => setaddress(e.target.value)} className="form-control" placeholder="Address Line" />
									</div>
								</div>

								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required value={city} onChange={(e) => setcity(e.target.value)} className="form-control" placeholder="City" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required value={state} onChange={(e) => setstate(e.target.value)} className="form-control" placeholder="State / Province" />
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required value={postalCode} onChange={(e) => setpostalCode(e.target.value)} className="form-control" placeholder="Postal / Zip Code" />
									</div>
								</div>
							</div>
							{/* <!-- End Address Row --> */}

							{/* <!-- Roll Number --> */}
							<div className="row">
								<div className="col-sm-5">
									<div className="input-group">
										<div className="input-option-dropdown">
											<p> Autonomy Roll Number </p>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required value={autonomyRoll} onChange={(e) => setautonomyRoll(e.target.value)} className="form-control" placeholder="ex: 18530XX" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-5">
									<div className="input-group">
										<div className="input-option-dropdown">
											<p> College Roll Number </p>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required value={collegeRoll} onChange={(e) => setcollegeRoll(e.target.value)} className="form-control" placeholder="ex: 18530XX" />
									</div>
								</div>
							</div>
							{/* <!-- end Roll Number --> */}

							{/* <!-- events attend --> */}
							<div className="row">
								<div className="col-sm-5">
									<div className="input-group">
										<div className="input-option-dropdown">
											<p> Did you attend any of the events of ISOI?</p>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="input-group">

										<select value={attendAnyEvent} onChange={(e) => setattendAnyEvent(e.target.value)} style={{ appearance: 'none', padding: '10px 20px 10px 20px' }} name="dzOther[last_name]" className="form-control">
											<option>Please select</option>
											<option>Yes</option>
											<option>No</option>
										</select>
									</div>
								</div>
							</div>
							{/* <!-- end events attend --> */}

							{/* <!-- Feedback/Suggestions --> */}
							<div className="row">
								<div className="col-sm-5">
									<div className="input-group">
										<div className="input-option-dropdown">
											<p> Feedback/Suggestions about the events you expect/witnessed from ISOI</p>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="input-group">
										<textarea name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required value={feedback} onChange={(e) => setfeedback(e.target.value)} className="form-control" placeholder="I'm a Python & IoT geek. I would like to participate more in events/webinars/seminars/workshops related to this particular field."></textarea>
									</div>
								</div>
							</div>
							{/* <!-- end Feedback/Suggestions --> */}

							{/* <!-- Image Upload --> */}
							<div className="row">
								<div className="col-sm-5">
									<div className="input-group">
										<div className="input-option-dropdown">
											<p> Image </p>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									{/* Upload Area */}
									{/* Drop Zoon */}
									<div>
										<input type="file" id="file" onChange={(e) => imageUpload(e.target.files[0])} />
									</div>


									{/* End Upload Area */}
									<p className="mt-4">Upload a recent Passport Size Photograph</p>
									<p className="mt-4"><small className="font-italic">Note : </small>File should be either JPEG or PNG format.</p>
								</div>
							</div>
							{/* <!-- end Image Upload --> */}


							<div className="col-sm-12 mt-2">
								<button name="submit" onClick={submitApplication} type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Submit Application</button>
							</div>

						</form>
					</div>
				</div>
				<ToastContainer />
			</section>

		</>
	)
}

export default RegistraionFrom;