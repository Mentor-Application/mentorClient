import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faPen } from "@fortawesome/free-solid-svg-icons";
import { CatMark } from "../interfaces/CatMark";

const CatMarks = ({ semesterName, studentId, canEditProp,editButton}) => {
  let apiService: ApiService = new ApiService();
  const [canEdit, setCanEdit] = useState(false);
  const [attendance, setAttendance] = useState(Number);
  const [catMarks, setcatMarks] = useState<Array<CatMark>>([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  let url: string;

  useEffect(() => {
    url = `marks/${studentId}/${semesterName}/list`;
    setCanEdit(canEditProp);
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0) {
          setAttendance(null);
          setcatMarks([
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
            {
              markId: "",
              subjectCode: "",
              subjectName: "",
              firstCatMark: null,
              secondCatMark: null,
              thirdCatMark: null,
              internalMark: null,
              attendance: attendance,
              semesterName: semesterName,
              studentId: studentId,
            },
          ]);
        } else {
          if (data.length < 8) {
            while (data.length <= 8) {
              data.push({
                markId: "",
                subjectCode: "",
                subjectName: "",
                firstCatMark: null,
                secondCatMark: null,
                thirdCatMark: null,
                internalMark: null,
                attendance: attendance,
                semesterName: semesterName,
                studentId: studentId,
              });
            }
          }
          setcatMarks(data);
          console.log("cat", catMarks);
          setAttendance(data[0].attendance);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [semesterName]);

  const updateMarks = (e) => {
    e.preventDefault();
    catMarks.forEach((items) => {
      items.attendance = attendance;
    });
    apiService
      .post("marks/update", catMarks)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const edit=(e)=>{
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  }

  let whiteBox = `${classes.forms} col-12 col-xl-11 `;

  return (
    <div style={{ height: "100%" }} className={whiteBox}>
      <div>
        <div
          className={classes.internal}
          style={{ color: "#0166b2", marginTop: "2%" }}
        >
          Internal Assesment Results
        </div>
      </div>
      <form style={{ overflowX: "auto", marginTop: "5%" }}>
        <table style={{ marginLeft: "10%" }} className={classes.table}>
          <tr>
            <th style={{ width: "5%" }} className={classes.tablehead}>
              SI No.
            </th>
            <th style={{ width: "30%" }} className={classes.tablehead}>
              Subject Code
            </th>
            <th style={{ width: "50%" }} className={classes.tablehead}>
              Subject Name
            </th>
            <th className={classes.tablehead}>CAT 1 Marks</th>
            <th className={classes.tablehead}>CAT 2 Marks</th>
            <th className={classes.tablehead}>CAT 3 Marks</th>
            <th className={classes.tablehead}>Internal Marks</th>
          </tr>
          {catMarks.map((items, index) => {
            return (
              <tr>
                <td className={classes.tablehead}>{index + 1}</td>
                <td className={classes.table}>
                  <input
                    key={items.subjectCode}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.subjectCode = e.target.value;
                    }}
                    className={classes.inputbox}
                    defaultValue={items.subjectCode}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    key={items.subjectName}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.subjectName = e.target.value;
                    }}
                    className={classes.inputbox}
                    defaultValue={items.subjectName}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    type="number"
                    key={items.firstCatMark}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.firstCatMark = parseInt(e.target.value);
                    }}
                    defaultValue={items.firstCatMark || ""}
                    className={classes.inputbox}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    key={items.secondCatMark}
                    disabled={canEdit}
                    type="number"
                    onChange={(e) => {
                      items.secondCatMark = parseInt(e.target.value);
                    }}
                    defaultValue={items.secondCatMark || ""}
                    className={classes.inputbox}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    key={items.thirdCatMark}
                    disabled={canEdit}
                    type="number"
                    onChange={(e) => {
                      items.thirdCatMark = parseInt(e.target.value);
                    }}
                    defaultValue={items.thirdCatMark || ""}
                    className={classes.inputbox}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    key={items.internalMark}
                    disabled={canEdit}
                    type="number"
                    onChange={(e) => {
                      items.internalMark = parseInt(e.target.value);
                    }}
                    defaultValue={items.internalMark || ""}
                    className={classes.inputbox}
                  ></input>
                </td>
              </tr>
            );
          })}

          <tr>
            <td className={classes.tablehead}>Attendance</td>
            <td>
              <input
                key={attendance}
                disabled={canEdit}
                type="number"
                onChange={(e) => {
                  setAttendance(parseInt(e.target.value));
                }}
                defaultValue={attendance || ""}
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
          className={classes.icon}
          type="button"
          style={{marginLeft:'7%'}}
          onClick={(e) => {
            console.log(catMarks);
            updateMarks(e);
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default CatMarks;
