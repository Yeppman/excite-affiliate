import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import Main from './dashboard/main'
import Login from "./authentication/Login";
import RegistrationForm from './authentication/registration'
import AddUser from './dashboard/components/addUser'
import CreateUser from "./dashboard/components/createUser";
import PendingUsers from "./dashboard/components/pendingUsers";
import Home from './homepage/main'
import AllAffiliates from './dashboard/components/all-affiliates'
import AffDetail from "./dashboard/components/affiliates/affiliate-detail";
import UserDetail from './dashboard/components/affiliates/user-details'


///Dummmy
import dummyData from './dashboard/Analysis/eAnalytics'
import Register from "./authentication/Register";

const BaseRouter = () => (
    <Hoc>
      <Route exact path="/login" component={Login} /> {" "}
      <Route exact path="/register" component={Register} />  {" "}
      <Route exact path="/">
        <Redirect to="/dashboard" />
    </Route>
      <Route exact path="/dashboard" component={Main} />  {" "}
      <Route exact path="/add-to-list" component={AddUser} />  {" "}
      <Route exact path="/create-user" component={CreateUser} />{" "}
      <Route exact path="/pending-user-list" component={PendingUsers} />{" "}
      <Route exact path="/main" component={Home} />{" "}
      <Route exact path="/all-affiliate" component={AllAffiliates} />{" "}
      <Route exact path="/affiliate/:affiliateID" component={AffDetail} />
      <Route exact path="/user-detail/:userID/" component={UserDetail} />
      
       <Route exact path="/excite-anaylsis" component={dummyData} />
    </Hoc>
  );
  
  export default BaseRouter;
  