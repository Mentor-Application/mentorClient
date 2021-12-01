import { Router, useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Mentees from "../../../components/Mentees";
import SchoolRecord from "../../../components/SchoolRecord";
import AddMentees from "./AddMentees";

export const index = () => {

  const [pageRoute, setPageRoute] = useState('addmentees');

  const router = useRouter();

  //const studentId = router.query.studentId;
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

  
 
  let navStyle = `${classes.navbar} d-flex flex-column justify-content-center`;
    return (
        <div style={{ width: "100%", height: "100vh" }} className="d-flex flex-row">
      <div style={{ height: "90vh", marginTop: "3%" }} className={navCss}>
        <div className={navStyle}> 
          
          <div className="d-flex flex-column align-items-center ">
            
            <button
              type="button"
              onClick={() => setPageRoute("mentees")}
              className={classes.navbtn}
            >
              Mentees
            </button>
            <button
              type="button"
              onClick={() => {setPageRoute("addmentees")
            console.log(pageRoute)}}
              className={classes.navbtn}
            >
              Add Mentees
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
          if (pageRoute.match("mentees")) {
            return <Mentees></Mentees>;
          } else if (pageRoute.match("addmentees")) {
            return <AddMentees></AddMentees>;
          } 
            else {
            return <></>;
          }
        })()}
      </div>
    </div>
    )
}

export default index
