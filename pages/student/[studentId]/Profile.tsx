import React from "react";
import ChallengesSupport from "../../../components/ChallengesSupport";
import FamilyProfile from "../../../components/FamilyProfile";
import GoalsGrid from "../../../components/GoalsGrid";
import HobbiesStrength from "../../../components/HobbiesStrength";
import ParentGuardian from "../../../components/ParentGuardian";
import SchoolRecord from "../../../components/SchoolRecord";
import StudentProfile from "../../../components/StudentProfile";

export const Profile = ({ studentId, canEdit,editButton}) => {
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
        <StudentProfile
          canEditProp={canEdit}
          studentId={studentId}
          editButton={editButton}
        ></StudentProfile>
      </div>
      <div
        style={{ height: "80%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <ParentGuardian
          canEditProp={canEdit}
          studentId={studentId}
        ></ParentGuardian>
      </div>
      <div
        style={{ height: "70%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <SchoolRecord
          canEditProp={canEdit}
          studentId={studentId}
        ></SchoolRecord>
      </div>
      <div
        style={{ height: "60%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <FamilyProfile
          canEditProp={canEdit}
          studentId={studentId}
        ></FamilyProfile>
      </div>
      <div
        style={{ height: "80%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <HobbiesStrength
          canEditProp={canEdit}
          studentId={studentId}
        ></HobbiesStrength>
      </div>
      <div
        style={{ height: "70%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <GoalsGrid canEditProp={canEdit} studentId={studentId}></GoalsGrid>
      </div>
      <div
        style={{ height: "70%" }}
        className="d-flex justify-content-center align-items-center col-11 col-sm-11 col-lg-12 col-md-11 col-xl-12"
      >
        <ChallengesSupport
          canEditProp={canEdit}
          studentId={studentId}
        ></ChallengesSupport>
      </div>
    </div>
  );
};

export default Profile;
