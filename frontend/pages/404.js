
import Header from "../layout/header";
import Link from 'next/link';
import Head from "next/head";


function Error404() {
	return (
		<>
			<Head>
				<title>404 - Page not found</title>
			</Head>
			<Header />
			<div className="page-content bg-white">

				{/* <!-- Error Page --> */}
				<div className="section-full" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
					<div className="container">
						<div className="error-page text-center">
							<div className="dlab_error">404</div>
							<h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
							<Link href="/"><a className="btn btn-primary radius-no"><span className="p-lr15">Back to Homepage</span></a></Link>
						</div>
					</div>
				</div>
				{/* <!-- Error Page End --> */}

			</div>

		</>
	)
}

export default Error404;