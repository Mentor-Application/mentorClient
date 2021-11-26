import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SchoolRecord = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { register:register1, handleSubmit:handleSubmit1 } = useForm();
  const { register:register2, handleSubmit:handleSubmit2 } = useForm();
  const { register:resgister3, handleSubmit:handleSubmit3 } = useForm();
  const { register:register4, handleSubmit:handleSubmit4 } = useForm();

  let apiService: ApiService = new ApiService();
  const submitProfile = (values) => {
    console.log(values);
    //   apiService
    //     .post("student/profile", values)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
      <form
        onSubmit={handleSubmit(submitProfile)}
        style={{ marginLeft: "10%", height: "80%" }}
      >
        <table style={{ marginTop: "10%" }} className={classes.table}>
          <tr>
            <th className={classes.tablehead}>Course</th>
            <th style={{ width: "15%" }} className={classes.tablehead}>
              Year in which passed
            </th>
            <th style={{ width: "45%" }} className={classes.tablehead}>
              Name of the School/Institution
            </th>
            <th style={{ width: "20%" }} className={classes.tablehead}>
              Board
            </th>
            <th className={classes.tablehead}>Percentage</th>
          </tr>
          <tr>
            <td className={classes.tablehead}>10th</td>
            <td className={classes.table}>
              <input
                {...register("10thyear")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("10thschoolname")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("10thboard")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("10thpercentage")}
                className={classes.inputbox}
                type="text"
              />
            </td>   
          </tr>
          <tr>
            <td className={classes.tablehead}>12th</td>
            <td className={classes.table}>
              <input
                {...register("12thyear")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("12thschoolname")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("12thboard")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("12thpercentage")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.tablehead}>12th Cutoff </td>
            <td>
              <input
                {...register("12thcutoff")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td className={classes.tablehead}>Diploma</td>
            <td className={classes.table}>
              <input
                {...register("diplomayear")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("diplomaschoolname")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("diplomaboard")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("diplomapercentage")}
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

export default SchoolRecord;
