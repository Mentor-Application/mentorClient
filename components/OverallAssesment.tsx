import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Overall } from "../interfaces/Overall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
const OverallAssesment = ({ canEditProp,studentId,editButton}) => {
  var logedinStudent: Overall = new Overall();
  const [overallAssesment, setoverallAssesment] = useState<Overall>(Object);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [canEdit, setCanEdit] = useState(false);

  let apiService: ApiService = new ApiService();
  let url: string;
  useEffect(() => {
    setCanEdit(canEditProp);
    url = `overall/${studentId}/list`;
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0 || data === undefined) {
          setoverallAssesment({
            studentId: "",
            year1: "",
            year2: "",
            year3: "",
            year4: "",
          });
        } else {
          setoverallAssesment(data);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { register, handleSubmit, getValues, setValue } = useForm();

  const edit=(e)=>{
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  }

  const submitProfile = (values) => {
    console.log(values);
    apiService
      .post("overall/update", values)
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
        <div className={classes.discipline}>Overall Assesment :</div>
        <span style={{ fontSize: " small", marginLeft: " 20px" }}>
          (Scholarship/Remarkable acheivements/Any other accomplishments ,
          please Mention :)
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
                disabled={canEdit}
                defaultValue={overallAssesment.year1}
                className={classes.inputbox}
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year2")}
                disabled={canEdit}
                defaultValue={overallAssesment.year2}
                className={classes.inputbox}
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year3")}
                disabled={canEdit}
                defaultValue={overallAssesment.year3}
                className={classes.inputbox}
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year4")}
                disabled={canEdit}
                defaultValue={overallAssesment.year4}
                className={classes.inputbox}
              ></input>
            </td>
          </tr>
        </table>
      </form>
      <div style={{ marginTop: "5%", marginLeft: "83%" }}>
      {editButton ? (
          <button
            className={classes.icon}
            onClick={edit}
            title="Edit"
            // style={{marginLeft:'60%'}}
          >
            <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
          </button>
        ) : null}
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
    </div>
  );
};

export default OverallAssesment;
