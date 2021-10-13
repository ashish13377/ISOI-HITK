import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";

function EventSlider() {
    const [asd, setAsd] = useState();

    const fEvents = useSelector(state => state.fEvents)
    const eventLength = fEvents.length;

    const settings = {
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: eventLength,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
        ]
    };
    const renderArrows = () => {
        return (
            <div className="owl-nav">
                <div
                    className="owl-prev"
                    onClick={() => asd.slickPrev()}
                >
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div
                    className="owl-next"
                    onClick={() => asd.slickNext()}
                >
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        );
    };

    

    return (
        <>
            <div className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary" style={{ "position": "relative" }}>
                <Slider ref={c => setAsd(c)}
                    {...settings}
                >
                    {
                        fEvents.map((currElem) => {
                            return (
                                <div
                                    className="item wow fadeInUp"
                                    data-wow-duration="2s"
                                    data-wow-delay="0.2s"
                                >

                                    <div className="dlab-blog style-1 bg-white text-center">
                                        <div className="dlab-media">
                                            <img src="images/blog/default/thum2.jpg" alt="" />
                                        </div>
                                        <div className="dlab-info">
                                            <h5 className="dlab-title">
                                                <a href="/blog-large-right-sidebar">{currElem.eventName}</a>
                                            </h5>
                                            <p className="m-b0">{currElem.eventDescription}</p>
                                            <div className="dlab-meta meta-bottom">
                                                <ul>
                                                    <li className="post-date"><i className="flaticon-clock m-r10"></i>{currElem.eventDate}</li>
                                                    <li className="post-date"><i className="flaticon-clock m-r10"></i>From {currElem.eventTime}</li>
                                                </ul>
                                            </div>
                                            <div className="dlab-meta meta-bottom">
                                                <ul>
                                                    <li className="post-share"><i className="flaticon-share"></i>
                                                        <ul>
                                                            <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                                                            <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                                                            <li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <br />
                                            <a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </Slider>
                {renderArrows()}
            </div>
        </>
    );
}

export default EventSlider;
