import React from "react";

const StepThree = () => {
   return (
      <section>
         <div className="row">
         <div className="col-lg-12 mb-2">
            <div className="form-group">
                  <label className="text-label">Contact Name*</label> 
                  <input
                     type="text"
                     name="contactname"
                     className="form-control"
                     placeholder="Prof (Dr) Madhurima Chattopadhyay"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
            <div className="form-group">
                  <label className="text-label">Cantact Email*</label> 
                  <input
                     type="email"
                     name="contactemail"
                     id="inputGroupPrepend2"
                     aria-describedby="inputGroupPrepend2"
                     className="form-control"
                     placeholder="example@heritageit.edu"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
            <div className="form-group">
                  <label className="text-label">Contact Phone*</label> 
                  <input
                     type="text"
                     name="contactphone"
                     className="form-control"
                     placeholder="(+1)408-657-9007"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
            <div className="form-group">
                  <label className="text-label">Contact Designation*</label> 
                  <input
                     type="text"
                     name="contactdesignation"
                     className="form-control"
                     placeholder="Professor (HOD)"
                     required
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default StepThree;
