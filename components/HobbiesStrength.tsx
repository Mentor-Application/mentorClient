import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { Hobbies } from "../interfaces/Hobbies";
import { StrengthAssessment } from "../interfaces/StrengthAssessment";

const HobbiesStrength = ({ studentId, canEditProp, editButton }) => {
  const [loggedinStudent, setLoggedinStudent] =
    useState<StrengthAssessment>(Object);
  const [canEdit, setCanEdit] = useState(false);
  const [strengthCanEdit, setStrengthCanEdit] = useState(false);
  const [hobbies, setHobbies] = useState<Array<Hobbies>>([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [sttoggleEdit, setStToggleEdit] = useState(true);
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
          setCanEdit(true);
          setHobbies(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
      if(loggedinStudent.iAm!==null){
        setStrengthCanEdit(true);
      }
      console.log("Hobbie",canEdit,"Strength",strengthCanEdit);
  }, []);

  useEffect(() => {
    url = `student/list/strengthassessment/${studentId}`;
    console.log("hello");

    apiService
      .get(url)
      .then((res) => {
        const data = res;
        console.log(data);
        if (data.length > 0) {
          setStrengthCanEdit(true);
        }
        //setStrengthCanEdit(true);
        setLoggedinStudent(data);
        //logedinstudent.deserialize(data, loggedinStudent);
        //console.log(loggedinStudent);
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

  const edit = (e) => {
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  };

  const strengthEdit = (e) => {
    e.preventDefault();
    setStrengthCanEdit(!sttoggleEdit);
    setStToggleEdit(!sttoggleEdit);
  };

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
          <div>
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
            <div
              style={{
                marginTop: "7%",
                marginLeft: "70%",
                marginBottom: "5%",
                width: "30%",
              }}
            >
              {editButton ? (
                <button className={classes.icon} onClick={edit} title="Edit">
                  <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
                </button>
              ) : null}
              <button
                hidden={canEdit}
                className={classes.icon}
                type="submit"
                style={{ marginLeft: "5%" }}
                onClick={(e) => {
                  updateHobbies(e);
                }}
              >
                <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
              </button>
            </div>
          </div>
          <h4
            style={{
              marginLeft: "15%",
              color: "#0166b2",
              marginTop: "0%",
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
              disabled={strengthCanEdit}
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
            I have
            <input
              {...register("iHave", {
                required: "Required",
              })}
              disabled={strengthCanEdit}
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
            I can{"  "}
            <input
              {...register("iCan")}
              className={classes.inputgoals}
              disabled={strengthCanEdit}
              defaultValue={loggedinStudent.iCan}
            ></input>
          </div>
          <div
            style={{
              marginTop: "7%",
              marginLeft: "70%",
              marginBottom: "5%",
              width: "30%",
            }}
          >
            {editButton ? (
              <button
                className={classes.icon}
                onClick={strengthEdit}
                title="Edit"
              >
                <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
              </button>
            ) : null}
            <button
              hidden={strengthCanEdit}
              className={classes.icon}
              type="submit"
              style={{ marginLeft: "5%" }}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(onsubmit)();
              }}
            >
              <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HobbiesStrength;
