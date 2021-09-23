import BlogSlider from "../component/blogSlider";


function Blog() {
  return (
    <>
      <section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Events</h6>
					<h2 className="title">Latest Event News</h2>
				</div>
				<BlogSlider/>
			</div>
		</section>
    </>
  )
}

export default Blog;