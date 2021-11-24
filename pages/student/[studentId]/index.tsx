import { Router, useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import classes from "../../../styles/studentMainPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "./Profile";
export const index = () => {
  const router = useRouter();
  const studentId = router.query.studentId;
  const [showNav, setShowNav] = useState(false);
  let navCss = `${
    showNav
      ? "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 position-absolute col-sm-4 col-8"
      : "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4"
  } `;

  const handleClick = (e) => {
    e.preventDefault();
    console.log(showNav);
    setShowNav(!showNav);
  };

  // useEffect(() => {
  //   document.addEventListener("keypress", (e) => {
  //     if (e.code === "Space") setShowNav((state) => !state);
  //   });
  // }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }} className="d-flex flex-row">
      <div style={{ height: "90vh", marginTop: "3%" }} className={navCss}>
        <div className={classes.navbar}>
          <div className="col-md-12 col-lg-12 justify-content-center align-items-center">
              <button  type="button" className={classes.navbtn}>Your Profile</button>
              <button  type="button" onClick={() => router.push(`/student/${studentId}/Marks`)}
              style={{marginTop:"20%"}}className={classes.navbtn}>Marks</button>
              <button  type="button" style={{marginTop:"20%"}} className={classes.navbtn}>Meeting details</button>
              <button  type="button" style={{marginTop:"20%"}} className={classes.navbtn}>Career Information</button>
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

        <Profile></Profile>
      </div>
    </div>
  );
};

export default index;
