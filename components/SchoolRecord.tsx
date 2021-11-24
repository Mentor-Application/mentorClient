import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";

const SchoolRecord = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();

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
    <div style={{ overflowX: "auto", height: "65%" }} className={whiteBox}>
      <form
        onSubmit={handleSubmit(submitProfile)}
        style={{ overflowX: "auto", marginLeft: "10%" }}
      >
        <table style={{ marginTop: "10%" }} className={classes.table}>
          <tr>
            <th className={classes.tablehead}>Course</th>
            <th className={classes.tablehead}>Year in which passed</th>
            <th style={{ width: "20%" }} className={classes.tablehead}>
              Name of the School/Institution
            </th>
            <th style={{ width: "30%" }} className={classes.tablehead}>
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
        {/* <div style={{marginTop:'40%'}}><button  type="submit" >Submit</button></div> */}
      </form>
    </div>
  );
};

export default SchoolRecord;
