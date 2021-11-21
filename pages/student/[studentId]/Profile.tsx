import React, { useEffect } from "react";
import StudentProfile from "../../../components/StudentProfile";
import { User } from "../../../interfaces";
import classes from "../../../styles/studentMainPage.module.css";

export const Profile = () => {
  return (
    <div
      style={{
        width: "100vw",
        overflowY: "scroll",
      }}
      className="row"
    >
      <div
        style={{ height: "90%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-8"
      >
        <div className={classes.vl}></div>
        <StudentProfile></StudentProfile>
      </div>
    </div>
  );
};

export default Profile;
