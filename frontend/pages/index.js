import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Blog from "../element/blog";
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
function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
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
        <Blog />
        <Quote />
        <Cta />
      </div>
      <Footer />
    </>
  );
}

export default Home;
