import React from "react";
import ChallengesSupport from "../../../components/ChallengesSupport";
import FamilyProfile from "../../../components/FamilyProfile";
import GoalsGrid from "../../../components/GoalsGrid";
import HobbiesStrength from "../../../components/HobbiesStrength";
import ParentGuardian from "../../../components/ParentGuardian";
import SchoolRecord from "../../../components/SchoolRecord";
import StudentProfile from "../../../components/StudentProfile";

export const Profile = ({ studentId }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "100vh",
      }}
      className="row justify-content-center"
    >
      <div
        style={{ height: "115%", overflow: "hidden" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <StudentProfile></StudentProfile>
      </div>
      <div
        style={{ height: "80%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <ParentGuardian></ParentGuardian>
      </div>
      <div
        style={{ height: "70%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <SchoolRecord></SchoolRecord>
      </div>
      <div
        style={{ height: "60%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <FamilyProfile></FamilyProfile>
      </div>
      <div
        style={{ height: "80%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <HobbiesStrength></HobbiesStrength>
      </div>
      <div
        style={{ height: "70%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <GoalsGrid></GoalsGrid>
      </div>
      <div
        style={{ height: "70%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <ChallengesSupport></ChallengesSupport>
      </div>
    </div>
  );
};

export default Profile;
