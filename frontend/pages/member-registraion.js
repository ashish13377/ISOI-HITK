import Footer from "../layout/footer";
import Header from "../layout/header";
import RegistraionFrom from "../element/registraionform";
import Link from 'next/link';
import Head from "next/head";

function memberregistraion() {
	return (
		<>
			<Head>
				<title>ISOI-HITK | Membership Registraion</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
			</Head>
			<Header />
			<div className="page-content bg-white">
				
	
				<RegistraionFrom />

				<Footer />
			</div>
		</>
	)
}

export default memberregistraion;