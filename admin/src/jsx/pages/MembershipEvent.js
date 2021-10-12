import React, { Fragment , useEffect } from "react";

import Multistep from "react-multistep";

import MemberStepOne from "../components/event/MemberEvent/MemberStepOne";
import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import SideBar from "../layouts/nav/SideBar";
import PageTitle from "../layouts/PageTitle";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const MemberEvent = () => {

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
                    <PageTitle headingPara="Your Event Createing dashboard" activeMenu="Members Event Detail" motherMenu="Event" />

                    <div className="row">
                        <div className="col-xl-12 col-xxl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Members Event Detail</h4>
                                </div>
                                <div className="card-body">
                                    <form
                                        id="step-form-horizontal"
                                        className="step-form-horizontal"
                                    >
                                       <MemberStepOne />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default MemberEvent;
