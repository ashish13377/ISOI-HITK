import React, { Fragment } from "react";
import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import SideBar from "../layouts/nav/SideBar";
import PageTitle from "../layouts/PageTitle";
import MemberData from "../components/Record/MemberEvent-list/MemberData";

const MembersEventList = () => {
    return (
        <Fragment>
            <Nav />
            <SideBar />
            <div className="content-body">
                <div className="container-fluid">
                    <PageTitle activeMenu="Datatable" motherMenu="Table" />
                    <div className="row">
                        <MemberData></MemberData>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default MembersEventList;
