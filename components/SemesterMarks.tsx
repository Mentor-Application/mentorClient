import React, { useEffect, useState } from "react";

import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { EndSem } from "../interfaces/EndSem";
import MentorMeetingDetails from "../pages/student/[studentId]/MentorMeetingDetails";

const SemesterMarks = ({ semesterName, studentId }) => {
  const [SemMarks, setSemMarks] = useState<Array<EndSem>>([]);
  const [credits, setCredits] = useState(String);
  const [totalGradePoints, setTotalGradePoints] = useState("");
  const [gpa, setgpa] = useState("");
  let apiService: ApiService = new ApiService();
  let url: string;
  useEffect(() => {
    url = `endsemester/${studentId}/${semesterName}/list`;
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0) {
          setCredits("");
          setTotalGradePoints("");
          setgpa("");
          setSemMarks([
            {
              semesterName: semesterName,
              subjectCode: "",
              subjectName: "",
              studentId: studentId,
              grade: "",
              gradePoints: "",
              monthAndYearOfPassing: "",
              credits: credits,
              totalGradePoints: totalGradePoints,
              gpa: gpa,
            },
            {
              semesterName: semesterName,
              subjectCode: "",
              subjectName: "",
              studentId: studentId,
              grade: "",
              gradePoints: "",
              monthAndYearOfPassing: "",
              credits: credits,
              totalGradePoints: totalGradePoints,
              gpa: gpa,
            },
            {
              semesterName: semesterName,
              subjectCode: "",
              subjectName: "",
              studentId: studentId,
              grade: "",
              gradePoints: "",
              monthAndYearOfPassing: "",
              credits: credits,
              totalGradePoints: totalGradePoints,
              gpa: gpa,
            },
            {
              semesterName: semesterName,
              subjectCode: "",
              subjectName: "",
              studentId: studentId,
              grade: "",
              gradePoints: "",
              monthAndYearOfPassing: "",
              credits: credits,
              totalGradePoints: totalGradePoints,
              gpa: gpa,
            },
            {
              semesterName: semesterName,
              subjectCode: "",
              subjectName: "",
              studentId: studentId,
              grade: "",
              gradePoints: "",
              monthAndYearOfPassing: "",
              credits: credits,
              totalGradePoints: totalGradePoints,
              gpa: gpa,
            },
            {
              semesterName: semesterName,
              subjectCode: "",
              subjectName: "",
              studentId: studentId,
              grade: "",
              gradePoints: "",
              monthAndYearOfPassing: "",
              credits: credits,
              totalGradePoints: totalGradePoints,
              gpa: gpa,
            },
            {
              semesterName: semesterName,
              subjectCode: "",
              subjectName: "",
              studentId: studentId,
              grade: "",
              gradePoints: "",
              monthAndYearOfPassing: "",
              credits: credits,
              totalGradePoints: totalGradePoints,
              gpa: gpa,
            },
            {
              semesterName: semesterName,
              subjectCode: "",
              subjectName: "",
              studentId: studentId,
              grade: "",
              gradePoints: "",
              monthAndYearOfPassing: "",
              credits: credits,
              totalGradePoints: totalGradePoints,
              gpa: gpa,
            },
          ]);
        } else {
          setSemMarks(data);
          setCredits(data[0].credits);
          setTotalGradePoints(data[0].totalGradePoints);
          setgpa(data[0].gpa);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [semesterName]);

  const updateMarks = (e) => {
    e.preventDefault();
    SemMarks.forEach((items) => {
      items.credits = credits;
      items.totalGradePoints = totalGradePoints;
      items.gpa = gpa;
    });
    apiService
      .post("endsemester/update", SemMarks)
      .then((res) => {
        console.log("res", res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ height: "100%" }} className={whiteBox}>
      <div>
        <div className={classes.univ} style={{ color: "#0166b2" }}>
          University examination Results{" "}
        </div>
      </div>
      <form
        style={{
          marginLeft: "10%",
          height: "100%",
          overflow: "visible",
          marginTop: "5%",
        }}
      >
        <table style={{ marginTop: "1%" }} className={classes.table}>
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
            <th className={classes.tablehead}>Grade</th>
            <th className={classes.tablehead}>
              Grade points obtained (Credits x Score)
            </th>
            <th className={classes.tablehead}>Month and Year of Passing</th>
          </tr>
          {SemMarks.map((items, index) => {
            return (
              <tr>
                <td className={classes.tablehead}>{index + 1}</td>
                <td className={classes.table}>
                  <input
                    onChange={(e) => {
                      items.subjectCode = e.target.value;
                    }}
                    value={items.subjectCode}
                    className={classes.inputbox}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    onChange={(e) => {
                      items.subjectName = e.target.value;
                    }}
                    value={items.subjectName}
                    className={classes.inputbox}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    onChange={(e) => {
                      items.grade = e.target.value;
                    }}
                    value={items.grade}
                    className={classes.inputbox}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    onChange={(e) => {
                      items.gradePoints = e.target.value;
                    }}
                    value={items.gradePoints}
                    className={classes.inputbox}
                  ></input>
                </td>
                <td className={classes.table}>
                  <input
                    onChange={(e) => {
                      items.monthAndYearOfPassing = e.target.value;
                    }}
                    value={items.monthAndYearOfPassing}
                    className={classes.inputbox}
                  ></input>
                </td>
              </tr>
            );
          })}
        </table>
        <div style={{ marginTop: "5%" }} className="row">
          <div
            className="col-md-3"
            style={{ marginTop: "1%", color: "#0166b2", fontWeight: "bold" }}
          >
            Credits:{" "}
            <input
              onChange={(e) => {
                setCredits(e.target.value);
              }}
              value={credits}
              className={classes.credits}
            ></input>
          </div>
          <div
            className="col-md-5"
            style={{ color: "#0166b2", fontWeight: "bold" }}
          >
            Total Grade Points:{" "}
            <input
              onChange={(e) => {
                setTotalGradePoints(e.target.value);
              }}
              value={totalGradePoints}
              className={classes.credits}
            ></input>
          </div>
          <div
            className="col-md-4"
            style={{ color: "#0166b2", fontWeight: "bold" }}
          >
            GPA:{" "}
            <input
              onChange={(e) => {
                setgpa(e.target.value);
              }}
              value={gpa}
              className={classes.credits}
            ></input>
          </div>
        </div>
        <div style={{ marginTop: "4%", marginLeft: "83%", marginBottom: "3%" }}>
          <button
            className={classes.icon}
            type="button"
            onClick={(e) => {
              updateMarks(e);
            }}
          >
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SemesterMarks;
