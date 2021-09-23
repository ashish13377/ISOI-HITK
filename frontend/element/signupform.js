
import Link from 'next/link';
function onChange(value) {
	console.log("Captcha value:", value);
  }

function SignupForm() {
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
								<h2 className="title">We Love To Help Great Companies To Enlarge Their Revenues.</h2>
							</div>
							<form className="dlab-form dzForm" method="POST" action="script/contact.php">
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzName" type="text" required className="form-control" placeholder="Your Name" />
										</div>
									</div>
								
                                    <div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-phone"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Phone No." />
										</div>
									</div>
                                    <div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-envelope"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Email" />
										</div>
									</div>
                                    <div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-lock"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Username" />
										</div>
									</div>
                                    <div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-lock"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Password" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-lock"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Confirm Password" />
										</div>
									</div>
							
									<div className="col-sm-12 mt-2">
										<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Sign Up</button>
									</div>
									<div className="col-sm-12 mt-2">
										
									</div>
									<div className="col-sm-12 mt-2">
										<br/>
									 <p>If you already has an account, just <Link href="/login"><a>Login</a></Link>. We've missed you!</p>
									</div>
								</div>
							</form>
						</div>
						<div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
							<div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
								<img className="move-1" src="images/move/pic3.png" alt=""/>
								<img className="move-2" src="images/move/pic4.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SignupForm;