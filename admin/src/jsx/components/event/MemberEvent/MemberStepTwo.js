import React from "react";
import MemberMetarialDate from "../MemberEvent/MemberMetarialDate";
import MemberMetarialTime from "../MemberEvent/MemberMetarialTime";

const MemberStepTwo = () => {
   return (
      <section>
         <div className="row">
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Date*</label>
                  <MemberMetarialDate />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Time*</label>
                  <MemberMetarialTime />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
            <div className="form-group">
                  <label className="text-label">Event Venue*</label> 
                  <input
                     type="text"
                     name="eventvenue"
                     className="form-control"
                     placeholder="Auditorium"
                     required
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default MemberStepTwo;
