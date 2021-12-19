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
import { User } from "../interfaces";
import { LocalGuardian } from "../interfaces/LocalGuardian";

export const ParentGuardian = ({ studentId, canEditProp }) => {

  var logedinGuardian: LocalGuardian = new LocalGuardian();
  const [loggedinGuardian, setLoggedinguardian] = useState<LocalGuardian>(Object);

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
  const [canEdit, setCanEdit] = useState(false);

  let apiService: ApiService = new ApiService();
  let loggedInUser: User;
  let url: string;

  useEffect(() => {
    console.log("guardian");
    setCanEdit(canEditProp);
    url = `student/list/guardian/${studentId}`;
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
      logedinGuardian.deserialize(data, loggedinGuardian);
      console.log(loggedinGuardian);

    });
  }, []);

  const submitParentGuardian = (values) => {
    setValue("studentId", studentId);
    console.log(values);
    // const parentvalues = Object.assign(values);
    apiService
      .post(`student/${studentId}/guardian`, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // apiService
    // .post("student/parent",values)
    // .then((res)=>{
    //   console.log(res);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // });
  };

  const submitParent = (parentvalues) => {
    console.log("Hello");
    console.log(parentvalues);
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
              {...register("parentAddress", {
                required: "Address Required",
              })}
              style={{ width: "80%", height: "90px" }}
              className={classes.box}
            ></textarea>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="parentAddress" />
            </span>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Email ID</label>
            <input
              {...register("parentEmailId", {
                required: "Email ID Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="parentEmailId" />
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
            disabled={canEdit}
              {...register("guardianName")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              defaultValue={loggedinGuardian.guardianName}
            ></input>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Address for Communication</label>
            <textarea
              {...register("address")}
              style={{ width: "80%", height: "90px" }}
              className={classes.box}
              disabled={canEdit}
              defaultValue={loggedinGuardian.address}
            ></textarea>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Mobile No.</label>
            <input
              {...register("mobileNumber")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              disabled={canEdit}
              defaultValue={loggedinGuardian.mobileNumber}
            ></input>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Email ID</label>
            <input
              {...register("emailId")}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              disabled={canEdit}
              defaultValue={loggedinGuardian.emailId}
            ></input>
          </Row>
          <Row>
            <div
              style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "60%" }}
            >
              <button
                className={classes.icon}
                type="submit"
                onClick={submitParent}
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

export default ParentGuardian;
