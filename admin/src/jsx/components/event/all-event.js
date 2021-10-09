import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import AllEventDatatable from "./AllEventDatatable";

const DataTable = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Event Datatable" motherMenu="Table" />
         <div className="row">
            <AllEventDatatable></AllEventDatatable>
         </div>
      </Fragment>
   );
};

export default DataTable;
