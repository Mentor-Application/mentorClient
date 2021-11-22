import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import classes from "../../../styles/studentMainPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "./Profile";
export const index = () => {
  const router = useRouter();
  const studentId = router.query.studentId;
  const [showNav, setShowNav] = useState(false);
  const navCss = `${
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
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex flex-row"
    >
      <div style={{ height: "100vh" }} className={navCss}>
        <div className={classes.navbar}></div>
      </div>

      <div
        style={{ height: "100vh" }}
        className="home d-flex flex-column col-lg-9 col-xl-9"
      >
        <div className="d-md-none ">
          <button>
            <GiHamburgerMenu onClick={handleClick} />
          </button>
        </div>
        <Profile></Profile>
      </div>
    </div>
  );
};

export default index;
