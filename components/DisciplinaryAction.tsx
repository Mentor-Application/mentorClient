import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { User } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { Disciplinary } from "../interfaces/Disciplinary";

export const DisciplinaryAction = ({ studentId, canEditProp, editButton }) => {
  var logedinStudent: Disciplinary = new Disciplinary();
  const [disciplinary, setdisciplinary] = useState<Disciplinary>(Object);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [canEdit, setCanEdit] = useState(false);

  let url: string;
  let apiService: ApiService = new ApiService();
  useEffect(() => {
    setCanEdit(canEditProp);
    url = `disciplinary/${studentId}/list`;
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0 || data === undefined) {
          setdisciplinary({
            studentId: "",
            year1: "",
            year2: "",
            year3: "",
            year4: " ",
          });
        } else {
          //setCanEdit(true);
          setValue("studentId", data.studentId);
          setValue("year1", data.year1);
          setValue("year2", data.year2);
          setValue("year3", data.year3);
          setValue("year4", data.year4);
          setdisciplinary(data);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { register, handleSubmit, getValues, setValue } = useForm();

  const edit = (e) => {
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  };

  const submitProfile = (values) => {
    apiService
      .post("disciplinary/update", values)
      .then((res) => {
        console.log(res);
        setCanEdit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ height: "100%" }} className={classes.forms}>
      <form className="justify-content-around  d-flex flex-column ">
        <div className={classes.discipline}>
          Particulars of Disciplinary action
        </div>
        <span style={{ fontSize: " small", marginLeft: " 20px" }}>
          (Whether transferred to or from other
          college,Migration,Discontinuation,Repetition,Detention due to lack of
          attendance , striking off from rolls,disciplinary actions,stoppage of
          scholarships,etc.)
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
                defaultValue={disciplinary.year1}
                className={classes.inputbox}
                type="text"
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year2")}
                disabled={canEdit}
                defaultValue={disciplinary.year2}
                className={classes.inputbox}
                type="text"
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year3")}
                disabled={canEdit}
                defaultValue={disciplinary.year3}
                className={classes.inputbox}
                type="text"
              ></input>
            </td>
            <td className={classes.dataitem}>
              <input
                {...register("year4")}
                disabled={canEdit}
                defaultValue={disciplinary.year4}
                className={classes.inputbox}
                type="text"
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
          hidden={canEdit}
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

export default DisciplinaryAction;
