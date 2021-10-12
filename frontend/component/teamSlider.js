import Slider from "react-slick";

function TeamSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1	,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic1.jpg" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name" style={{paddingRight: "8px"}}>
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/pic2.jpg" alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name" style={{paddingRight: "8px"}}>
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
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
        

      </Slider>
    </>
  );
}

export default TeamSlider;
