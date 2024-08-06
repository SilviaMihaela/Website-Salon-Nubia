import React from "react";
import NavButton from "./NavButton";
import Logo from "./Logo";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="logo">
        <Logo />
      </div>
      <div className="tabs">
        <NavButton />
      </div>
    </div>
  );
}

export default NavigationBar;
