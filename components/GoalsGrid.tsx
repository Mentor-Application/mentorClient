import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const GoalsGrid = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  let apiService: ApiService = new ApiService();
  const submitProfile = (values) => {
    console.log(values);
  };
  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
      <form
        style={{ marginLeft: "10%", height: "80%" }}
        onSubmit={handleSubmit(submitProfile)}
      >
        <table style={{ marginTop: "10%" }} className={classes.table}>
          <tr>
            <th style={{ width: "10%" }} className={classes.tablehead}>
              No.
            </th>
            <th className={classes.tablehead}>Domain</th>
            <th style={{ width: "30%" }} className={classes.tablehead}>
              Goal
            </th>
            <th style={{ width: "30%" }} className={classes.tablehead}>
              Plan of Action
            </th>
          </tr>
          <tr>
            <td className={classes.tablehead}>1.</td>
            <td className={classes.table}>Acquire (Dont have, but want)</td>
            <td className={classes.table}>
              <input
                {...register("achallenges")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("asourcesupport")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.tablehead}>2.</td>
            <td className={classes.table}>Eliminate (Have but dont want)</td>
            <td className={classes.table}>
              <input
                {...register("rchallenges")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("rsourcesupport")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.tablehead}>3.</td>
            <td className={classes.table}>Avoid (Dont have and dont want)</td>
            <td className={classes.table}>
              <input
                {...register("hchallenges")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("hsourcesupport")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td className={classes.tablehead}>4.</td>
            <td className={classes.table}>Sustain (Have and want)</td>
            <td className={classes.table}>
              <input
                {...register("fchallenges")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("fsourcesupport")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
        </table>
        <div style={{ marginTop: "5%", marginLeft: "83%" }}>
          <button className={classes.icon} type="submit">
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default GoalsGrid;
