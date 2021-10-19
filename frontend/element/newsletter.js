import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Newsletter() {
	const [email , setEmail] = useState()

	const sendMail = (e) => {
		e.preventDefault()
		fetch("https://isoi-backend.herokuapp.com/api/membership/sendmail", {
			method : "POST",
			headers : {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify({
				email
			})
		}).then(res => res.json()).then(data => {
			if(data.message){
				toast.success(data.message, {
					position: "top-center",
					autoClose: false,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme : 'colored'
				})
				setEmail("")
			}
		})
	}

    return (
      <>
        <section className="content-inner-3 bg-primary" style={{"backgroundImage":"url(images/background/bg13.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4 col-md-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-media m-b30">
							<img src="images/about/img9.png" className="move-2" alt=""/>
						</div>
					</div>
					<div className="col-lg-8 col-md-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 text-white">
							<h6 className="sub-title bgl-light m-b20">Newsletter</h6>
							<h2 className="title m-b15">Subscribe To Our Newsletter For Latest Update Of ISOI Eevents </h2>
							<p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.</p>
						</div>
						<div className="dlab-subscribe style-2 max-w500">
							<form className="dzSubscribe" action="script/mailchamp.php" method="post">
								<div className="dzSubscribeMsg"></div>
								<div className="form-group">
									<div className="input-group">
										<input name="dzEmail" value={email} onChange={(e) => setEmail(e.target.value)} required="required" type="email" className="form-control" placeholder="Email Address"/>
										<div className="input-group-addon">
											<button name="submit" value="Submit" onClick={sendMail} type="submit" className="btn rounded-xl shadow btn-primary">Subscribe Now</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</section>
      </>
    )
  }
  
  export default Newsletter;