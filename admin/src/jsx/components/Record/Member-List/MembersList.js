import React, { Fragment } from "react";
import PageTitle from "../../../layouts/PageTitle";
import Allmemberlist from "./Allmemberlist";

const MembersList = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Members-List" motherMenu="Record" />
         <div className="row">
            <Allmemberlist></Allmemberlist>
         </div>
      </Fragment>
   );
};

export default MembersList;
