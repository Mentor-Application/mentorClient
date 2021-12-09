import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ApiService } from "../services/api.service";

export const ParentGuardian = () => {
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

  let apiService:ApiService = new ApiService();

  const submitParentGuardian= (values)=> {
    console.log(values)
    apiService
    .post("student/guardian",values)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });

  };

  let whiteBox = `${classes.forms}  d-flex justify-content-center col-12 col-xl-11`;

  return (
    <div style={{ height: "100%" }} className={whiteBox}>
      <form
        style={{ overflowY: "scroll" }}
        onSubmit={handleSubmit(submitParentGuardian)}
        className="row d-flex justify-content-around"
      >
        <div className="d-flex flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-12">
          <Row className="d-flex justify-content-center">
            <h3 style={{ marginTop: "10%" }} className={classes.heading}>
              Parent
            </h3>
          </Row>

          <Row className="d-flex justify-content-center">
            <label style={{ marginTop: "20px" }} className={classes.label}>
              Name
            </label>
            <input
              {...register("parentName", {
                required: "Parent Name Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="parentName" />
            </span>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Address for Communication</label>
            <textarea
              {...register("addresscomm", {
                required: "Address Required",
              })}
              style={{ width: "80%", height: "90px" }}
              className={classes.box}
            ></textarea>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="addresscomm" />
            </span>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Email ID</label>
            <input
              {...register("emailIde", {
                required: "Email ID Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="emailIde" />
            </span>
          </Row>
        </div>

        <div className="d-flex flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-11">
          <Row className="d-flex justify-content-center">
            <h4 style={{ marginTop: "10%" }} className={classes.heading}>
              Local Guardian(for hosteller)
            </h4>
          </Row>

          <Row className="d-flex justify-content-center">
            <label style={{ marginTop: "20px" }} className={classes.label}>
              Name
            </label>
            <input
              {...register("guardianName")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Address for Communication</label>
            <textarea
              {...register("addresscom")}
              style={{ width: "80%", height: "90px" }}
              className={classes.box}
            ></textarea>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Mobile No.</label>
            <input
              {...register("mobileNumber")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Email ID</label>
            <input
              {...register("emailId")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
          </Row>
          <Row>
            <div
              style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "60%" }}
            >
              <button className={classes.icon} type="submit">
                <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
              </button>
            </div>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default ParentGuardian;
