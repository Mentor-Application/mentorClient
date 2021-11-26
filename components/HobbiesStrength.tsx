import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const HobbiesStrength = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  let apiService: ApiService = new ApiService();
  const submitProfile = (values) => {
    console.log(values);
  };

  let whiteBox = `${classes.forms}  d-flex justify-content-center col-12 col-xl-11`;
  return (
    <div style={{ height: "90%" }} className={whiteBox}>
      <form
        style={{ overflowY: "scroll", overflowX: "hidden" }}
        onSubmit={handleSubmit(submitProfile)}
        className=" row d-flex justify-content-center col-12"
      >
        <div
          style={{ overflowX: "scroll" }}
          className="d-flex flex-column col-12"
        >
          <h4
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              marginTop: "5%",
            }}
          >
            Top three Hobbies{" "}
          </h4>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              overflowX: "scroll",
              marginTop: "1%",
            }}
          >
            1.<input className={classes.inputgoals}></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            2.<input className={classes.inputgoals}></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            3.<input className={classes.inputgoals}></input>
          </div>

          <h4
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              marginTop: "5%",
            }}
          >
            Strength Assessment{" "}
          </h4>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            I am <input className={classes.inputgoals}></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              marginTop: "1%",
              color: "#0166b2",
              fontWeight: "bold",
            }}
          >
            I have <input className={classes.inputgoals}></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            I can <input className={classes.inputgoals}></input>
          </div>
        </div>
        <div
          style={{ marginTop: "5%", marginLeft: "100%", marginBottom: "3%" }}
        >
          <button className={classes.icon} type="submit">
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default HobbiesStrength;
