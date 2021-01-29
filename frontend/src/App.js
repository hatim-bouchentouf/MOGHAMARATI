import React, { useState, useCallback, useEffect } from "react";
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
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <>
        <Route exact path="/users">
          <MainNavigation />
          <Users />
        </Route>
        <Route exact path="/:userId/places">
          <MainNavigation />
          <UserPlaces />
        </Route>
        <Route exact path="/places">
          <MainNavigation />
          <NewPlace />
        </Route>
        <Route exact path="/places/:placeId">
          <MainNavigation />
          <UpdatePlace />
        </Route>
        <Redirect to="/users" />
      </>
    );
  } else {
    routes = (
      <>
        <Route exact path="/users">
          <MainNavigation />
          <Users />
        </Route>
        <Route exact path="/:userId/places">
          <MainNavigation />
          <UserPlaces />
        </Route>
        <Route exact path="/auth">
          <MainNavigation />
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {routes}
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};
export default App;
