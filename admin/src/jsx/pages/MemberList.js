import React, { Fragment , useEffect } from "react";
import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import SideBar from "../layouts/nav/SideBar";
import PageTitle from "../layouts/PageTitle";
import Allmemberlist from "../components/Record/Member-List/Allmemberlist";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const MembersList = () => {

    const userData = JSON.parse(localStorage.getItem("user"))
	const history = useHistory();

	useEffect(() => {
		if(!userData){
			history.push("/login")
		}
	})


    return (
        <Fragment>
            <Nav />
            <SideBar />
            <div className="content-body">
                <div className="container-fluid">
                    <PageTitle activeMenu="Members-List" motherMenu="Record" />
                    <div className="row">
                        <Allmemberlist></Allmemberlist>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default MembersList;
