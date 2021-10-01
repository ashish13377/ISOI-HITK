import React, { Fragment, useState } from "react";
import SideBar from "./SideBar";
import NavHader from "./NavHader";
import Header from "./Header";


const KokiNav = ({ title }) => {
   const [toggle, setToggle] = useState("");
   const onClick = (name) => setToggle(toggle === name ? "" : name);
   return (
      <Fragment>
         <NavHader />
         <SideBar />
         <Header
            onProfile={() => onClick("profile")}
            toggle={toggle}
            title={title}
         />
      </Fragment>
   );
};

export default KokiNav;
