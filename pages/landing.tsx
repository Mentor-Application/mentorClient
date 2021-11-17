import React from "react";
import classes from "../styles/studentMainPage.module.css";

export const landing = () => {
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
        <div
          style={{
            width: "100vw",
            overflowY: "scroll",
          }}
          className="row"
        >
          <div
            style={{ height: "70%" }}
            className="d-flex justify-content-center align-items-center col-lg-6 col-md-8"
          >
            <div className={classes.forms}></div>
          </div>
          <div
            style={{ height: "70%" }}
            className="d-flex justify-content-center align-items-center col-lg-6 col-md-8"
          >
            <div className={classes.forms}></div>
          </div>
          <div
            style={{ height: "70%" }}
            className="d-flex justify-content-center align-items-center col-lg-6 col-md-8"
          >
            <div className={classes.forms}></div>
          </div>
          <div
            style={{ height: "70%" }}
            className="d-flex justify-content-center align-items-center col-lg-6 col-md-8"
          >
            <div className={classes.forms}></div>
          </div>
          <div
            style={{ height: "70%" }}
            className="d-flex justify-content-center align-items-center col-lg-6 col-md-8"
          >
            <div className={classes.forms}></div>
          </div>
          <div
            style={{ height: "70%" }}
            className="d-flex justify-content-center align-items-center col-lg-6 col-md-8"
          >
            <div className={classes.forms}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
