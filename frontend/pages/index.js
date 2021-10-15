import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import FreeEvent from "../element/free-event";
import Clients from "../element/clients";
import Counter from "../element/counter";
import Cta from "../element/cta";
import Newsletter from "../element/newsletter";
import Features from "../element/our-features";
import Pricing from "../element/pricing";
import Projects from "../element/projects";
import Quote from "../element/quote";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Team from "../element/team";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from "next/head";
import { useSelector , useDispatch } from "react-redux"
import {  setUserDetails , setfreeEvents , setPaymentStat , setProducts } from "../redux/actions/index"

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(setUserDetails(user));
    dispatch(setfreeEvents());
    dispatch(setPaymentStat());

    fetch("https://isoi-backend.herokuapp.com/api/membership/getproducts", {
            method: "GET"
        }).then(res => res.json()).then(data => {
            localStorage.setItem("products" , JSON.stringify(data));
        }).catch((e) => alert(e))
  }, []);

  return (
    <>
       <Head>
        <title>ISOI | Heritage Institute of Technology</title>
       </Head>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider1 />
        <Clients />
        <Service />
        <AboutUs />
        <Counter />
        <Features />
        <Projects />
        <Newsletter />
        <Team />
        <Pricing />
        <FreeEvent />
        <Quote />
        <Cta />
      </div>
      <Footer />
    </>
  );
}

export default Home;
