import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "./Profile";
import Marks from "./Marks";
import MentorMeetingDetails from "./MentorMeetingDetails";
import AdditionalDetails from "./AdditionalDetails";
import Image from "next/image";
import prof from "../../../public/grey.jpg";
import { Dropdown, DropdownButton, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


import { Student } from "../../../interfaces/student";
import { User } from "../../../interfaces";

export interface studentProfileProp {
  studentProfile: Student;
}

export const index = ({ data }) => {
  const router = useRouter();
  //const studentId = router.query.studentId;
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [profileActive, setprofileActive] = useState(false);
  const [marksActive, setmarksActive] = useState(false);
  const [meetActive, setmeetActive] = useState(false);
  const [careerActive, setcareerActive] = useState(false);
  const [pageRoute, setPageRoute] = useState("profile");
  let loggedInUser: User;

  let navCss = `${
    showNav
      ? "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 position-absolute col-sm-4 col-8"
      : "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 d-none d-sm-flex"
  } `;

  useEffect(() => {
    if (!router.isReady) return;
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    setStudentId(loggedInUser.studentId);
    setStudentName(loggedInUser.userName);
  }, [router.isReady]);

  useEffect(() => {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(loggedInUser.studentId);
    setStudentId(loggedInUser.studentId);
    setStudentName(loggedInUser.userName)
  }, []);

  useEffect(() => {
    if (pageRoute.match("profile")) {
      setprofileActive(true);
      setmarksActive(false);
      setcareerActive(false);
      setmeetActive(false);
    } else if (pageRoute.match("marks")) {
      setprofileActive(false);
      setmarksActive(true);
      setcareerActive(false);
      setmeetActive(false);
    } else if (pageRoute.match("mentormeeting")) {
      setprofileActive(false);
      setmarksActive(false);
      setcareerActive(false);
      setmeetActive(true);
    } else {
      setprofileActive(false);
      setmarksActive(false);
      setcareerActive(true);
      setmeetActive(false);
    }
  }, [pageRoute]);

  let navStyle = `${classes.navbar} d-flex flex-column justify-content-center`;

  return (
    <div style={{ width: "100%", height: "100vh" }} className="d-flex flex-row">
      <div style={{ height: "90vh", marginTop: "3%" }} className={navCss}>
        <div className={navStyle}>
          <div
            style={{ height: "45%" }}
            className="d-flex flex-column align-items-center"
            id="profilePic"
          >
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                height: "250px",
              }}
            >
              {" "}
              <Image src={prof}></Image>
            </div>
            <div >
            
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
                {studentName}
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
    </div>
          </div>
          <div className="d-flex flex-column align-items-center ">
            <button
              type="button"
              onClick={() => {
                setPageRoute("profile");
                console.log(pageRoute);
              }}
              className={profileActive ? classes.navbtnActive : classes.navbtn}
            >
              Your Profile
            </button>
            <button
              type="button"
              onClick={() => {
                setPageRoute("marks");
                console.log(pageRoute);
              }}
              className={marksActive ? classes.navbtnActive : classes.navbtn}
            >
              Marks
            </button>
            <button
              type="button"
              onClick={() => {
                setPageRoute("mentormeeting");
                console.log(pageRoute);
              }}
              className={meetActive ? classes.navbtnActive : classes.navbtn}
            >
              Meeting details
            </button>
            <button
              type="button"
              onClick={() => {
                setPageRoute("additionaldetails");
                console.log(pageRoute);
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
          }}
        >
          <GiHamburgerMenu />
        </button>
        {(() => {
          if (pageRoute.match("profile") && studentId.length !== 0) {
            return (
              <Profile
                studentId={studentId}
                canEdit={false}
                editButton={false}
              ></Profile>
            );
          } else if (pageRoute.match("marks") && studentId.length !== 0) {
            return (
              <Marks
                canEdit={false}
                studentId={studentId}
                editButton={false}
              ></Marks>
            );
          } else if (
            pageRoute.match("mentormeeting") &&
            studentId.length !== 0
          ) {
            return (
              <MentorMeetingDetails
                canEditProp={false}
                studentId={studentId}
                editButton={false}
              ></MentorMeetingDetails>
            );
          } else if (
            pageRoute.match("additionaldetails") &&
            studentId.length !== 0
          ) {
            return (
              <AdditionalDetails
                canEdit={false}
                studentId={studentId}
                editButton={false}
              ></AdditionalDetails>
            );
          } else {
            return <></>;
          }
        })()}

        {/* {pageRoute.match("profile") ? <Profile></Profile> : <Marks></Marks>} */}
      </div>
    </div>
  );
};

export default index;
