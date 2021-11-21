import { useRouter } from "next/dist/client/router";
import React from "react";

import classes from "../../../styles/studentMainPage.module.css";
import Profile from "./Profile";
export const index = () => {
  const router = useRouter();
  const studentId = router.query.studentId;

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex flex-row"
    >
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center col-lg-3 col-xl-3 col-md-4"
      >
        <div className={classes.navbar}></div>
      </div>
      <div className="d-flex col-lg-9 col-xl-9">
        <Profile></Profile>
      </div>
    </div>
  );
};

export default index;
