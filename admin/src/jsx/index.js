import React from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";


/// Pages
import AdminProfile from "./pages/Profile";
import FreeEventMemberList from"./pages/NonMemberEventList";
import MembersEventList from "./pages/MembersEventList";
import MemberList from"./pages/MemberList";
import FreeEvent from "./pages/Non-Membershipevent";
import MemberEvent from "./pages/MembershipEvent";
import AllEvent from "./pages/All-event"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const Markup = () => {
	
	return (

		<Router>
			<div id="main-wrapper" className="show">
				<Switch>
					<Route exact path="/" >
						<Dashboard />
					</Route>
					<Route exact path="/login" >
						<Login />
					</Route>
					<Route exact path="/all-event" >
						<AllEvent />
					</Route>
					<Route exact path="/membership-event" >
						<MemberEvent />
					</Route>
					<Route exact path="/non-membership-event" >
						<FreeEvent />
					</Route>
					<Route exact path="/members-list">
						<MemberList />
					</Route>
					<Route exact path="/members-event-list">
						<MembersEventList />
					</Route>
					<Route exact path="/non-members-event-list">
						<FreeEventMemberList />
					</Route>
					<Route exact path="/admin-profile">
						<AdminProfile />
					</Route>
				</Switch>
			</div>
		</Router>

	);
};

export default Markup;
