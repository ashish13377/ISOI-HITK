

function RegistraionFrom() {
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

							{/* <!-- Birth and gender --> */}
							<div className="row">
								<div className="col-sm-6">
									<h5>Birth Date</h5>
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="las la-calendar-day"></i></span>
										</div>
										<input name="dzName" type="date" required className="form-control" placeholder="First Name" />
									</div>
								</div>
								<div className="col-sm-6">
									<h5>Gender</h5>
									<div className="input-group">
										<select style={{ appearance: 'none' }} name="dzOther[last_name]" className="form-control">
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
									<h5>Years</h5>
									<div className="input-group">
									
										<select style={{ appearance: 'none', padding: '10px 20px 10px 20px' }} name="dzOther[last_name]" className="form-control">
											<option>Please select</option>
											<option>1st Years</option>
											<option>2nd Years</option>
											<option>3rd Years</option>
											<option>4rd Years</option>
											<option>M. Tech</option>
										</select>
									</div>
								</div>
							</div>
							{/* <!-- End whatsapp and Years --> */}

							{/* <!-- Duration --> */}
							<div className="row row2">
								<div className="col-sm-6">
									<h5>Duration</h5>
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="la la-history"></i></span>
										</div>
										<select style={{ appearance: 'none' }} name="dzOther[last_name]" className="form-control">
											<option>Please select</option>
											<option>4 Years</option>
										</select>

									</div>
									<p>Registration Fees: Rs.400/- for 4 years</p>
								</div>
							</div>
							{/* <!-- End Duration --> */}

							{/* <!-- Address Row --> */}
							<div className="row">
								<div className="col-sm-12">
									<h5>Address</h5>
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required className="form-control" placeholder="Area" />
									</div>
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required className="form-control" placeholder="Address Line 2" />
									</div>
								</div>

								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required className="form-control" placeholder="City" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required className="form-control" placeholder="State / Province" />
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required className="form-control" placeholder="Postal / Zip Code" />
									</div>
								</div>
							</div>
							{/* <!-- End Address Row --> */}

							{/* <!-- Roll Number --> */}
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
										<input name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required className="form-control" placeholder="ex: 18530XX" />
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

										<select style={{ appearance: 'none', padding: '10px 20px 10px 20px' }} name="dzOther[last_name]" className="form-control">
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
										<textarea name="dzName" type="text" style={{ padding: '10px 20px 10px 20px' }} required className="form-control" placeholder="I'm a Python & IoT geek. I would like to participate more in events/webinars/seminars/workshops related to this particular field."></textarea>
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
									<div id="uploadArea" className="upload-area">
										{/* Drop Zoon */}
										<div id="dropZoon" className="upload-area__drop-zoon drop-zoon">
											<span className="drop-zoon__icon">
												<i className="bx bxs-file-image" />
											</span>
											<p className="drop-zoon__paragraph">Drop your file here or Click to browse</p>
											<span id="loadingText" className="drop-zoon__loading-text">Please Wait</span>
											<img src alt="Preview Image" id="previewImage" className="drop-zoon__preview-image" draggable="false" />
											<input type="file" id="fileInput" className="drop-zoon__file-input" accept="image/*" />
											
										</div>
										
										{/* End Drop Zoon */}
										{/* File Details */}
										<div id="fileDetails" className="upload-area__file-details file-details">
											<h3 className="file-details__title">Uploaded File</h3>
											<div id="uploadedFile" className="uploaded-file">
												<div className="uploaded-file__icon-container">
													<i className="bx bxs-file-blank uploaded-file__icon" />
													<span className="uploaded-file__icon-text" /> {/* Data Will be Comes From Js */}
												</div>
												<div id="uploadedFileInfo" className="uploaded-file__info">
													<span className="uploaded-file__name">Proejct 1</span>
													<span className="uploaded-file__counter">0%</span>
												</div>
											</div>
										</div>
										{/* End File Details */}
									
									</div>
									{/* End Upload Area */}
										<p>Upload a recent Passport Size Photograph</p>
								</div>
							</div>
							{/* <!-- end Image Upload --> */}


							<div className="col-sm-12 mt-2">
								<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Submit Application</button>
							</div>

						</form>
					</div>
				</div>
			</section>

		</>
	)
}

export default RegistraionFrom;