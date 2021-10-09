import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import MemberEventData from "./AllMembersEventList";

const EventMemberList = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Event-Members-List" motherMenu="Record" />
         <div className="row">
            <MemberEventData></MemberEventData>
         </div>
      </Fragment>
   );
};

export default EventMemberList;
