import React from "react";
import FamilyProfile from "../components/FamilyProfile";
import HobbiesStrength from "../components/HobbiesStrength";
import ParentGuardian from "../components/ParentGuardian";
import SchoolRecord from "../components/SchoolRecord";
import StudentProfile from "../components/StudentProfile";
import classes from "../styles/studentMainPage.module.css";

export const landing = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex flex-row"
    >
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4"
      >
        <div className={classes.navbar}></div>
      </div>
      <div className="d-flex col-lg-9 col-xl-9">
        <div
          style={{
            width: "100vw",
            overflowY: "scroll",
          }}
          className="row"
        >
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center col-lg-12 col-md-8"
          >
            {/* <div className={classes.vl}></div> */}
            <StudentProfile></StudentProfile>
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center col-lg-12 col-md-8"
          >
            <ParentGuardian></ParentGuardian>
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center col-lg-12 col-md-8"
          >
            <SchoolRecord></SchoolRecord>
          </div>

          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center col-lg-12 col-md-8"
          >
            <FamilyProfile></FamilyProfile>
          </div>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center col-lg-12 col-md-8"
          >
            <HobbiesStrength></HobbiesStrength>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default landing;
