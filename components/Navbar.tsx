import React from "react";
import classes from "../styles/studentMainPage.module.css";

export const Navbar = ({ show }) => {
  const cccClass = `${show ? classes.navbarActive : classes.navbar}`;

  return (
    <div className={cccClass}>
      <div>navbar</div>
    </div>
  );
};

export default Navbar;
