import React from "react";

const StepOne = () => {
   return (
      <section> 
         <div className="row">
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Name*</label> 
                  <input
                     type="text"
                     name="eventname"
                     className="form-control"
                     placeholder="Application of Sensing Technology"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Description*</label>
                  <textarea style={{marginTop: "0px", marginBottom: "0px", height: "158px"}} type="textarea"
                     className="form-control"
                     placeholder="ISOI-student Chapter, HITK & the Department of AEIE presents, Industry Academia Interaction series in association with #TCS innovation lab, Kolkata. We are starting the series with a talk on the Topic, Application of Sensing Technology We proudly welcome Dr. Arpan Pal, Distinguished Scientist and a resource speaker from TCS Research and Innovation for this session.
                     #registernow to earn a certificate from a prestigious #organization, Get an idea of #Internship and #career  #opportunities at TCS Research and Innovation.
                     required " >
                     
                 </textarea>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Event Poster*</label>
                  <input style={{paddingTop: "13px", content: "Select some files",}}
                     type="file"
                     name="phoneNumber"
                     className="form-control"
                     required
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default StepOne;
