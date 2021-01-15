import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";
import Backdrop from "../UIElements/BackDrop";
import Moghamarati from "../UIElements/Moghamarati";

function MainNavigation() {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setdrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setdrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Moghamarati title="MOGHAMARATI" />
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNavigation;
