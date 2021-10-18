import Footer from "../layout/footer";
import Header from "../layout/header";
import RegistraionFrom from "../element/registraionform";
import Link from 'next/link';
import Head from "next/head";
import { useEffect } from "react";
import { setUserDetails, setPaidEvents } from "../redux/actions/index"
import { useDispatch , useSelector } from "react-redux";
import { useRouter } from 'next/router'

function memberregistraion() {
	const data = useSelector(state => state.user);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		dispatch(setUserDetails(user));
		if (!user) {
			router.push("/login");
		}


	}, [])
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