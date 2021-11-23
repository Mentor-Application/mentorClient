import React, { useEffect } from "react";
import ChallengesSupport from "../../../components/ChallengesSupport";
import FamilyProfile from "../../../components/FamilyProfile";
import GoalsGrid from "../../../components/GoalsGrid";
import HobbiesStrength from "../../../components/HobbiesStrength";
import ParentGuardian from "../../../components/ParentGuardian";
import SchoolRecord from "../../../components/SchoolRecord";
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
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <ParentGuardian></ParentGuardian>
      </div>
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <SchoolRecord></SchoolRecord>
      </div>
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <FamilyProfile></FamilyProfile>
      </div>
      <div
        style={{ height: "80%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <HobbiesStrength></HobbiesStrength>
      </div>
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <GoalsGrid></GoalsGrid>
      </div>
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <ChallengesSupport></ChallengesSupport>
      </div>
    </div>
  );
};

export default Profile;
