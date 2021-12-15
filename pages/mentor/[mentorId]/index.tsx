import { Router, useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MenteeCardItems } from "../../../utils/sample-data";
import SchoolRecord from "../../../components/SchoolRecord";
import AddMentees from "./AddMentees";
import Mentees from "./Mentees";

export const index = () => {
  const [mentorRoute, setmentorRoute] = useState("mentees");
  const [menteesActive, setmenteesActive] = useState(false);
  const [addMenteesActive, setaddMenteesActive] = useState(false);

  const router = useRouter();

  //const studentId = router.query.studentId;
  const [showNav, setShowNav] = useState(false);
  let navCss = `${
    showNav
      ? "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 position-absolute col-sm-4 col-8"
      : "d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4 d-none d-sm-flex"
  } `;

  // const Names=["Srikanth","Vignesh","Vasi"];
  // const RegNos=["195001108","195001127","195001124"]
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(showNav);
    setShowNav(!showNav);
  };

  useEffect(() => {
    if (mentorRoute.match("mentees")) {
      setmenteesActive(true);
      setaddMenteesActive(false);
    } 
     else if(mentorRoute.match("addmentees")) {
      setmenteesActive(false);
      setaddMenteesActive(true);
    }
  }, [mentorRoute]);

  let navStyle = `${classes.navbar} d-flex flex-column justify-content-center`;
  return (
    <div style={{ width: "100%", height: "100vh" }} className="d-flex flex-row">
      <div style={{ height: "90vh", marginTop: "3%" }} className={navCss}>
        <div className={navStyle}>
          <div className="d-flex flex-column align-items-center ">
            <button
              type="button"
              onClick={() => {
                setmentorRoute("mentees");
                console.log(mentorRoute);
              }}
              className={menteesActive ? classes.navbtnActive : classes.navbtn}
            >
              Mentees
            </button>
            <button
              type="button"
              onClick={() => {
                setmentorRoute("addmentees");
                console.log(mentorRoute);
              }}
              className={addMenteesActive ? classes.navbtnActive : classes.navbtn}
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
          if (mentorRoute.match("addmentees")) {
            return <AddMentees></AddMentees>;
          } else if (mentorRoute.match("mentees")) {
            return <Mentees></Mentees>;
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
