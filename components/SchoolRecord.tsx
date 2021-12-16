import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Student } from "../interfaces/student";
import { User } from "../interfaces";
import { SchoolRecord } from "../interfaces/SchoolRecord";

const SchoolRecord = ({ studentId, canEditProp }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [twelfthCutOff, setTwelfthCutOff] = useState(String);
  const [schoolRecord, setSchoolRecord] = useState<Array<SchoolRecord>>([]);

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
    setCanEdit(true);
    schoolRecord.forEach((items) => {
      items.twelfthCutOff = twelfthCutOff;
    });
    console.log("SchoolRecord", schoolRecord);
    apiService
      .post(`student/${studentId}/schoolrecord`, schoolRecord)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
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
          {schoolRecord.map((items, index) => {
            return (
              <tr>
                <td className={classes.tablehead}>
                  {(() => {
                    if (index + 1 === 1) {
                      return "11th";
                    } else if (index + 1 === 2) {
                      return "12th";
                    } else {
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
      </form>

      <div style={{ marginTop: "5%", marginLeft: "83%" }}>
        <button
          className={classes.icon}
          type="button"
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
