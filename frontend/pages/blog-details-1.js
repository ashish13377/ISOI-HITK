import Footer from "../layout/footer";
import Header from "../layout/header-3";
import Link from 'next/link';
import Cta from "../element/cta";

function BlogDetails1() {
	return (
    <>
			<Header />
			<div className="page-content bg-white">

				{/* <!-- Blog Large --> */}
				<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg1.png)", "backgroundSize": "contain" }}>
					<div className="container">

						<div className="row extra-blog style-1">
							<div className="col-lg-12">
								<h2 className="blog-title">Related Blogs</h2>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="dlab-blog style-1 bg-white text-center m-b30">
									<div className="dlab-media">
										<img src="images/blog/default/thum3.jpg" alt="" />
									</div>
									<div className="dlab-info">
										<h5 className="dlab-title">
											<a href="/blog-large-right-sidebar">Praesent ut lobortis purus hasellus libero orci, accumsan.</a>
										</h5>
										<p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
										<div className="dlab-meta meta-bottom">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
												<li className="post-comment"><a><span></span></a></li>
												<li className="post-share"><i className="flaticon-share"></i>
													<ul>
														<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
														<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
														<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="dlab-blog style-1 bg-white text-center m-b30">
									<div className="dlab-media">
										<img src="images/blog/default/thum2.jpg" alt="" />
									</div>
									<div className="dlab-info">
										<h5 className="dlab-title">
											<a href="/blog-large-right-sidebar">Donec feugiat mollis nisi in dignissim. Morbi sollicitudin.</a>
										</h5>
										<p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
										<div className="dlab-meta meta-bottom">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
												<li className="post-comment"><a><span></span></a></li>
												<li className="post-share"><i className="flaticon-share"></i>
													<ul>
														<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
														<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
														<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="dlab-blog style-1 bg-white text-center m-b30">
									<div className="dlab-media">
										<img src="images/blog/default/thum2.jpg" alt="" />
									</div>
									<div className="dlab-info">
										<h5 className="dlab-title">
											<a href="/blog-large-right-sidebar">Donec feugiat mollis nisi in dignissim. Morbi sollicitudin.</a>
										</h5>
										<p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
										<div className="dlab-meta meta-bottom">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
												<li className="post-comment"><a><span></span></a></li>
												<li className="post-share"><i className="flaticon-share"></i>
													<ul>
														<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
														<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
														<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4">
								<div className="dlab-blog style-1 bg-white text-center m-b30">
									<div className="dlab-media">
										<img src="images/blog/default/thum2.jpg" alt="" />
									</div>
									<div className="dlab-info">
										<h5 className="dlab-title">
											<a href="/blog-large-right-sidebar">Donec feugiat mollis nisi in dignissim. Morbi sollicitudin.</a>
										</h5>
										<p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
										<div className="dlab-meta meta-bottom">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
												<li className="post-comment"><a><span></span></a></li>
												<li className="post-share"><i className="flaticon-share"></i>
													<ul>
														<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
														<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
														<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</section>

				<Footer />
				</div>
			</>
			)
}

			export default BlogDetails1;