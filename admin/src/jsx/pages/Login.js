import React, { useState } from "react";
import logo from "../../images/logofull.png";
import { setUserDetails } from "../../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router";

const Login = () => {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
   const dispatch = useDispatch();
   const history = useHistory();

   const loginUser = (e) => {
      e.preventDefault();

      fetch("https://isoi-backend.herokuapp.com/api/admin/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            username, password
         })
      }).then(res => res.json())
         .then(data => {
            if (data.error) {
               alert(data.error)
            } else {
               alert(data.message);
               dispatch(setUserDetails(data.userLogin))
               localStorage.setItem("user", JSON.stringify(data.userLogin));
               localStorage.setItem("jwt", data.token);
               history.push("/")
            }
         }).catch((error) => {
            alert(error);
         })

   }

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
                        <form>
                           <div className="form-group">    <label className="mb-1 ">  <strong>Username</strong> </label>
                              <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                           </div>
                           <div className="form-group">
                              <label className="mb-1 "> <strong>Password</strong>  </label>
                              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                           </div>
                           <div className="form-row d-flex justify-content-between mt-4 mb-2">
                           </div>
                           <div className="text-center">
                              <button type="submit" className="btn btn-primary btn-block" onClick={loginUser} > Sign Me In </button>
                           </div>
                        </form>
                        <br />
                        <br />
                        <div>
                           <h6 className="text-center">
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
