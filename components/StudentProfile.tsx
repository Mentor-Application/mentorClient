import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { ApiService } from "../services/api.service";

// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Select from 'react-select';

export const StudentProfile = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(true);
  const [branch, setBranch] = useState("");

  let apiService: ApiService = new ApiService();
  const submitProfile = (values) => {
    console.log(values);
    apiService
      .post("student/profile", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let middileLine = `${classes.vl} col-1 d-flex justify-content-center`;
  let whiteBox = `${classes.forms}  d-flex justify-content-center col-12 col-xl-11`;
  return (
    <div style={{ height: "87%" }} className={whiteBox}>
      <form
        style={{ overflowY: "scroll", overflowX: "hidden" }}
        onSubmit={handleSubmit(submitProfile)}
        className="row d-flex justify-content-around"
      >
        <div className="d-flex  flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-12">
          <Row className="d-flex justify-content-center">
            <label style={{ marginTop: "20px" }} className={classes.label}>
              Name
            </label>
            <input
              {...register("studentName", {
                required: "Student Name Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
            <ErrorMessage errors={errors} name="singleErrorInput" />

            <ErrorMessage
              errors={errors}
              name="singleErrorInput"
              render={({ message }) => <p>{message}</p>}
            />
          </Row>

          <Row style={{ marginTop: "5%" }}>
            <div className="radio d-flex">
              <label className={classes.label}>
                <input
                  checked={isChecked}
                  {...register("gender")}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                  value="M"
                  type="radio"
                ></input>
                <span> </span>
                Male
              </label>

              <label style={{ marginLeft: "35%" }} className={classes.label}>
                <input
                  {...register("gender")}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                  type="radio"
                  value="F"
                ></input>
                <span> </span>
                Female
              </label>
            </div>
          </Row>
          <Row
            style={{ marginTop: "5%" }}
            className="d-flex justify-content-center"
          >
            <Col
              style={{ marginLeft: "2%" }}
              className="d-flex flex-column align-items-start"
            >
              <label className={classes.label}>Branch</label>
              <input
                {...register("branch")}
                style={{
                  color: "#0166b2",
                  backgroundColor: "white",
                  border: "1.5px solid #0166b2",
                  borderRadius: "15px",
                  width: "80%",
                  height: "40px",
                  marginLeft: "12%",
                }}
                list="branches"
                type="text"
              ></input>

              <datalist id="branches">
                <option value="CSE" />
                <option value="IT" />
                <option value="ECE" />
                <option value="EEE" />
                <option value="MECH" />
                <option value="BME" />
                <option value="CIVIL" />
                <option value="CHEM" />
              </datalist>
            </Col>
            <Col
              style={{ textAlign: "start" }}
              className="d-flex flex-column justify-content-center align-items-centers"
            >
              <label className={classes.label}>Section</label>
              <input
                {...register("section")}
                style={{ width: "75%", height: "42.5px", marginLeft: "10%" }}
                className={classes.box}
                type="text"
              ></input>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Date of Birth </label>
            <input
              {...register("dob")}
              style={{ width: "80%" }}
              className={classes.box}
              type="date"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Father's Mobile Number</label>
            <input
              {...register("fatherMobileNumber")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Religion</label>
            <input
              {...register("religion")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Community</label>
            <input
              {...register("community")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col>
              <label className={classes.label}>Hosteller/Day Scholar</label>
              <input
                {...register("mode")}
                style={{
                  color: "#0166b2",
                  backgroundColor: "white",
                  border: "1.5px solid #0166b2",
                  borderRadius: "15px",
                  width: "80%",
                  height: "40px",
                  marginLeft: "15%",
                }}
                list="mode"
                type="text"
              ></input>

              <datalist id="mode">
                <option value="Hosteller" />
                <option value="Day Scholar" />
              </datalist>
            </Col>

            <Col>
              <label className={classes.label}>Room No./Hostel No.</label>
              <input
                {...register("busRouteNumber")}
                style={{ width: "65%", height: "42.5px", marginLeft: "15%" }}
                className={classes.box}
                type="text"
              ></input>
            </Col>
          </Row>
        </div>
        {/* <div className={middileLine}></div> */}
        <div className="d-flex flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-12">
          <Row className="d-flex justify-content-center">
            <label style={{ marginTop: "20px" }} className={classes.label}>
              Email ID
            </label>
            <input
              {...register("emailId")}
              style={{ width: "80%" }}
              className={classes.box}
              type="email"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Student's Mobile Number</label>
            <input
              {...register("mobileNumber")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Period of Study </label>
            <input
              {...register("periodOfStudy")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Mother's Mobile Number</label>
            <input
              {...register("motherMobileNumber")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Blood Group</label>
            <input
              {...register("bloodGroup")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Address for Communication</label>
            <textarea
              {...register("address")}
              style={{ width: "80%", height: "90px" }}
              className={classes.box}
            ></textarea>
            <button type="submit">submit</button>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;
