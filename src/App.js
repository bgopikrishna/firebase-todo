import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/todo/TodoList";
import SignIn from "./components/auth/SignIn";
import { Route, Switch } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import { connect } from "react-redux";

const App = ({ auth }) => {
  if (auth.uid) {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    );
  }

  return <div>loading...</div>;
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(App);
