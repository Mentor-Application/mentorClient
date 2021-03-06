import React, { useEffect, useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";
import Link from "next/dist/client/link";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import DisciplinaryAction from "../../../components/DisciplinaryAction";
import CoCurricular from "../../../components/CoCurricular";
import { Row } from "react-bootstrap";
import OverallAssesment from "../../../components/OverallAssesment";
import Btech from "../../../components/Btech";
import { ApiService } from "../../../services/api.service";
import { Additional } from "../../../interfaces/Additional";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export const AdditionalDetails = ({ canEdit, studentId, editButton }) => {
  var logedinStudent: Additional = new Additional();
  const [loggedinStudent, setloggedinStudent] = useState<Additional>(Object);
  let apiService: ApiService = new ApiService();
  let url: string;
  useEffect(() => {
    url = `additional/${studentId}/list`;
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        setloggedinStudent(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { register, handleSubmit, getValues, setValue } = useForm();

  const submitProfile = (values) => {
    console.log(values);
    apiService
      .post("additional/update", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        background: "#ffffff",
        height: "84%",
        marginTop: "70px",
        overflowY: "scroll",
        marginBottom: "5%",
        marginLeft: "5%",
        borderRadius: "30px",
      }}
      className="col-11 c"
    >
      <div
        style={{ height: "50%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <DisciplinaryAction
          canEditProp={canEdit}
          studentId={studentId}
          editButton={editButton}
        ></DisciplinaryAction>{" "}
      </div>

      <div
        style={{ height: "50%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <CoCurricular
          canEditProp={canEdit}
          studentId={studentId}
          editButton={editButton}
        ></CoCurricular>{" "}
      </div>

      <div
        style={{ height: "50%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <OverallAssesment
          canEditProp={canEdit}
          studentId={studentId}
          editButton={editButton}
        ></OverallAssesment>{" "}
      </div>

      <div
        style={{ height: "90%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <Btech
          canEditProp={canEdit}
          studentId={studentId}
          editButton={editButton}
        ></Btech>{" "}
      </div>
    </div>
  );
};

export default AdditionalDetails;
