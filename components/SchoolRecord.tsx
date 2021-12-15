import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Student } from "../interfaces/student";
import { User } from "../interfaces";

const SchoolRecord = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { register: register1, handleSubmit: handleSubmit1 } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

  const [schoolRecord, setSchoolRecord] = useState([]);
  let loggedInUser: User;
  let url: string;

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
  const submitSchoolRecord = (values) => {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    console.log("hello");
      apiService
        .post(`student/${loggedInUser.studentId}/schoolrecord`, schoolRecord)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
      <form style={{ marginLeft: "10%", height: "80%" }} onSubmit={handleSubmit(submitSchoolRecord)}>
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
                {...register("yearPassedOut")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("nameOfSchool")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("board")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("percentage")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.tablehead}>12th</td>
            <td className={classes.table}>
              <input
                {...register1("yearPassedOut")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register1("nameOfSchool")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register1("board")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register1("percentage")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.tablehead}>12th Cutoff </td>
            <td>
              <input
                {...register("twelfthCutOff")}
                {...register1("twelfthCutOff")}
                {...register2("twelfthCutOff")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td className={classes.tablehead}>Diploma</td>
            <td className={classes.table}>
              <input
                {...register2("yearPassedOut")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register2("nameOfSchool")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register2("board")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register2("percentage")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
        </table>
        <div style={{ marginTop: "5%", marginLeft: "83%" }}>
          <button
            className={classes.icon}
            type="submit"
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
