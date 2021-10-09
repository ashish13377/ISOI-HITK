import React, { Fragment } from "react";
import PageTitle from "../../../layouts/PageTitle";
import MemberData from "./MemberData";

const MembersEventList = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Datatable" motherMenu="Table" />
         <div className="row">
            <MemberData></MemberData>
         </div>
      </Fragment>
   );
};

export default MembersEventList;