import React, { useState } from "react";
import logo from "../../images/logofull.png";

import { Link } from "react-router-dom";

const Login = () => {
   const [loginData, setLoginData] = useState({});
   const handleBlur = (e) => {
      const newLoginData = { ...loginData };
      newLoginData[e.target.name] = e.target.value;
      setLoginData(newLoginData);
   };
   const submitHandler = (e) => {
      e.preventDefault();

   };
   return (

      <div className="row justify-content-center h-100 align-items-center h-100">
         <div className="col-md-5">
            <div className="authincation-content">
               <div className="row no-gutters">
                  <div className="col-xl-12">
                     <div className="auth-form">
                        <div style={{ textAlign: "center" }}>
                           <img className="mb-4" src={logo} alt="ISOI_HITK Logo" />
                        </div>
                        <h3 className="text-center mb-4 "> Welcome to ISOI_HITK Admin Dashboard</h3>
                        <h4 className="text-center mb-4 "> Sign in your account  </h4>
                        <form action="" onSubmit={(e) => e.preventDefault(submitHandler)}  >
                           <div className="form-group">    <label className="mb-1 ">  <strong>Username</strong> </label>
                              <input type="text" className="form-control" value="xyz@1267" onChange={handleBlur} />
                           </div>
                           <div className="form-group">
                              <label className="mb-1 "> <strong>Password</strong>  </label>
                              <input type="password" className="form-control" value="Password" onChange={handleBlur} />
                           </div>
                           <div className="form-row d-flex justify-content-between mt-4 mb-2">
                           </div>
                           <div className="text-center">
                              <button type="submit" className="btn btn-primary btn-block" onClick={() => submitHandler} > Sign Me In </button>
                           </div>
                        </form>
                        <br />
                        <br />
                           <div>
                              <h6  className="text-center">
                                  Copyright © 2021 ISOI_HITK
                              </h6>
                           </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>


   );
};

export default Login;
