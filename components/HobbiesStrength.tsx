import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { User } from "../interfaces";
import { Hobbies } from "../interfaces/Hobbies";
import { StrengthAssessment } from "../interfaces/StrengthAssessment";
import { Student } from "../interfaces/student";
import { ErrorMessage } from "@hookform/error-message";

const HobbiesStrength = ({ studentId, canEditProp,editButton }) => {
  var logedinstudent: StrengthAssessment = new StrengthAssessment();
  const [loggedinStudent, setLoggedinStudent] =
    useState<StrengthAssessment>(Object);
  const [canEdit, setCanEdit] = useState(false);
  const [hobbies, setHobbies] = useState<Array<Hobbies>>([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  let url: string;

  useEffect(() => {
    url = `student/list/hobbies/${studentId}`;
    setCanEdit(canEditProp);
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0) {
          setHobbies([
            {
              hobbieId: "",
              hobbie: "",
            },
            {
              hobbieId: "",
              hobbie: "",
            },
            {
              hobbieId: "",
              hobbie: "",
            },
          ]);
        } else {
          if (data.length < 2) {
            while (data.length <= 3) {
              data.push({
                hobbieId: "",
                hobbie: "",
              });
            }
          }
          setHobbies(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    url = `student/list/strengthassessment/${studentId}`;
    console.log("hello");
    setCanEdit(canEditProp);
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        console.log(data);
        setLoggedinStudent(data);
        //logedinstudent.deserialize(data, loggedinStudent);
        console.log(loggedinStudent);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onsubmit = (values) => {
    console.log("hi");
    apiService
      .post(`student/${studentId}/strengthassessment`, values)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const edit=(e)=>{
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  }

  let apiService: ApiService = new ApiService();
  const updateHobbies = (e) => {
    setCanEdit(true);
    e.preventDefault();
    console.log(hobbies);
    apiService
      .post(`student/${studentId}/hobbies`, hobbies)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let whiteBox = `${classes.forms}  d-flex justify-content-center col-12 col-xl-11`;
  return (
    <div style={{ height: "90%" }} className={whiteBox}>
      <form
        style={{ overflowY: "scroll", overflowX: "hidden" }}
        className=" row d-flex justify-content-center col-12"
      >
        <div
          style={{ overflowX: "scroll" }}
          className="d-flex flex-column col-12"
        >
          <h4
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              marginTop: "5%",
            }}
          >
            Top three Hobbies{" "}
          </h4>
          {hobbies.map((items, index) => {
            return (
              <div
                style={{
                  marginLeft: "15%",
                  color: "#0166b2",
                  fontWeight: "bold",
                  overflowX: "scroll",
                  marginTop: "1%",
                }}
              >
                {index + 1}
                <input
                  key={items.hobbie}
                  disabled={canEdit}
                  onChange={(e) => {
                    items.hobbie = e.target.value;
                  }}
                  defaultValue={items.hobbie}
                  className={classes.inputgoals}
                  type="text"
                ></input>
              </div>
            );
          })}
          <h4
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              marginTop: "5%",
            }}
          >
            Strength Assessment{" "}
          </h4>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            I am{" "}
            <input
              {...register("iAm")}
              disabled={canEdit}
              className={classes.inputgoals}
              defaultValue={loggedinStudent.iAm}
            ></input>
          </div>

          <div
            style={{
              marginLeft: "15%",
              marginTop: "1%",
              color: "#0166b2",
              fontWeight: "bold",
            }}
          >
            I have{" "}
            <input
              {...register("iHave",{
                required:"Required",
              })}
              disabled={canEdit}
              className={classes.inputgoals}
              defaultValue={loggedinStudent.iHave}
            ></input>
            {/* <span style={{ color: "red", marginTop: "-5%", marginLeft: "15%" }}>
              {" "}
              <ErrorMessage errors={errors} name="iHave" />
            </span> */}
          </div>

          <div
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              fontWeight: "bold",
              marginTop: "1%",
            }}
          >
            I can{" "}
            <input
              {...register("iCan")}
              className={classes.inputgoals}
              disabled={canEdit}
              defaultValue={loggedinStudent.iCan}
            ></input>
          </div>
        </div>
        <div style={{ marginTop: "5%", marginLeft: "157%",marginBottom:'5%' }}>
      {editButton ? (
          <button
            className={classes.icon}
            onClick={edit}
            title="Edit"
          >
            <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
          </button>
        ) : null}
          <button
            className={classes.icon}
            type="submit"
            style={{marginLeft:'1%'}}
            onClick={(e) => {
              handleSubmit(onsubmit)();
              updateHobbies(e);
            }}
          >
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default HobbiesStrength;
