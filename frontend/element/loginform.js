import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { setUserDetails } from "../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function onChange(value) {
	console.log("Captcha value:", value);
}

function LoginForm() {
	const data = useSelector(state => state.user);
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {

		if (data) {
			router.push("/profile-page")
		}

	}, [])

	const loginUser = (e) => {
		e.preventDefault();


		fetch("https://isoi-backend.herokuapp.com/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username, password
			})
		}).then(res => res.json())
			.then(data => {
				if (data.error) {
					toast.error(data.error, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme : 'colored'
					})
				} else {
					localStorage.setItem("jwt", JSON.stringify(data.token));
					localStorage.setItem("user", JSON.stringify(data.userLogin));
					dispatch(setUserDetails(data.userLogin))
					router.push("/profile-page");
				}
			}).catch(err => {
				console.log(err);
			})


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
								<h6 className="sub-title bgl-primary m-b20 text-primary">Login</h6>
								<h2 className="title">We Love To Help Great Companies To Enlarge Their Revenues.</h2>
							</div>
							<form className="dlab-form dzForm" method="POST" onSubmit={loginUser}>
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzName" type="text" required className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
										</div>
									</div>

									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-lock"></i></span>
											</div>
											<input name="dzOther[phone]" type="password" required className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
										</div>
									</div>

									<div className="col-sm-12 mt-2">
										<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Login Now</button>
									</div>
									<div className="col-sm-12 mt-2">

									</div>
									<div className="col-sm-12 mt-2">
										<br />
										<p><Link href="/signup"><a> Sign-up </a></Link>and discover great amount of new opportunities!</p>
									</div>
								</div>
							</form>
						</div>
						<div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
							<div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
								<img className="move-1" src="images/move/pic5.png" alt="" />
								<img className="move-2" src="images/move/pic6.png" alt="" />
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</section>
		</>
	)
}

export default LoginForm;