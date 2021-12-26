import { Router, useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Profile } from "../../student/[studentId]/Profile";
import { User, viewProfile } from "../../../interfaces";
import Marks from "../../student/[studentId]/Marks";
import MentorMeetingDetails from "../../student/[studentId]/MentorMeetingDetails";
import AdditionalDetails from "../../student/[studentId]/AdditionalDetails";
import ViewStudents from "./ViewStudents";
import { Dropdown, DropdownButton, Row } from "react-bootstrap";

export const index = () => {
  const [mentorRoute, setmentorRoute] = useState("viewstudents");
  const [viewStudentsActive, setViewStudentsActive] = useState(false);
  const [profileActive, setprofileActive] = useState(false);
  const [marksActive, setmarksActive] = useState(false);
  const [meetActive, setmeetActive] = useState(false);
  const [careerActive, setcareerActive] = useState(false);
  const [navHidden, setNavHidden] = useState(true);
  const [editbuttonHidden, setEditButtonHidden] = useState(false);
  const [childProp, setChildProp] = useState<viewProfile>(Object);
  const[facultyName,setFacultyName] = useState("");
  let loggedInUser: User;
  const router = useRouter();

  //const studentId = router.query.studentId;
  const [showNav, setShowNav] = useState(false);
  let navCss = `${
    showNav
      ? "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 position-absolute col-sm-4 col-8"
      : "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 d-none d-sm-flex"
  } `;

  const getChildProp = (studentId:string, canEdit:boolean,route:string,editButton?:boolean) => {
    childProp.studentId = studentId;
    childProp.canEdit = canEdit;
    setNavHidden(false);
    setmentorRoute(route);
    childProp.editButton=editButton;
  };

  useEffect(() => {
    if (mentorRoute.match("mentees")) {
      setViewStudentsActive(true);
      setprofileActive(false);
      setmarksActive(false);
      setcareerActive(false);
      setmeetActive(false);
    }  else if (mentorRoute.match("profile")) {
      setViewStudentsActive(false);
      setprofileActive(true);
      setmarksActive(false);
      setcareerActive(false);
      setmeetActive(false);
    } else if (mentorRoute.match("marks")) {
      setViewStudentsActive(false);
      setprofileActive(false);
      setmarksActive(true);
      setcareerActive(false);
      setmeetActive(false);
    } else if (mentorRoute.match("mentormeeting")) {
      setViewStudentsActive(false);
      setprofileActive(false);
      setmarksActive(false);
      setcareerActive(false);
      setmeetActive(true);
    } else {
      setViewStudentsActive(false);
      setprofileActive(false);
      setmarksActive(false);
      setcareerActive(true);
      setmeetActive(false);
    }
  }, [mentorRoute]);

  useEffect(() => {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    setFacultyName(loggedInUser.userName);
  }, []);

  let navStyle = `${classes.navbar} d-flex flex-column justify-content-center`;
  return (
    <div style={{ width: "100%", height: "100vh" }} className="d-flex flex-row">
      <div style={{ height: "90vh", marginTop: "3%" }} className={navCss}>
        <div className={navStyle}>
          <div className="d-flex flex-column align-items-center ">
          <div
              style={{
                color: "#0166b2",
                fontWeight: "bold",
                marginTop: "20%",
                textAlign: "center",
              }}
              className={classes.dropdowntoggle}
            >
              <Dropdown style={{marginRight:'5%'}} className={classes.dropdowntoggle}>
                <Dropdown.Toggle 
                style={{ background: "white", color: "#0166b2",border:'none',fontWeight:'bold',marginRight:'20%' }}
                className={classes.dropdowntoggle}>
                {facultyName}
                </Dropdown.Toggle>
                <Dropdown.Menu
            id="dropdown-menu-align-right"
            style={{ background: "white", color: "#0166b2" }}
            className="DropDown"
          >
             <Dropdown.Item
              style={{ color: "#0166b2", fontWeight:"bold" }}
              className={classes.dropdownitems}
              onClick={() => {
                console.log("Password Change");
              }}
            >
              Change Password
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              className={classes.dropdownitems}
              onClick={() => {
                router.push("/")
                sessionStorage.clear();
              }}
            >
              LogOut
            </Dropdown.Item>
          </Dropdown.Menu>
              </Dropdown>
             
            </div>
            <button
              type="button"
              onClick={() => {
                setNavHidden(true);
                setmentorRoute("viewstudents");
                console.log(mentorRoute);
              }}
              className={viewStudentsActive ? classes.navbtnActive: classes.navbtn}
            >
              View Students
            </button>
          </div>
          <div className="d-flex flex-column align-items-center ">
           <hr style={{marginTop:'20%'}}hidden={navHidden} className={classes.horizontalline}/>
            <button
              hidden={navHidden}
              type="button"
              onClick={() => {
                setmentorRoute("profile");
                console.log(mentorRoute);
              }}
              className={profileActive ? classes.navbtnActive : classes.navbtn}
            >
              Your Profile
            </button>
            <button
              hidden={navHidden}
              type="button"
              onClick={() => {
                setmentorRoute("marks");
                console.log(mentorRoute);
              }}
              className={marksActive ? classes.navbtnActive : classes.navbtn}
            >
              Marks
            </button>
            <button
              hidden={navHidden}
              type="button"
              onClick={() => {
                setmentorRoute("mentormeeting");
                console.log(mentorRoute);
              }}
              className={meetActive ? classes.navbtnActive : classes.navbtn}
            >
              Meeting details
            </button>
            <button
              hidden={navHidden}
              type="button"
              onClick={() => {
                setmentorRoute("additionaldetails");
                console.log(mentorRoute);
              }}
              className={careerActive ? classes.navbtnActive : classes.navbtn}
            >
              Career Information
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ height: "100vh" }}
        className="home d-flex flex-column col-12 col-md-8 col-sm-12 col-lg-9 col-xl-9"
      >
        <button
          className="d-md-none"
          onClick={() => {
            setShowNav((state) => !state);
            console.log(showNav);
          }}
        >
          <GiHamburgerMenu />
        </button>
        {(() => {
          if (mentorRoute.match("viewstudents")) {
            return <ViewStudents sendProp={getChildProp}></ViewStudents>;
          } else if (mentorRoute.match("profile")) {
            return (
              <Profile
                canEdit={childProp.canEdit}
                studentId={childProp.studentId}
                editButton={childProp.editButton}
              ></Profile>
            );
          } else if (mentorRoute.match("marks")) {
            return (
              <Marks
                canEdit={childProp.canEdit}
                studentId={childProp.studentId}
                editButton={childProp.editButton}
              ></Marks>
            );
          } else if (mentorRoute.match("mentormeeting")) {
            return (
              <MentorMeetingDetails
                canEditProp={childProp.canEdit}
                studentId={childProp.studentId}
                editButton={childProp.editButton}

              ></MentorMeetingDetails>
            );
          } else if (mentorRoute.match("additionaldetails")) {
            return <AdditionalDetails 
            canEdit={childProp.canEdit}
            studentId={childProp.studentId}
            editButton={childProp.editButton}
            ></AdditionalDetails>;
          } else {
            return <></>;
          }
        })()}
        {}
      </div>
    </div>
  );
};

export default index;
