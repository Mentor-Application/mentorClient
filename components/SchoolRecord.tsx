import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { Student } from "../interfaces/student";
import { User } from "../interfaces";
import { SchoolRecord } from "../interfaces/SchoolRecord";
import Row from "react-bootstrap/Row";

const SchoolRecord = ({ studentId, canEditProp, editButton }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [twelfthCutOff, setTwelfthCutOff] = useState(String);
  const [schoolRecord, setSchoolRecord] = useState<Array<SchoolRecord>>([]);
  const [toggleEdit, setToggleEdit] = useState(true);

  let url: string;

  useEffect(() => {
    url = `student/list/schoolrecord/${studentId}`;
    setCanEdit(canEditProp);
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0) {
          setTwelfthCutOff(null);
          setSchoolRecord([
            {
              schoolRecordId: "",
              course: "",
              yearPassedOut: "",
              nameOfSchool: null,
              board: null,
              percentage: null,
              twelfthCutOff: twelfthCutOff,
            },
            {
              schoolRecordId: "",
              course: "",
              yearPassedOut: "",
              nameOfSchool: null,
              board: null,
              percentage: null,
              twelfthCutOff: twelfthCutOff,
            },
            {
              schoolRecordId: "",
              course: "",
              yearPassedOut: "",
              nameOfSchool: null,
              board: null,
              percentage: null,
              twelfthCutOff: twelfthCutOff,
            },
          ]);
        } else {
          if (data.length < 2) {
            while (data.length <= 2) {
              data.push({
                schoolRecordId: "",
                course: "",
                yearPassedOut: "",
                nameOfSchool: null,
                board: null,
                percentage: null,
                twelfthCutOff: twelfthCutOff,
              });
            }
          }
          setSchoolRecord(data);
          setCanEdit(true);
          setTwelfthCutOff(data[0].twelfthCutOff);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let apiService: ApiService = new ApiService();
  const updateSchoolRecord = (e) => {
    e.preventDefault();
    schoolRecord.forEach((items) => {
      items.twelfthCutOff = twelfthCutOff;
    });
    console.log("SchoolRecord", schoolRecord);
    apiService
      .post(`student/${studentId}/schoolrecord`, schoolRecord)
      .then((res) => {
        setCanEdit(true);
        //console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const edit = (e) => {
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11  d-flex flex-column align-items-center justify-content-center`;

  return (
    <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
      <h3 style={{ marginTop: "0%" }} className={classes.heading}>
        School Record
      </h3>
      <form
        style={{ height: "70%" }}
        className="d-flex justify-content-center align-items-center "
      >
        <div className="table-responsive col-9 col-sm-8 col-md-10 col-lg-11">
          <table
            style={{ border: "border: 1px solid black;" }}
            className="table table-borderless"
          >
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
            {schoolRecord.map((items, index) => {
              return (
                <tr>
                  <td className={classes.tablehead}>
                    {(() => {
                      if (index + 1 === 1) {
                        items.course = "11th";
                        return "11th";
                      } else if (index + 1 === 2) {
                        items.course = "12th";
                        return "12th";
                      } else {
                        items.course = "Diploma";
                        return "Diploma";
                      }
                    })()}
                  </td>
                  <td className={classes.table}>
                    <input
                      key={items.yearPassedOut}
                      disabled={canEdit}
                      onChange={(e) => {
                        items.yearPassedOut = e.target.value;
                      }}
                      defaultValue={items.yearPassedOut}
                      className={classes.inputbox}
                      type="text"
                    />
                  </td>
                  <td className={classes.table}>
                    <input
                      key={items.nameOfSchool}
                      disabled={canEdit}
                      onChange={(e) => {
                        items.nameOfSchool = e.target.value;
                      }}
                      defaultValue={items.nameOfSchool}
                      className={classes.inputbox}
                      type="text"
                    />
                  </td>
                  <td className={classes.table}>
                    <input
                      key={items.board}
                      disabled={canEdit}
                      onChange={(e) => {
                        items.board = e.target.value;
                      }}
                      defaultValue={items.board}
                      className={classes.inputbox}
                      type="text"
                    />
                  </td>
                  <td className={classes.table}>
                    <input
                      key={items.percentage}
                      disabled={canEdit}
                      onChange={(e) => {
                        items.percentage = e.target.value;
                      }}
                      defaultValue={items.percentage}
                      className={classes.inputbox}
                      type="text"
                    />
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className={classes.tablehead}>12th Cutoff </td>
              <td>
                <input
                  // style={{ borderBottom: "2px solid black" }}
                  key={twelfthCutOff}
                  disabled={canEdit}
                  type="text"
                  onChange={(e) => {
                    setTwelfthCutOff(e.target.value);
                  }}
                  defaultValue={twelfthCutOff || ""}
                  className={classes.inputbox}
                />
              </td>
            </tr>
          </table>
        </div>
      </form>
      <div style={{ marginTop: "0%", marginLeft: "70%", width: "30%" }}>
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
          className={classes.icon}
          type="button"
          style={{ marginLeft: "5%" }}
          onClick={(e) => {
            console.log(schoolRecord);
            updateSchoolRecord(e);
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default SchoolRecord;
