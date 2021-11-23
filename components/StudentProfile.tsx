import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import { ApiService } from "../services/api.service";

// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Select from 'react-select';

export const StudentProfile = () => {
  const { register, handleSubmit, setValue, getValues,setError,formState:{errors}} = useForm();
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

  let whiteBox = `${classes.forms}  d-flex justify-content-center col-xl-11`;
  return (
    <div className={whiteBox}>
      <form
        style={{ marginLeft: "7%", overflowY: "scroll" }}
        onSubmit={handleSubmit(submitProfile)}
        className="row d-flex justify-content-around"
      >
        <div className="d-flex flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-11">
          <Row>
            <label style={{ marginTop: "20px" }} className={classes.label}>
              Name
            </label>
            <input
              {...register("studentName",{required:"Student Name Required"})}
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

          <Row>
            <div className="radio">
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
                Female
              </label>
            </div>
          </Row>
          <Row>
            <Col>
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
              {/* <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  style={{
                    color: "#0166b2",
                    backgroundColor: "white",
                    border: "2.5px solid #0166b2",
                    borderRadius: "25px",
                    width: "65%",
                    height: "40px",
                  }}
                >
                  {branch}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown"
                  id="dropdown-menu-align-right"
                  style={{
                    color: "#0166b2",
                    backgroundColor: "white",
                    borderRadius: "25px",
                  }}
                >
                  <Dropdown.Item
                    onClick={() => {
                      setValue("branch", "CSE");
                      setBranch("CSE");
                    }}
                    eventKey="option-1"
                    as="button"
                  >
                    <div>CSE</div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setValue("branch", "IT");
                      setBranch("IT");
                    }}
                    eventKey="option-2"
                  >
                    IT
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setValue("branch", "EEE");
                      setBranch("EEE");
                    }}
                    eventKey="option-3"
                    as="button"
                  >
                    EEE
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setValue("branch", "ECE");
                      setBranch("ECE");
                    }}
                    eventKey="option-4"
                    as="button"
                  >
                    ECE
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setValue("branch", "MECH");
                      setBranch("MECH");
                    }}
                    eventKey="option-5"
                    as="button"
                  >
                    MECH
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setValue("branch", "BME");
                      setBranch("BME");
                    }}
                    eventKey="option-6"
                    as="button"
                  >
                    BME
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setValue("branch", "CIVIL");
                      setBranch("CHEM");
                    }}
                    eventKey="option-7"
                    as="button"
                  >
                    CIVIL
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Col>
            <Col>
              <label className={classes.label}>Section</label>
              <input
                {...register("section")}
                style={{ width: "75%", height: "42.5px" }}
                className={classes.box}
                type="text"
              ></input>
            </Col>
          </Row>
          <Row>
            <label className={classes.label}>Date of Birth </label>
            <input
              {...register("dob")}
              style={{ width: "80%" }}
              className={classes.box}
              type="date"
            ></input>
          </Row>
          <Row>
            <label className={classes.label}>Father's Mobile Number</label>
            <input
              {...register("fatherMobileNumber")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row>
            <label className={classes.label}>Religion</label>
            <input
              {...register("religion")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row>
            <label className={classes.label}>Community</label>
            <input
              {...register("community")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row>
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
                }}
                list="mode"
                type="text"
              ></input>

              <datalist id="mode">
                <option value="Hosteller" />
                <option value="Day Scholar" />
              </datalist>
              {/* <label style={{ marginBottom: "5px" }} className={classes.label}>
                Hostel / Day Scholar
              </label>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  style={{
                    backgroundColor: "white",
                    border: "2.5px solid #0166b2",
                    borderRadius: "25px",
                    width: "65%",
                    height: "40px",
                  }}
                >
                  {" "}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown"
                  id="dropdown-menu-align-right"
                  style={{ backgroundColor: "white", borderRadius: "25px" }}
                >
                  <Dropdown.Item eventKey="choice-1">Hosteller</Dropdown.Item>
                  <Dropdown.Item eventKey="choice-2">Day Scholar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "} */}
            </Col>

            <Col>
              <label className={classes.label}>Room No./Hostel No.</label>
              <input
                {...register("busRouteNumber")}
                style={{ width: "65%", height: "42.5px" }}
                className={classes.box}
                type="text"
              ></input>
            </Col>
          </Row>
        </div>

        <div className="d-flex flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-11">
          <Row>
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
          <Row>
            <label className={classes.label}>Student's Mobile Number</label>
            <input
              {...register("mobileNumber")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row>
            <label className={classes.label}>Period of Study </label>
            <input
              {...register("periodOfStudy")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row>
            <label className={classes.label}>Mother's Mobile Number</label>
            <input
              {...register("motherMobileNumber")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row>
            <label className={classes.label}>Blood Group</label>
            <input
              {...register("bloodGroup")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row>
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
