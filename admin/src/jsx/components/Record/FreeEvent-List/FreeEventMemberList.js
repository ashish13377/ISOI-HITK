import React, { Fragment } from "react";
import PageTitle from "../../../layouts/PageTitle";

import FreeEventData from "./FreeEventData";


const FreeEventMemberList = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Datatable" motherMenu="Table" />
         <div className="row">
           
            <FreeEventData></FreeEventData>
         </div>
      </Fragment>
   );
};

export default FreeEventMemberList;
