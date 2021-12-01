import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SchoolRecord = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { register: register1, handleSubmit: handleSubmit1 } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const [schoolRecord, setSchoolRecord] = useState([]);

  const onsubmit = (values) => {
    schoolRecord.push(values);
  };

  const onsubmit1 = (values) => {
    schoolRecord.push(values);
  };

  const onsubmit2 = (values) => {
    schoolRecord.push(values);
    console.log(schoolRecord);
  };

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
      <form style={{ marginLeft: "10%", height: "80%" }}>
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
                {...register1("12thyear")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register1("12thschoolname")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register1("12thboard")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register1("12thpercentage")}
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
                {...register1("12thcutoff")}
                {...register2("12thcutoff")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td className={classes.tablehead}>Diploma</td>
            <td className={classes.table}>
              <input
                {...register2("diplomayear")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register2("diplomaschoolname")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register2("diplomaboard")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register2("diplomapercentage")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
        </table>
        <div style={{ marginTop: "5%", marginLeft: "83%" }}>
          <button
            className={classes.icon}
            type="button"
            onClick={(e) => {
              console.log("clicking");
              handleSubmit2(onsubmit2)();
              handleSubmit(onsubmit)();
              handleSubmit1(onsubmit1)();
            }}
          >
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchoolRecord;
