import React, { Fragment } from "react";
import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import SideBar from "../layouts/nav/SideBar";
import PageTitle from "../layouts/PageTitle";
import Allmemberlist from "../components/Record/Member-List/Allmemberlist";

const MembersList = () => {
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
