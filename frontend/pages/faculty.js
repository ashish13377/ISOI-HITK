import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header-3";
import Head from "next/head";

function Team1() {
  return (
    <>
      <Head>
        <title>ISOI-HITK | Faculty</title>
      </Head>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Faculty</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Faculty
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                    <img src="images/team/pic1.jpg" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name" style={{ paddingRight: "8px" }}>
                        Dr. Madhurima Chattopadhyay
                      </h4>
                      <span className="dlab-position">HoD & Chapter Mentor</span>
                    </div>
                    <br />
                    <ul className="dlab-social-icon primary-light">
                      <li>
                        <a href="https://www.facebook.com/madhurima.chattopadhyay1" target="_blank" className="fa fa-facebook"></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/dr-madhurima-chattopadhyay-1a62294a/" target="_blank" className="fa fa-linkedin"></a>
                      </li>
                      <li>
                        <a href="mailto:madhurima.chattopadhyay@heritageit.edu" target="_blank" className="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                    <img src="images/team/pic2.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name" style={{ paddingRight: "8px" }}>
                        Debjyoti Chowdhury
                      </h4>
                      <span className="dlab-position">Event Convener</span>
                    </div>
                    <ul className="dlab-social-icon primary-light">
                      <li>
                        <a href="https://www.facebook.com/debjyoti.chowdhury.3" target="_blank" className="fa fa-facebook"></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/debjyoti-chowdhury-47005776/" target="_blank" className="fa fa-linkedin"></a>
                      </li>
                      <li>
                        <a href="mailto:debjyoti.chowdhury@heritageit.edu" target="_blank" className="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                    <img src="images/team/pic3.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        Dr. Santanu Ghorai
                      </h4>
                      <span className="dlab-position">Faculty Coordinator</span>
                    </div>
                    <ul className="dlab-social-icon primary-light">
                      <li>
                        <a href="https://www.facebook.com/santanu.ghorai.773" target="_blank" className="fa fa-facebook"></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/dr-santanu-ghorai-b204779/" target="_blank" className="fa fa-linkedin"></a>
                      </li>
                      <li>
                        <a href="mailto:santanu.ghorai@heritageit.edu" target="_blank" className="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                    <img src="images/team/pic4.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        Kumar Harsh
                      </h4>
                      <span className="dlab-position">Vice Chairman</span>
                    </div>
                    <ul className="dlab-social-icon primary-light">
                      <li>
                        <a href="https://www.facebook.com/kumar.harsh.56" target="_blank" className="fa fa-facebook"></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/krharsh/" target="_blank" className="fa fa-linkedin"></a>
                      </li>
                      <li>
                        <a href="mailto:kumar.harsh.aeie22@heritageit.edu.in" target="_blank" className="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                    <img src="images/team/pic5.jpg" alt="" />
                  </div>
                  <div className="dlab-content">
                    <div className="clearfix">
                      <h4 className="dlab-name">
                        <a href="/team-1">Avijit Sharma</a>
                      </h4>
                      <span className="dlab-position">Secretary</span>
                    </div>
                    <ul className="dlab-social-icon primary-light">
                      <li>
                        <a href="https://www.facebook.com/avijit.sharma.3194" target="_blank" className="fa fa-facebook"></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/avijit-sharma-0a11151b2/" target="_blank" className="fa fa-linkedin"></a>
                      </li>
                      <li>
                        <a href="mailto:avijitprasadsharma@gmail.com" target="_blank" className="fa fa-envelope"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* <!-- Call To action --> */}
        <section
          style={{
            backgroundImage: "url(images/background/bg5.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">Come Join Us</h6>
                  <h2 className="title">Enroll now and get your membership Join With Us</h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <a
                  href="/contact-us-1"
                  className="btn btn-link d-inline-flex align-items-center"
                >
                  <i className="fa fa-angle-right m-r10"></i>Join Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Team1;
