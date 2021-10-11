import React, { Fragment , useEffect } from "react";
import { setUserDetails } from "./redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

/// Components
import Markup from "./jsx";

/// Style
import "./css/style.css";
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

import { withResizeDetector } from "react-resize-detector";

const App = ({ width }) => {
   const body = document.querySelector("body");
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      const data = localStorage.getItem("user");
      dispatch(setUserDetails(JSON.parse(data)));

   },[])

   width >= 1300
      ? body.setAttribute("data-sidebar-style", "full")
      : width <= 1299 && width >= 767
      ? body.setAttribute("data-sidebar-style", "mini")
      : body.setAttribute("data-sidebar-style", "overlay");
   return (
      
      <Fragment>
         <Markup />
      </Fragment>
   );
};

export default withResizeDetector(App);
