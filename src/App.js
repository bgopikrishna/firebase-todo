import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/todo/TodoList";
import SignIn from "./components/auth/SignIn";
import { Route, Switch } from "react-router-dom";
import SignUp from "./components/auth/SignUp";

const App = () => {
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

export default App;
