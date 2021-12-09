import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ChallengesSupport = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { register: register1, handleSubmit: handleSubmit1 } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();

  const [challengesSupport, setchallengesSupport] = useState([]);

  const onsubmit = (values) => {
    challengesSupport.push(values);
  };

  const onsubmit1 = (values) => {
    challengesSupport.push(values);
  };

  const onsubmit2 = (values) => {
    challengesSupport.push(values);
  };

  const onsubmit3 = (values) => {
    challengesSupport.push(values);
    console.log(challengesSupport);
  };

  let apiService: ApiService = new ApiService();
  const submitChallengesSupport = (values) => {
    console.log(values);
    apiService
    .post("student/challenges",values)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
      <form
        onSubmit={handleSubmit(submitChallengesSupport)}
        className="d-flex flex-column justify-content-around align-items-center"
      >
        <table
          style={{ marginTop: "10%", marginLeft: "10%" }}
          className={classes.table}
        >
          <tr>
            <th style={{ width: "10%" }} className={classes.tablehead}>
              No.
            </th>
            <th style={{ width: "20%" }} className={classes.tablehead}>
              Domain
            </th>
            <th style={{ width: "45%" }} className={classes.tablehead}>
              Challenges
            </th>
            <th style={{ width: "200%" }} className={classes.tablehead}>
              Sources of Support
            </th>
          </tr>
          <tr>
            <td className={classes.tablehead}>1.</td>
            <td className={classes.table}>Academic</td>
            <td className={classes.table}>
              <input
                {...register("challenges")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("sourceOfSupport")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.tablehead}>2.</td>
            <td className={classes.table}>Relationship</td>
            <td className={classes.table}>
              <input
                {...register1("challenges")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register1("sourceOfSupport")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.tablehead}>3.</td>
            <td className={classes.table}>Health</td>
            <td className={classes.table}>
              <input
                {...register2("challenges")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register2("sourceOfSupport")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td className={classes.tablehead}>4.</td>
            <td className={classes.table}>Financial</td>
            <td className={classes.table}>
              <input
                {...register3("challenges")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register3("sourceOfSupport")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
        </table>
        <div style={{ marginTop: "5%", marginLeft: "60%" }}>
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

export default ChallengesSupport;
