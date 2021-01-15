import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./Home/Components/HomePage";
import Users from "./users/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users">
          <MainNavigation />
          <Users />
        </Route>
        <Route exact path="/places/new">
          <MainNavigation />
          <NewPlace />
        </Route>
        <Route exact path="/:userId/places">
          <MainNavigation />
          <UserPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
export default App;