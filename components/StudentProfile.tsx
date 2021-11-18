import React from "react";
import classes from "../styles/studentMainPage.module.css";

export const StudentProfile = () => {
  return (
    <div className={classes.forms}>
      <form className="d-flex flex-row justify-content-around align-items-center">
        <div className="d-flex flex-column col-lg-4">
          <label>Name</label>
          <input type="text" placeholder="student name"></input>
        </div>

        <div className="d-flex flex-column col-lg-4">
          <label>Name</label>
          <input type="text" placeholder="student name"></input>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;
