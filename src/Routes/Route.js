import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/LoggedOut/Home";
import { Login } from "../pages/LoggedOut/Login";
import { ConfirmEmail } from "../pages/LoggedOut/ConfirmEmail";
import { ConfirmToken } from "../pages/LoggedOut/ConfirmToken";
import { ChangePassword as ForgotPassword } from "../pages/LoggedOut/ChangePassword";
import { Register } from "../pages/LoggedOut/Register";
import { Profile } from "../pages/LoggedIn/Profile";
import { ChangePassword } from "../pages/LoggedIn/ChangePassword";
// import { MovieRegister } from "../pages/LoggedIn/MovieRegister";
import { MyMovies } from "../pages/LoggedIn/MyMovies";
import { MovieRegister } from "../pages/LoggedIn/MovieReg";
import { Movie } from "../pages/LoggedIn/Movie";
import { MovieListing } from "../pages/LoggedIn/MovieListing";
import PrivateRoute from "../Components/PrivateRoute";



export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Login} path="/Login" />
        <Route component={ConfirmEmail} path="/ConfirmEmail" />
        <Route component={ConfirmToken} path="/ConfirmToken" />
        <Route component={ForgotPassword} path="/ForgotPassword" />
        <Route component={Register} path="/Register" />
        <PrivateRoute component={Profile} path="/Profile" />
        <PrivateRoute component={ChangePassword} path="/ChangePassword" />
        <PrivateRoute component={MovieListing} path="/browse" />
        {/* <PrivateRoute component={MovieRegister} path="/MovieRegister" /> */}
        <PrivateRoute component={MovieRegister} path="/MovieRegister" />
        <PrivateRoute component={MyMovies} path="/MyMovies" />
        <PrivateRoute component={Movie} path="/Movie" />
      </Switch>
    </Router>
  );
}
