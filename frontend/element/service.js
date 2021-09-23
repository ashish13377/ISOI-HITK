import { useEffect, useState } from "react";
// import { WOW } from "wowjs";

function Service() {
  const [open, setOpen] = useState("p2");
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return (
    <>
      <section
        className="content-inner-2 wow fadeInUp"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              KNOW MORE
            </h6>
            <h2 className="title">KNOW ABOUT ISOI</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-office"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title"> What is isoi?</h4>
                  <p>
                  instrument society of india (isoi) came into existence in the year 1970 , with it's head quarters situated at indian institute of science, bangalore. currently it has six chapters at delhi, chennai, hyderabad, dehradun, pune and cochin. 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-website"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Vision of ISOI</h4>
                  <p>
                  ISOI aims to bring the learners and mentors of the department of instrumentations under a single forum where they can exchange their ideas and knowledge to work together towards the development of instrumentation industry.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-pie-charts"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Extention of student chapter</h4>
                  <p>
                  By taking it a step further, isoi student chapters provide opportunities for the students to acquire the best from the experts through several technical events, informative and interactive activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
