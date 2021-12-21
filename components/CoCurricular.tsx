import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExtraCurricular } from "../interfaces/ExtraCurricular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export const CoCurricular = ({ studentId }) => {
  var logedinStudent: ExtraCurricular = new ExtraCurricular();
  const [coCurricular, setcoCurricular] = useState<ExtraCurricular>(Object);
  let apiService: ApiService = new ApiService();
  let url: string;
  useEffect(() => {
    url = `extracurricular/${studentId}/list`;
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0 || data === undefined) {
          setcoCurricular({
            studentId: "",
            year1: "",
            year2: "",
            year3: "",
            year4: "",
          });
        } else {
          setcoCurricular(data);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { register, handleSubmit, getValues, setValue } = useForm();

  const submitProfile = (values) => {
    console.log(values);
    apiService
      .post("extracurricular/update", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ height: "100%" }} className={classes.forms}>
      <form className="justify-content-around  d-flex flex-column ">
        <div className={classes.discipline}>
          Extra-Curricular/Co-Curricular Activities :
        </div>
        <span style={{ fontSize: " small", marginLeft: " 20px" }}>
          (Sports,Competitions,Club Activities,Services,Hobbies)
        </span>
        <table
          style={{ marginTop: "3%", marginLeft: "10%" }}
          className={classes.table}
        >
          <tr>
            <th style={{ width: "5%" }} className={classes.tablehead}>
              YEAR 1
            </th>
            <th style={{ width: "5%" }} className={classes.table}>
              YEAR 2
            </th>
            <th style={{ width: "5%" }} className={classes.table}>
              YEAR 3
            </th>
            <th style={{ width: "5%" }} className={classes.table}>
              YEAR 4
            </th>
          </tr>
          <tr>
            <td className={classes.dataitem}>
              <input
                {...register("year1")}
                defaultValue={coCurricular.year1}
                className={classes.inputbox}
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year2")}
                defaultValue={coCurricular.year2}
                className={classes.inputbox}
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year3")}
                defaultValue={coCurricular.year3}
                className={classes.inputbox}
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year4")}
                defaultValue={coCurricular.year4}
                className={classes.inputbox}
              ></input>
            </td>
          </tr>
        </table>
      </form>
      <button
        onClick={() => {
          setValue("studentId", studentId);
          handleSubmit(submitProfile)();
        }}
        className={classes.icon}
      >
        <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
      </button>
    </div>
  );
};

export default CoCurricular;
