import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from "next/head";

function EventRegistraion() {
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
					<div className="section-head style-1 text-center">
						<h6 className="sub-title bgl-primary m-b20 text-primary"> Event Registration Form</h6>
						<h2 className="title">ISOI Membership Event  Registration Form</h2>
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
										<input name="dzName" type="text" required className="form-control" placeholder="First Name" />
									</div>
								</div>
								<div className="col-sm-4">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="las la-user-cog"></i></span>
										</div>
										<input name="dzName" type="text" required className="form-control" placeholder="Middle Name" />
									</div>
								</div>
								<div className="col-sm-4">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="las la-user-cog"></i></span>
										</div>
										<input name="dzOther[last_name]" type="text" className="form-control" required placeholder="Last Name" />
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
										<input name="dzName" type="text" required className="form-control" placeholder="ex: xyz@gmail.com" />
									</div>
								</div>

								<div className="col-sm-6">
									<h5>Phone No.</h5>
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="las la-phone"></i></span>
										</div>
										<input name="dzOther[last_name]" type="text" className="form-control" required placeholder="(+91) 000-000-0000" />
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
										<input name="dzName" type="text" required className="form-control" placeholder="(+91) 000-000-0000" />
									</div>
								</div>
                                <div className="col-sm-6">
									<h5>Department</h5>
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-codepen"></i></span>
										</div>
										<input name="dzName" type="text" required className="form-control" placeholder=" Applied Electronics & Instrumentation " />
									</div>
								</div>
                            </div>
							{/* <!-- End whatsapp and Department --> */}

							
							<div className="col-sm-12 mt-2">
								<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Event Now</button>
							</div>

						</form>
					</div>
				</div>
			</section>

			<Footer />
			</div>
		</>
	)
}

export default EventRegistraion;