import React from "react";
import { Route, Router } from "react-router-dom";
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
import RegisterationCompletePage from './dashboard/components/createdUser'
import FetchReferralCodes from './dashboard/components/getReferralCodes'
///Dummmy
import dummyData from './dashboard/Analysis/eAnalytics'
import Register from "./authentication/Register";
import RegisterUser from './authentication/new-register'
import MarketerProfile from './dashboard/components/profile'

const BaseRouter = () => (
    <Hoc>
      <Route exact path="/login" component={Login} /> {" "}
      <Route exact path="/register" component={Register} />  {" "}
      <Route exact path="/dashboard" component={Main} />  {" "}
      <Route exact path="/add-to-list" component={AddUser} />  {" "}
      <Route exact path="/create-user" component={CreateUser} />{" "}
      <Route exact path="/pending-user-list" component={PendingUsers} />{" "}
      <Route exact path="/main" component={Home} />{" "}
      <Route exact path="/all-affiliate" component={AllAffiliates} />{" "}
      <Route exact path="/affiliate/:affiliateID" component={AffDetail} />
      <Route exact path="/user-detail/:userID/" component={UserDetail} />
      <Route exact path='/register-done' component={RegisterationCompletePage} />
      <Route exact path="/excite-anaylsis" component={dummyData} />
      <Route exact path="/referral-codes" component={FetchReferralCodes} />
      <Route exact path="/ref-register" component={RegisterUser} />
      <Route exact path="/profile" component={MarketerProfile} />
 
    </Hoc>
  );
  
  export default BaseRouter;
  