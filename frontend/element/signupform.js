import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SignupForm() {

	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [cfpassword, setCfpassword] = useState();
	const [phone, setPhone] = useState();
	const [username, setUsername] = useState();
	const [picture, setPicture] = useState()
	const router = useRouter();
	const imageUpload = (e) => {
		console.log(e.target.files[0]);
		setPicture(e.target.files[0]);
	}

	const sendData = async (e) => {
		e.preventDefault();
		console.log(picture + "=" + picture.name);
		const formdata = new FormData();
		formdata.append("myFile", picture, picture.name);
		formdata.append("name", name)
		formdata.append("email", email)
		formdata.append("password", password)
		formdata.append("cfpassword", cfpassword)
		formdata.append("phone", phone)
		formdata.append("username", username)

		console.log(formdata);

		try {
			const res = await axios.post("https://isoi-backend.herokuapp.com/api/users/register", formdata);

			if (res.status == 201) {
				setName("")
				setEmail("")
				setCfpassword("")
				setPhone("")
				setUsername("");
				setPassword("")
				router.push("/login");
			}
			
		} catch (error) {
            toast.error("Something went wrong!");
		}


}


return (
	<>
		<section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
			<br />
			<br />
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Sign Up</h6>
							<h2 className="title">Create an account to get the most out of this site</h2>
						</div>
						<form className="dlab-form dzForm" method="POST" onSubmit={sendData}>
							<div className="dzFormMsg"></div>
							<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
							<div className="row">
								<div className="col-sm-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-user"></i></span>
										</div>
										<input name="dzName" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" placeholder="Your Name" />
									</div>
								</div>

								<div className="col-sm-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-phone"></i></span>
										</div>
										<input name="dzOther[phone]" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" required className="form-control" placeholder="Phone No." />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-envelope"></i></span>
										</div>
										<input name="dzOther[phone]" value={email} onChange={(e) => setEmail(e.target.value)} type="text" required className="form-control" placeholder="Email" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-user"></i></span>
										</div>
										<input name="dzOther[phone]" value={username} onChange={(e) => setUsername(e.target.value)} type="text" required className="form-control" placeholder="Username" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-lock"></i></span>
										</div>
										<input name="dzOther[phone]" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="form-control" placeholder="Password" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-lock"></i></span>
										</div>
										<input name="dzOther[phone]" value={cfpassword} onChange={(e) => setCfpassword(e.target.value)} type="password" required className="form-control" placeholder="Confirm Password" />
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
				
										<input name="dzOther[phone]" type="file" onChange={imageUpload} required className="form-control"/>
									</div>
								</div>

								<div className="col-sm-12 mt-2">
									<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Sign Up</button>
								</div>
								<div className="col-sm-12 mt-2">

								</div>
								<div className="col-sm-12 mt-2">
									<br />
									<p>If you already has an account, just <Link href="/login"><a>Login</a></Link>. We've missed you!</p>
								</div>
							</div>
						</form>
					</div>
					<div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
							<img className="move-1" src="images/move/pic3.png" alt="" />
							<img className="move-2" src="images/move/pic4.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</section>
	</>
)
}

export default SignupForm;