import React, { useEffect, useState } from "react";
import { User } from "../../../interfaces";
import prof from "../../../public/grey.jpg";
import classes from "../../../styles/studentMainPage.module.css";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faUserTimes,
  faMinusCircle,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "../../../services/api.service";

type MenteeCardItems = {
  studentName: string;
  registerNumber: string;
  studentId: string;
};

export const Mentees = ({ sendProp }) => {
  let loggedInUser: User;
  let url: string;

  let apiService: ApiService = new ApiService();

  const [isEdit, setIsEdit] = useState(false);
  const [MenteeCardItems, setMenteeCardItems] = useState<
    Array<MenteeCardItems>
  >([]);
  const [removeMenteecards, setRemoveMenteecards] = useState([]);
  const [clearMentee, setClearMentee] = useState([]);
  useEffect(() => {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    apiService
      .get(`student/mentor/${loggedInUser.mentorId}`)
      .then((res) => {
        const data = res;
        setMenteeCardItems(data);
        setClearMentee(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleremoveMentees = (items, regNo) => {
    const newMentees = MenteeCardItems.filter(
      (item) => item.registerNumber !== regNo
    );
    setRemoveMenteecards([...removeMenteecards, items]);
    setMenteeCardItems(newMentees);
  };

  const Clear = () => {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    apiService
      .post(
        `student/mentor/${loggedInUser.mentorId}/editmentee`,
        MenteeCardItems
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setMenteeCardItems([]);
    alert("Mentees List have been cleared");
  };

  const Undo = () => {
    console.log(MenteeCardItems);
    setMenteeCardItems([...MenteeCardItems, ...removeMenteecards]);
    setRemoveMenteecards([]);
  };

  const Submit = () => {
    console.log("Submit");
    console.log(removeMenteecards);
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    apiService
      .post(
        `student/mentor/${loggedInUser.mentorId}/editmentee`,
        removeMenteecards
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Mentees List have been submitted");
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowY: "scroll" }}>
      <div style={{ marginTop: "7%" }}>
        {MenteeCardItems.length != 0 ? (
          <button
            className={classes.Editbtn}
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            Edit Mentees
          </button>
        ) : null}
        {isEdit ? (
          <button onClick={Clear} className={classes.Clearbtn}>
            Clear Mentees
          </button>
        ) : null}
        {MenteeCardItems.length != 0 ? (
          <div
            style={{
              overflowX: "auto",
              overflowY: "scroll",
              height: "90%",
              marginBottom: "10px",
              borderRadius: "0px",
            }}
            className={whiteBox}
          >
            {MenteeCardItems.map((items) => (
              <div>
                <div
                  style={{
                    background: "#0166b2",
                    opacity: "0.9",
                    borderRadius: "10px",
                    width: "25%",
                    outline: "black",
                    height: "200px",
                    flexDirection: "row",
                    float: "left",
                    marginLeft: "20px",
                    marginTop: "40px",
                    marginBottom: "5%",
                  }}
                  className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-column
        justify-content-center "
                >
                  <div>
                    {isEdit ? (
                      <button
                        style={{
                          top: "0px",
                          right: "0px",
                          background: "none",
                          marginLeft: "70%",
                          border: "none",
                        }}
                        onClick={() =>
                          handleremoveMentees(items, items.registerNumber)
                        }
                      >
                        <FontAwesomeIcon
                          style={{
                            opacity: "1",
                            marginTop: " 5%",
                            marginLeft: "20px",
                            color: "white",
                            alignItems: "center",
                          }}
                          icon={faMinusCircle}
                        />
                      </button>
                    ) : null}
                  </div>
                  {/* <Image width={15} height={115} src={prof}></Image> */}
                  <FontAwesomeIcon
                    style={{
                      fontSize: "400%",
                      color: "white",
                      marginLeft: "37%",
                      marginBottom: "5%",
                    }}
                    icon={faUserCircle}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "4%",
                    }}
                  >
                    {items.studentName}-{items.registerNumber}
                    <div>
                      <button
                        className={classes.editprofilebutton}
                        onClick={() =>
                          sendProp(items.studentId, true, "profile", true)
                        }
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                bottom: "0px",
                left: "600px",
                marginTop: "30%",
                marginBottom: "5%",
                marginLeft: "60%",
              }}
            >
              <Row>
                {" "}
                <div>
                  {isEdit ? (
                    <button
                      style={{ marginLeft: "40%", opacity: "0.9" }}
                      className={classes.Clearbtn}
                      onClick={Undo}
                    >
                      Undo
                    </button>
                  ) : null}

                  {isEdit ? (
                    <button
                      style={{ opacity: "0.9", marginLeft: "0%" }}
                      className={classes.Clearbtn}
                      onClick={Submit}
                    >
                      Submit
                    </button>
                  ) : null}
                </div>
              </Row>
            </div>
          </div>
        ) : (
          <div
            style={{
              overflowX: "auto",
              overflowY: "scroll",
              height: "20%",
              marginBottom: "10px",
              borderRadius: "30px",
            }}
            className={whiteBox}
          >
            <h2 className={classes.nomentees}>No Mentees Added</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentees;
