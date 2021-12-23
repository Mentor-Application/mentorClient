import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../services/api.service";
import axios from "axios";
import { environment } from "../../../environments/environments";
import classes from "../../../styles/mentor.module.css";
import { faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { User } from "../../../interfaces";

export const ViewStudents = ({ sendProp }) => {
  // const [mentorRoute, setmentorRoute] = useState("mentees");
  const { register, handleSubmit } = useForm();
  const [studentList, setStudentList] = useState([]);
  const [menteesList, setMenteesList] = useState([]);
  // const [registerNumber,setRegisterNumber]=useState('')
  let apiService: ApiService = new ApiService();
  let loggedInUser: User;
  let url: string;

  const handleSearch = async (values) => {
    await axios
      .get(`${environment.api_url}/student/faculty/search`, {
        params: {
          periodOfStudy: values.periodofstudy,
          studentName: values.studentname,
          branch: values.branch,
          section: values.section,
        },
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const data = res.data;

        setStudentList(data);
        console.log(data);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowY: "scroll" }}>
      <form onSubmit={handleSubmit(handleSearch)}>
        <div style={{ marginTop: "3%", marginBottom: "3%" }}>
          <input
            type="text"
            placeholder="Student Name"
            style={{ height: "40px", border: "none" }}
            {...register("studentname")}
            className={classes.searchbutton}
          />
          <input
            {...register("branch")}
            style={{
              color: "white",
              backgroundColor: "#0166b2",
              border: "1.5px solid #0166b2",
              width: "10%",
              height: "40px",
              marginLeft: "12%",
              textAlign: "center",
            }}
            className={classes.input}
            list="branches"
            type="text"
            placeholder="Branch"
          ></input>

          <datalist style={{ color: "white" }} id="branches">
            <option value="CSE" />
            <option value="IT" />
            <option value="ECE" />
            <option value="EEE" />
            <option value="MECH" />
            <option value="BME" />
            <option value="CIVIL" />
            <option value="CHEM" />
          </datalist>
          <input
            {...register("section")}
            style={{
              color: "white",
              backgroundColor: "#0166b2",
              border: "1.5px solid #0166b2",
              width: "10%",
              height: "40px",
              marginLeft: "12%",
              textAlign: "center",
            }}
            className={classes.input}
            list="section"
            type="text"
            placeholder="Section"
          ></input>

          <datalist style={{ color: "white" }} id="section">
            <option value="A" />
            <option value="B" />
          </datalist>
          <input
            {...register("periodofstudy")}
            style={{
              color: "white",
              backgroundColor: "#0166b2",
              border: "1.5px solid #0166b2",
              width: "10%",
              height: "40px",
              marginLeft: "12%",
              textAlign: "center",
            }}
            className={classes.input}
            list="batch"
            type="text"
            placeholder="Batch"
          ></input>
          <datalist style={{ color: "white" }} id="batch">
            <option value="2018-2022" />
            <option value="2019-2023" />
            <option value="2020-2024" />
            <option value="2021-2025" />
            <option value="2022-2026" />
          </datalist>
          <button
            style={{
              backgroundColor: "#0166b2",
              marginLeft: "5%",
              color: "white",
              height: "40px",
              width: "40px",
              border: "none",
            }}
            type="submit"
          >
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faSearch} />
          </button>
        </div>
        <div
          style={{
            overflowX: "auto",
            overflowY: "scroll",
            height: "90%",
            marginBottom: "10px",
          }}
          className={whiteBox}
        >
          {studentList.map((items) => (
            <div
              style={{
                marginTop: "2%",
                marginLeft: "4%",
                marginRight: "4%",
                padding: "15px",
                backgroundColor: "#D3D3D3",
                marginBottom: "2%",
              }}
              key={items.registerNumber}
            >
              <label
                style={{ marginLeft: "7%", width: "73px" }}
                className={classes.labeldisplay}
              >
                {items.registerNumber}
              </label>
              <label style={{ width: "60px" }} className={classes.labeldisplay}>
                {items.studentName}
              </label>
              <label className={classes.labeldisplay}>{items.branch}</label>
              <label className={classes.labeldisplay}>{items.section}</label>
              <label className={classes.labeldisplay}>
                {items.periodOfStudy}
              </label>
              <button
                onClick={() => sendProp(items.studentId, true, "profile")}
                style={{ marginLeft: "7%" }}
                className={classes.addbutton}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ViewStudents;
