import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
   return (
      <div className="footer">
         <div className="copyright">
            <p>
               Copyright © Designed &amp; Developed by{" "}
               <Link to="#" >
                  Amrit &amp; Ashish
               </Link>{" "}
               2021
               
            </p>
         </div>
      </div>
   );
};

// target="_blank
export default Footer;
