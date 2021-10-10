import React, { Fragment } from "react";
import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import SideBar from "../layouts/nav/SideBar";
import PageTitle from "../layouts/PageTitle";
import FreeEventData from "../components/Record/FreeEvent-List/FreeEventData";


const FreeEventMemberList = () => {
    return (
        <Fragment>
            <Nav />
            <SideBar />
            <div className="content-body">
                <div className="container-fluid">
                    <PageTitle activeMenu="Datatable" motherMenu="Table" />
                    <div className="row">
                        <FreeEventData></FreeEventData>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default FreeEventMemberList;
