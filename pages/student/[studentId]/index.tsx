import { Router, useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import classes from "../../../styles/studentMainPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "./Profile";
import Marks from "./Marks";
import MentorMeetingDetails from "./MentorMeetingDetails";
import AdditionalDetails from "./AdditionalDetails";
import Image from "next/image";
import prof from "../../../public/profileIcon.jpg";
export const index = () => {
  const router = useRouter();
  const studentId = router.query.studentId;
  const [showNav, setShowNav] = useState(false);
  let navCss = `${
    showNav
      ? "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 position-absolute col-sm-4 col-8"
      : "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 d-none d-sm-flex"
  } `;

  const handleClick = (e) => {
    e.preventDefault();
    console.log(showNav);
    setShowNav(!showNav);
  };

  const [pageRoute, setPageRoute] = useState("profile");
  // useEffect(() => {
  //   document.addEventListener("keypress", (e) => {
  //     if (e.code === "Space") setShowNav((state) => !state);
  //   });
  // }, []);
  let navStyle = `${classes.navbar} d-flex flex-column justify-content-center`;

  return (
    <div style={{ width: "100%", height: "100vh" }} className="d-flex flex-row">
      <div style={{ height: "90vh", marginTop: "3%" }} className={navCss}>
        <div className={navStyle}> 
          <div
            style={{ height: "45%",  }}
            className={classes.proficn}
            id="profilePic"
          ><Image src={prof}></Image> <div style={{color:"#0166b2",fontWeight:"bold",marginTop:"2%",textAlign:"center"}}>Student Name</div>
          </div>
          <div className="d-flex flex-column align-items-center ">
            <button
              type="button"
              onClick={() => {
                setPageRoute("profile");
              }}
              className={classes.navbtn}
            >
              Your Profile
            </button>
            <button
              type="button"
              onClick={() => setPageRoute("marks")}
              className={classes.navbtn}
            >
              Marks
            </button>
            <button
              type="button"
              onClick={() => setPageRoute("mentormeeting")}
              className={classes.navbtn}
            >
              Meeting details
            </button>
            <button type="button"  onClick={() => setPageRoute("additionaldetails")}className={classes.navbtn}>
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
          if (pageRoute.match("profile")) {
            return <Profile></Profile>;
          } else if (pageRoute.match("marks")) {
            return <Marks></Marks>;
          } else if (pageRoute.match("mentormeeting")) {
            return <MentorMeetingDetails></MentorMeetingDetails>;
          } else if (pageRoute.match("additionaldetails")){
            return <AdditionalDetails></AdditionalDetails>
          }
            else {
            return <></>;
          }
        })()}

        {/* {pageRoute.match("profile") ? <Profile></Profile> : <Marks></Marks>} */}
      </div>
    </div>
  );
};

export default index;
