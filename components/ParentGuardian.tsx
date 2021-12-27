import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ApiService } from "../services/api.service";
import { User } from "../interfaces";
import { LocalGuardian } from "../interfaces/LocalGuardian";
import { Parent } from "../interfaces/Parent";

export const ParentGuardian = ({ studentId, canEditProp, editButton }) => {
  var logedinGuardian: LocalGuardian = new LocalGuardian();
  const [loggedinGuardian, setLoggedinguardian] =
    useState<LocalGuardian>(Object);
  const [loggedinParent, setLoggedinParent] = useState<Parent>(Object);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [parentToggle, setParentToggle] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const {
    register: parentRegister,
    handleSubmit: parentHandleSubmit,
    setValue: parentSetValue,
  } = useForm();

  const [parentCanEdit, setParentCanEdit] = useState(false);
  const [guardianCanEdit, setGuardianCanEdit] = useState(false);

  let apiService: ApiService = new ApiService();
  let loggedInUser: User;
  let url: string;

  useEffect(() => {
    setParentCanEdit(canEditProp);
    setGuardianCanEdit(canEditProp);
    url = `student/list/guardian/${studentId}`;
    const response = apiService
      .get(url)
      .then((res) => {
        const data = res;

        if (data) {
          setGuardianCanEdit(true);
        }
        setValue("guardianName", data.guardianName);
        setValue("address", data.address);
        setValue("mobileNumber", data.mobileNumber);
        setValue("emailId", data.emailId);
        setLoggedinguardian(data);
      })
      .catch((err) => {
        console.log(err);
      });

    const response2 = apiService
      .get(`student/list/parent/${studentId}`)
      .then((res) => {
        const data = res;
        if (data) {
          setParentCanEdit(true);
        }

        parentSetValue("parentName", data.parentName);
        parentSetValue("parentAddress", data.parentAddress);
        parentSetValue("parentEmailId", data.parentEmailId);
        setLoggedinParent(data);
      })
      .catch((err) => {
        console.log(err);
      });
    response2.then((res) => {
      // if(data.parentName!==null){
      //   setParentCanEdit(true);
      // }
      // console.log(parentCanEdit);
      // console.log("Guardian",guardianCanEdit);
    });
  }, []);

  const submitGuardian = (values) => {
    //console.log(values);
    apiService
      .post(`student/${studentId}/guardian`, values)
      .then((res) => {
        setGuardianCanEdit(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitParent = (parentvalues) => {
    //console.log(parentvalues);
    apiService
      .post("student/parent", parentvalues)
      .then((res) => {
        console.log(res);
        setParentCanEdit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const parentEdit = (e) => {
    e.preventDefault();
    setParentCanEdit(!parentToggle);
    setParentToggle(!parentToggle);
  };

  const guardianEdit = (e) => {
    e.preventDefault();
    setGuardianCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  };

  let whiteBox = `${classes.forms}  d-flex justify-content-center col-12 col-xl-11`;

  return (
    <div style={{ height: "100%" }} className={whiteBox}>
      <form
        style={{ overflowY: "scroll" }}
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
              {...parentRegister("parentName", {
                required: "Parent Name Required",
              })}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
              disabled={parentCanEdit}
              defaultValue={loggedinParent.parentName}
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="parentName" />
            </span>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Address for Communication</label>
            <textarea
              {...parentRegister("parentAddress", {
                required: "Address Required",
              })}
              style={{ width: "80%", height: "90px" }}
              className={classes.box}
              disabled={parentCanEdit}
              defaultValue={loggedinParent.parentAddress}
            ></textarea>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="parentAddress" />
            </span>
          </Row>

          <Row className="d-flex justify-content-center">
            <label className={classes.label}>Email ID</label>
            <input
              {...parentRegister("parentEmailId", {
                required: "Email ID Required",
              })}
              disabled={parentCanEdit}
              defaultValue={loggedinParent.parentEmailId}
              style={{ width: "80%" }}
              className={classes.box}
              type="text"
            ></input>
            <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="parentEmailId" />
            </span>
          </Row>

          <Row>
            <div
              style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "70%" }}
            >
              {editButton ? (
                <button
                  className={classes.icon}
                  onClick={parentEdit}
                  title="Edit"
                  style={{ marginRight: "10px" }}
                >
                  <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
                </button>
              ) : null}
              <button
                hidden={parentCanEdit}
                className={classes.icon}
                onClick={(e) => {
                  e.preventDefault();
                  parentSetValue("studentId", studentId);
                  parentHandleSubmit(submitParent)();
                }}
              >
                <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
              </button>
            </div>
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
              disabled={guardianCanEdit}
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
              disabled={guardianCanEdit}
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
              disabled={guardianCanEdit}
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
              disabled={guardianCanEdit}
              defaultValue={loggedinGuardian.emailId}
            ></input>
          </Row>
          <Row>
            <div
              style={{ marginTop: "5%", marginBottom: "4%", marginLeft: "70%" }}
            >
              {editButton ? (
                <button
                  className={classes.icon}
                  onClick={guardianEdit}
                  title="Edit"
                  style={{ marginRight: "10px" }}
                >
                  <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
                </button>
              ) : null}
              <button
                hidden={guardianCanEdit}
                className={classes.icon}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(submitGuardian)();
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

export default ParentGuardian;
