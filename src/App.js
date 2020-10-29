import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./styles/App.scss";

import NavbarNav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import User_Profile from "./components/User_Profile";
import Recipes from "./components/Recipes";
import My_Twists from "./components/My_Twists";
import Fave_Twists from "./components/Fave_Twists";
import Fave_Users from "./components/Fave_Users";
import User_Dashboard from "./components/User_Dashboard";
import Modal from "./components/Modal";

export default function App() {
  return (
    <Router>
      <NavbarNav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/user_profile" component={User_Profile} />
        <Route exact path="/recipes/:recipe" component={Recipes} />
        <Route exact path="/my_twists/:user" component={My_Twists} />
        <Route exact path="/fave_twists/:recipe/twists/:twist" component={Fave_Twists} />
        <Route path="/my_twists" component={My_Twists} />
        <Route path="/fave_twists" component={Fave_Twists} />
        <Route path="/user_dashboard" component={User_Dashboard} />
        <Route path="/fave_users" component={Fave_Users} />
        <Route path="/modal/1" component={Modal} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}