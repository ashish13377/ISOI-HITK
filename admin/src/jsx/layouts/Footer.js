import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
   return (
      <div className="footer">
         <div className="copyright">
            <p>
               Copyright 2021 © Designed &amp; Developed by{" "}
               <Link to="#" >
                  Amrit &amp; Ashish
               </Link>{" "}
               
               
            </p>
         </div>
      </div>
   );
};

// target="_blank
export default Footer;
