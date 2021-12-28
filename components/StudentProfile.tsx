import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "../services/api.service";
import { Student } from "../interfaces/student";
import { User } from "../interfaces";
import Popup from "./Popup";

export const StudentProfile = ({ studentId, canEditProp, editButton }) => {
  let apiService: ApiService = new ApiService();
  var logedinstudent: Student = new Student();
  const [loggedinStudent, setLoggedinStudent] = useState<Student>(Object);
  const [isLoarding, setIsLoarding] = useState(true);
  const [canEdit, setCanEdit] = useState(false);
  const [isMale, setMale] = useState(false);
  const [isFemale, setFemale] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [displayPopup, setDisplayPopup] = useState(false);
  let loggedInUser: User;
  let url: string;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setValue("studentId", studentId);
    setCanEdit(canEditProp);
    url = `student/${studentId}/profile`;
    const response = apiService
      .get(url)
      .then((res) => {
        const data = res;
        console.log(data);
        if (data.studentName) {
          setCanEdit(true);
          console.log("Boolean1", canEdit);
        }

        logedinstudent.setValue(setValue, data);
        logedinstudent.deserialize(data, loggedinStudent);
        if (data.gender === "M") {
          setMale(true);
        } else {
          setFemale(true);
        }
        setIsLoarding(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // response.then((res) => {});
    // if(loggedinStudent.studentName!==null){
    //   setCanEdit(true);
    // }
    // console.log("Boolean",canEdit)
  }, []);

  const edit = (e) => {
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  };

  const submitProfile = (values) => {
    setLoggedinStudent(values);
    setIsLoarding(false);
    // console.log(loggedInUser.email);
    console.log(values);
    apiService
      .post("student/profile", values)
      .then((res) => {
        //console.log(res);
        setCanEdit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let whiteBox = `${classes.forms}  d-flex justify-content-center col-12 col-xl-11`;

  if (isLoarding) {
    return <div>Loarding...</div>;
  }

  const popSubmit = () => {
    handleSubmit(submitProfile)();
  };

  return (
    <div style={{ height: "90%" }} className={whiteBox}>
      {displayPopup && (
        <Popup handleSubmit={popSubmit} closePopup={setDisplayPopup}></Popup>
      )}
      <form
        style={{ overflowY: "scroll", overflowX: "hidden" }}
        className="row d-flex justify-content-around"
      >
        <h3
          style={{ marginTop: "5%", marginBottom: "2%" }}
          className={classes.heading}
        >
          Student Profile
        </h3>
        <div className="d-flex  flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-12">
          <Row className="d-flex justify-content-center">
            <label style={{ marginTop: "10%" }} className={classes.label}>
              Name
            </label>
            <input
              disabled={canEdit}
              {...register("studentName", {
                required: "Student Name Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              key={loggedinStudent.studentName}
              defaultValue={loggedinStudent.studentName}
            />
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="studentName" />
            </span>
          </Row>

          <Row style={{ marginTop: "2%", marginLeft: "-10%" }}>
            <div className="radio d-flex">
              <label className={classes.label}>
                <input
                  disabled={canEdit}
                  checked={isMale}
                  {...register("gender")}
                  onChange={() => {
                    setMale(true);
                    setFemale(false);
                  }}
                  value="M"
                  type="radio"
                ></input>
                <span> </span>
                Male
              </label>

              <label style={{ marginLeft: "35%" }} className={classes.label}>
                <input
                  checked={isFemale}
                  disabled={canEdit}
                  {...register("gender")}
                  onChange={() => {
                    setFemale(true);
                    setMale(false);
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
                {...register("branch", {
                  required: "Branch Required",
                })}
                disabled={canEdit}
                style={{
                  backgroundColor: "white",
                  border: "1.5px solid #0166b2",
                  borderRadius: "15px",
                  width: "80%",
                  height: "40px",
                  marginLeft: "12%",
                }}
                list="branches"
                type="text"
                key={loggedinStudent.branch}
                defaultValue={loggedinStudent.branch}
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
              <span
                style={{ color: "red", marginTop: "-1%", marginLeft: "15%" }}
              >
                {" "}
                <ErrorMessage errors={errors} name="branch" />
              </span>
            </Col>
            <Col
              style={{ textAlign: "start" }}
              className="d-flex flex-column justify-content-center align-items-centers"
            >
              <label className={classes.label}>Section</label>
              <input
                {...register("section", {
                  required: "Section Required",
                })}
                disabled={canEdit}
                style={{ width: "75%", height: "42.5px", marginLeft: "10%" }}
                className={classes.box}
                list="section"
                type="text"
                defaultValue={loggedinStudent.section}
              ></input>
              <datalist id="section">
                <option value="A" />
                <option value="B" />
              </datalist>
              <span
                style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}
              >
                {" "}
                <ErrorMessage errors={errors} name="section" />
              </span>
            </Col>
          </Row>
          <Row
            style={{ marginTop: "2%" }}
            className="d-flex justify-content-center"
          >
            <label className={classes.label}>Date of Birth </label>
            <input
              disabled={canEdit}
              {...register("dob", {
                required: "Date Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="date"
              defaultValue={loggedinStudent.dob}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="dob" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Father's Mobile Number</label>
            <input
              disabled={canEdit}
              {...register("fatherMobileNumber", {
                required: "MobileNumber Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinStudent.fatherMobileNumber}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="fatherMobileNumber" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Religion</label>
            <input
              disabled={canEdit}
              {...register("religion", {
                required: "Religion Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinStudent.religion}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="religion" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Community</label>
            <input
              disabled={canEdit}
              {...register("community", {
                required: "Community Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinStudent.community}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="community" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col>
              <label className={classes.label}>Hosteller/Day Scholar</label>
              <input
                disabled={canEdit}
                {...register("studentType", {
                  required: "Mode Required",
                })}
                style={{
                  backgroundColor: "white",
                  border: "1.5px solid #0166b2",
                  borderRadius: "15px",
                  width: "80%",
                  height: "40px",
                  marginLeft: "15%",
                }}
                list="mode"
                type="text"
                defaultValue={loggedinStudent.studentType}
              ></input>

              <datalist id="mode">
                <option value="Hosteller" />
                <option value="Day Scholar" />
              </datalist>
              <span
                style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}
              >
                {" "}
                <ErrorMessage errors={errors} name="mode" />
              </span>
            </Col>

            <Col>
              <label className={classes.label}>Room No./Bus No.</label>
              <input
                disabled={canEdit}
                {...register("busRouteNumber", {
                  required: "Number Required",
                })}
                style={{ width: "65%", height: "42.5px", marginLeft: "15%" }}
                className={classes.box}
                type="text"
                defaultValue={loggedinStudent.busRouteNumber}
              ></input>
              <span
                style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}
              >
                {" "}
                <ErrorMessage errors={errors} name="busRouteNumber" />
              </span>
            </Col>
          </Row>
        </div>
        {/* <div className={middileLine}></div> */}
        <div className="d-flex flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-12">
          <Row className="d-flex justify-content-center">
            <label style={{ marginTop: "10%" }} className={classes.label}>
              Register Number
            </label>
            <input
              disabled={canEdit}
              {...register("registerNumber", {
                required: "Register Number Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinStudent.registerNumber}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="registerNumber" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Email ID</label>
            <input
              disabled={canEdit}
              {...register("personalEmail", {
                required: "EmailID Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="email"
              defaultValue={loggedinStudent.personalEmail}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="emailId" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Student's Mobile Number</label>
            <input
              disabled={canEdit}
              {...register("mobileNumber", {
                required: "Number Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinStudent.mobileNumber}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="mobileNumber" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Period of Study </label>
            <input
              disabled={canEdit}
              {...register("periodOfStudy", {
                required: "Period of Study Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinStudent.periodOfStudy}
              list="batch"
            ></input>
            <datalist id="batch">
              <option value="2018-2022" />
              <option value="2019-2023" />
              <option value="2020-2024" />
              <option value="2021-2025" />
              <option value="2022-2026" />
              <option value="2023-2027" />
              <option value="2024-2028" />
              <option value="2025-2029" />
              <option value="2026-2030" />
              <option value="2027-2031" />
              <option value="2028-2032" />
              <option value="2029-2033" />
            </datalist>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="periodOfStudy" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Mother's Mobile Number</label>
            <input
              disabled={canEdit}
              {...register("motherMobileNumber", {
                required: "Number Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinStudent.motherMobileNumber}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="motherMobileNumber" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Blood Group</label>
            <input
              disabled={canEdit}
              {...register("bloodGroup", {
                required: "Blood Group Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinStudent.bloodGroup}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="bloodGroup" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Address for Communication</label>
            <textarea
              disabled={canEdit}
              {...register("addressForCommunication", {
                required: "Address Required",
              })}
              style={{ width: "80%", height: "90px" }}
              className={classes.box}
              defaultValue={loggedinStudent.addressForCommunication}
            ></textarea>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="address" />
            </span>
          </Row>
          <Row>
            <div
              style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "60%" }}
            >
              {editButton ? (
                <button
                  className={classes.icon}
                  onClick={edit}
                  title="Edit"
                  style={{ marginRight: "10px" }}
                >
                  <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
                </button>
              ) : null}
              <button
                hidden={canEdit}
                className={classes.icon}
                title="Submit"
                onClick={(e) => {
                  e.preventDefault();
                  setDisplayPopup(true);

                  // handleSubmit(submitProfile)();
                }}
              >
                <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
              </button>
            </div>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;
