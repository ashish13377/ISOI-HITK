import React, { Fragment, useEffect } from "react";
import Nav from "../layouts/nav";
import Footer from "../layouts/Footer";
import SideBar from "../layouts/nav/SideBar";
import PageTitle from "../layouts/PageTitle";
import AllEventDatatable from "../components/event/AllEvent/AllEventDatatable";

const AllEvent = () => {



    return (
        <Fragment>
            <Nav />
            <SideBar />
            <div className="content-body">
                <div className="container-fluid">
                    <PageTitle activeMenu="Event Datatable" motherMenu="Table" />
                    <div className="row">
                        <AllEventDatatable></AllEventDatatable>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default AllEvent;
