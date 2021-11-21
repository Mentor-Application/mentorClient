import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import { useForm } from "react-hook-form";
import { browser } from "process";
import { ApiService } from "../services/api.service";

// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Select from 'react-select';

export const StudentProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isChecked, setIsChecked] = useState(true);
  const [branch, setBranch] = useState("");
  let apiService: ApiService = new ApiService();
  const submitProfile = (values) => {
    apiService.post("student/profile", values).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={classes.forms}>
      <form
        onSubmit={handleSubmit(submitProfile)}
        className="d-flex flex-row justify-content-around align-items-center"
      >
        <div className="d-flex flex-column col-lg-4">
          <Row>
            <label style={{ marginTop: "20px" }} className={classes.label}>
              Name
            </label>
            <input
              {...register("studentName")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
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
                  border: "2.5px solid #0166b2",
                  borderRadius: "25px",
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
                      setBranch("CSE");
                    }}
                    eventKey="option-1"
                    as="button"
                  >
                    <div>CSE</div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setBranch("IT");
                    }}
                    eventKey="option-2"
                    as="button"
                  >
                    IT
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setBranch("EEE");
                    }}
                    eventKey="option-3"
                    as="button"
                  >
                    EEE
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setBranch("ECE");
                    }}
                    eventKey="option-4"
                    as="button"
                  >
                    ECE
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setBranch("MECH");
                    }}
                    eventKey="option-5"
                    as="button"
                  >
                    MECH
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setBranch("BME");
                    }}
                    eventKey="option-6"
                    as="button"
                  >
                    BME
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setBranch("CIVIL");
                    }}
                    eventKey="option-7"
                    as="button"
                  >
                    CIVIL
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "} */}
            </Col>
            <Col>
              <label className={classes.label}>Section</label>
              <input
                {...register("section")}
                style={{ width: "65%", height: "42.5px" }}
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
              <label style={{ marginBottom: "5px" }} className={classes.label}>
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
              </Dropdown>{" "}
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

        <div className="d-flex flex-column col-lg-4">
          <Row>
            <label style={{ marginTop: "20px" }} className={classes.label}>
              Email ID
            </label>
            <input
              {...register("email")}
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
            <button type="submit"> submit</button>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;
