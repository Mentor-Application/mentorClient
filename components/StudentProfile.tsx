import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "../services/api.service";
import { Student } from "../interfaces/student";
import { User } from "../interfaces";

export const StudentProfile = ({ studentId, canEditProp }) => {
  let apiService: ApiService = new ApiService();
  var logedinstudent: Student = new Student();
  const [loggedinStudent, setLoggedinStudent] = useState<Student>(Object);
  const [isLoarding, setIsLoarding] = useState(true);
  const [canEdit, setCanEdit] = useState(false);
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
    setCanEdit(canEditProp);
    url = `student/${studentId}/profile`;
    const response = apiService
      .get(url)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
    response.then((res) => {
      const data = res;
      logedinstudent.deserialize(data, loggedinStudent);
      setIsLoarding(false);
    });
  }, []);

  const submitProfile = (values) => {
    setValue("studentId", studentId);
    // console.log(loggedInUser.email);
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

  let whiteBox = `${classes.forms}  d-flex justify-content-center col-12 col-xl-11`;

  if (isLoarding) {
    return <div>Loarding...</div>;
  }

  return (
    <div style={{ height: "90%" }} className={whiteBox}>
      <form
        style={{ overflowY: "scroll", overflowX: "hidden" }}
        onSubmit={handleSubmit(submitProfile)}
        className="row d-flex justify-content-around"
      >
        <div className="d-flex  flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-12">
          <Row className="d-flex justify-content-center">
            <label style={{ marginTop: "10%" }} className={classes.label}>
              Name {loggedinStudent.emailId}
            </label>
            <input
              {...register("studentName", {
                required: "Student Name Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              placeholder={loggedinStudent.studentName}
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
                {...register("branch", {
                  required: "Branch Required",
                })}
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
                placeholder={loggedinStudent.branch}
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
                style={{ width: "75%", height: "42.5px", marginLeft: "10%" }}
                className={classes.box}
                list="section"
                type="text"
                placeholder={loggedinStudent.section}
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
              {...register("dob", {
                required: "Date Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="date"
              placeholder={loggedinStudent.dob}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="dob" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Father's Mobile Number</label>
            <input
              {...register("fatherMobileNumber", {
                required: "MobileNumber Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              placeholder={loggedinStudent.fatherMobileNumber}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="fatherMobileNumber" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Religion</label>
            <input
              {...register("religion", {
                required: "Religion Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              placeholder={loggedinStudent.religion}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="religion" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Community</label>
            <input
              {...register("community", {
                required: "Community Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              placeholder={loggedinStudent.community}
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
                {...register("mode", {
                  required: "Mode Required",
                })}
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
                placeholder={loggedinStudent.studentType}
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
              <label className={classes.label}>Room No./Hostel No.</label>
              <input
                {...register("busRouteNumber", {
                  required: "Number Required",
                })}
                style={{ width: "65%", height: "42.5px", marginLeft: "15%" }}
                className={classes.box}
                type="text"
                placeholder={loggedinStudent.busRouteNumber}
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
              Email ID
            </label>
            <input
              {...register("personalEmail", {
                required: "EmailID Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="email"
              placeholder={loggedinStudent.emailId}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="emailId" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Student's Mobile Number</label>
            <input
              {...register("mobileNumber", {
                required: "Number Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              placeholder={loggedinStudent.mobileNumber}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="mobileNumber" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Period of Study </label>
            <input
              {...register("periodOfStudy", {
                required: "Period of Study Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              placeholder={loggedinStudent.periodOfStudy}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="periodOfStudy" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Mother's Mobile Number</label>
            <input
              {...register("motherMobileNumber", {
                required: "Number Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              placeholder={loggedinStudent.motherMobileNumber}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="motherMobileNumber" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Blood Group</label>
            <input
              {...register("bloodGroup", {
                required: "Blood Group Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              placeholder={loggedinStudent.bloodGroup}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="bloodGroup" />
            </span>
          </Row>
          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Address for Communication</label>
            <textarea
              {...register("address", {
                required: "Address Required",
              })}
              style={{ width: "80%", height: "90px" }}
              className={classes.box}
              placeholder={loggedinStudent.addressForCommunication}
            ></textarea>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="address" />
            </span>
          </Row>
          <Row>
            <div
              style={{ marginTop: "5%", marginLeft: "60%", marginBottom: "5%" }}
            >
              <button className={classes.icon} title="Submit" type="submit">
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
