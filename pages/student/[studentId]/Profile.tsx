import React, { useEffect } from "react";
import StudentProfile from "../../../components/StudentProfile";
import { User } from "../../../interfaces";
import classes from "../../../styles/studentMainPage.module.css";

export const Profile = () => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "100vh",
      }}
      className="row"
    >
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        {/* <div className={classes.vl}></div> */}
        <StudentProfile></StudentProfile>
      </div>
    </div>
  );
};

export default Profile;
