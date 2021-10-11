import React, { Fragment, useState } from "react";

import NavHader from "./NavHader";
import Header from "./Header";



const ISOINav = ({ title }) => {
   const [toggle, setToggle] = useState("");
   const onClick = (name) => setToggle(toggle === name ? "" : name);
   return (
      <Fragment>
         <NavHader />
         
         <Header
            onProfile={() => onClick("profile")}
            toggle={toggle}
            title={title}
         />
      </Fragment>
   );
};

export default ISOINav;
