import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Additional } from "../interfaces/Additional";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";

const Btech = ({ canEditProp, studentId, editButton }) => {
  var logedinStudent: Additional = new Additional();
  const [additional, setadditional] = useState<Additional>(Object);
  let apiService: ApiService = new ApiService();
  const [toggleEdit, setToggleEdit] = useState(true);
  const [canEdit, setCanEdit] = useState(false);

  let url: string;
  useEffect(() => {
    setCanEdit(canEditProp);
    url = `additional/${studentId}/list`;
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0 || data === undefined) {
          setadditional({
            studentId: "",
            percentage: "",
            className: "",
            rank: "",
            graduateStudy: "",
            careerInfo: "",
          });
        } else {
          setCanEdit(true);
          setValue("studentId", data.studentId);
          setValue("percentage", data.percentage);
          setValue("className", data.className);
          setValue("rank", data.rank);
          setValue("graduateStudy", data.graduateStudy);
          setValue("careerInfo", data.careerInfo);
          setadditional(data);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { register, handleSubmit, getValues, setValue } = useForm();

  const edit = (e) => {
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  };

  const submitProfile = (values) => {
    console.log(values);
    apiService
      .post("additional/update", values)
      .then((res) => {
        setCanEdit(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ height: "100%" }} className={classes.forms}>
      <form
        onSubmit={handleSubmit(submitProfile)}
        className="justify-content-around  d-flex flex-column "
      >
        <div style={{ marginLeft: "20px" }} className={classes.discipline}>
          B.E/B.Tech. result (Overall) :
        </div>
        <div className="row">
          <div
            className="col-md-5 col-lg-3"
            style={{
              marginTop: "1.5%",
              color: "#0166b2",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            Percentage:{" "}
            <input
              {...register("percentage")}
              disabled={canEdit}
              defaultValue={additional.percentage}
              className={classes.credits}
            ></input>
          </div>
          <div
            className="col-md-5 col-lg-3"
            style={{
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1.5%",
              marginLeft: "20px",
            }}
          >
            Class :{" "}
            <input
              {...register("className")}
              disabled={canEdit}
              defaultValue={additional.className}
              className={classes.credits}
            ></input>
          </div>
          <div
            className="col-md-5 col-lg-3"
            style={{
              marginLeft: "20px",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            Rank :{" "}
            <input
              {...register("rank")}
              disabled={canEdit}
              defaultValue={additional.rank}
              className={classes.credits}
            ></input>
          </div>
          <label
            style={{ marginTop: "8%", marginLeft: "20px" }}
            className={classes.placement}
          >
            Career (PLacement) Information :
          </label>
          <textarea
            {...register("careerInfo")}
            disabled={canEdit}
            defaultValue={additional.careerInfo}
            style={{
              width: "90%",
              height: "100px",
              marginLeft: "30px",
              marginBottom: "25px",
              outlineColor: "black",
              borderRadius: "10px",
            }}
            className={classes.box}
          ></textarea>
          <label style={{ marginLeft: "20px" }} className={classes.placement}>
            Graduate Study :
          </label>
          <textarea
            {...register("graduateStudy")}
            disabled={canEdit}
            defaultValue={additional.graduateStudy}
            style={{
              width: "90%",
              height: "100px",
              marginLeft: "30px",
              marginBottom: "25px",
              outlineColor: "black",
              borderRadius: "10px",
            }}
            className={classes.box}
          ></textarea>
        </div>
      </form>
      <div style={{ marginTop: "5%", marginLeft: "83%" }}>
        {editButton ? (
          <button
            className={classes.icon}
            onClick={edit}
            title="Edit"
            // style={{marginLeft:'60%'}}
          >
            <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
          </button>
        ) : null}
        <button
          hidden={canEdit}
          style={{ marginLeft: "50%" }}
          onClick={() => {
            setValue("studentId", studentId);
            handleSubmit(submitProfile)();
          }}
          className={classes.icon}
        >
          <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default Btech;
