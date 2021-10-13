import Link from 'next/link';
import { useState } from 'react';
import { useSelector , useDispatch } from "react-redux"
import { logout, setUserDetails } from "../redux/actions/index"
function Header() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    const data = useSelector(state => state.user);
    


    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent text-black mo-left" id="fix-header">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/"><a><img src="images/logo.png" alt=""/></a></Link>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        {!data && (<div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="/login"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-user m-r10"></i>Login</a></Link>
                            </div>
                        </div>)}
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/logo.png" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><Link href="/about-us"><a>About Us</a></Link></li>
                                {data && <li><Link href="/membership"><a>Membership</a></Link></li>}
                                <li><Link href="/faculty"><a>Faculty</a></Link></li>
                                {data && <li><Link href="/events"><a>Events</a></Link></li>}
								<li><Link href="/contact-us"><a>Contact Us</a></Link></li>
                                {data && <li><Link href="/profile-page"><a><i className="fa fa-user" style={{
                                    fontSize : "20px"
                                }}></i> &nbsp; {data && data.username}</a></Link></li>}
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                <li><a className="fa fa-facebook" href="https://www.facebook.com/ISOIHITK/" target="_blank"></a></li>
								<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/applied-electronics-instrumentation-engineering-hit-k/" target="_blank"></a></li>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header;

  