import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const HobbiesStrength = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { register: register1, handleSubmit: handleSubmit1 } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();
  
  const [hobbiesStrength, sethobbiesStrength] = useState([]);

  const onsubmit = (values) => {
    hobbiesStrength.push(values);
  };

  const onsubmit1 = (values) => {
    hobbiesStrength.push(values);
  };

  const onsubmit2 = (values) => {
    hobbiesStrength.push(values);
  };

  const onsubmit3 = (values) => {
    hobbiesStrength.push(values);
    console.log(hobbiesStrength);
  };

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
            1.<input {...register("hobbie")} className={classes.inputgoals}></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            2.<input {...register1("hobbie")} className={classes.inputgoals}></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            3.<input {...register2("hobbie")} className={classes.inputgoals}></input>
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
            I am <input {...register3("iAm")} className={classes.inputgoals}></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              marginTop: "1%",
              color: "#0166b2",
              fontWeight: "bold",
            }}
          >
            I have <input {...register3("iCan")} className={classes.inputgoals}></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            I can <input {...register3("iHave")} className={classes.inputgoals}></input>
          </div>
        </div>
        <div
          style={{ marginTop: "5%", marginLeft: "100%", marginBottom: "3%" }}
        >
          <button className={classes.icon}
            type="button"
            onClick={(e) => {
              handleSubmit(onsubmit)();
              handleSubmit1(onsubmit1)();
              handleSubmit2(onsubmit2)();
              handleSubmit3(onsubmit3)();
            }}>
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default HobbiesStrength;
