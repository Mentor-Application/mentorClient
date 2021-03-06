import React, { useEffect, useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../services/api.service";
import { Dropdown, DropdownButton, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { MentorMeeting } from "../../../interfaces/MenorMeeting";

export const MentorMeetingDetails = ({
  studentId,
  canEditProp,
  editButton,
}) => {
  const [mentorMeetingDetails, setMentor] = useState<Array<MentorMeeting>>([]);
  const [semesterName, setSemesterName] = useState("semester1");
  const [additionalInfo, setAdditionalInfo] = useState("");
  let apiService: ApiService = new ApiService();
  const [canEdit, setCanEdit] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(true);
  let whiteBox = `${classes.forms} col-12 col-xl-11`;
  let url: string;
  useEffect(() => {
    setCanEdit(canEditProp);
    url = `mentormeeting/${studentId}/${semesterName}/list`;
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0) {
          setMentor([
            {
              studentId: studentId,
              semesterName: semesterName,
              meetingDate: "",
              meetingTime: "",
              focusOnDiscussion: "",
              remarks: "",
              additionalinfo: "",
            },
            {
              studentId: studentId,
              semesterName: semesterName,
              meetingDate: "",
              meetingTime: "",
              focusOnDiscussion: "",
              remarks: "",
              additionalinfo: "",
            },
            {
              studentId: studentId,
              semesterName: semesterName,
              meetingDate: "",
              meetingTime: "",
              focusOnDiscussion: "",
              remarks: "",
              additionalinfo: "",
            },
            {
              studentId: studentId,
              semesterName: semesterName,
              meetingDate: "",
              meetingTime: "",
              focusOnDiscussion: "",
              remarks: "",
              additionalinfo: "",
            },
            {
              studentId: studentId,
              semesterName: semesterName,
              meetingDate: "",
              meetingTime: "",
              focusOnDiscussion: "",
              remarks: "",
              additionalinfo: "",
            },
          ]);
        } else {
          if (data.length < 5) {
            while (data.length <= 5) {
              data.push({
                studentId: studentId,
                semesterName: semesterName,
                meetingDate: "",
                meetingTime: "",
                focusOnDiscussion: "",
                remarks: "",
                additionalinfo: "",
              });
            }
          }
          setCanEdit(true);
          setMentor(data);
          setAdditionalInfo(data[0].additionalinfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [semesterName]);

  const edit = (e) => {
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  };

  const updateMarks = (e) => {
    e.preventDefault();
    mentorMeetingDetails.forEach((items) => {
      items.additionalinfo = additionalInfo;
    });
    apiService
      .post("mentormeeting/update", mentorMeetingDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
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
      className="col-11"
    >
      <div>
        <Dropdown>
          <Dropdown.Toggle
            id="dropwdown-custom-1"
            style={{
              color: "white",
              backgroundColor: "#0166b2",
              border: "2.5px solid #0166b2",
              marginLeft: "5%",
              fontWeight: "bold",
              fontSize: "100%",
              marginTop: "5%",
              borderRadius: "15px",
              width: "150px",
              height: "40px",
            }}
          >
            {semesterName}
          </Dropdown.Toggle>
          <Dropdown.Menu
            id="dropdown-menu-align-right"
            style={{ background: "white", color: "#0166b2" }}
            className="DropDown"
          >
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="#/Semester1"
              onClick={() => {
                setSemesterName("semester1");
              }}
            >
              Semester-1
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="#/Semester2"
              onClick={() => {
                setSemesterName("semester2");
              }}
            >
              Semester-2
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="#/Semester3"
              onClick={() => {
                setSemesterName("semester3");
              }}
            >
              Semester-3
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="#/Semester4"
              onClick={() => {
                setSemesterName("semester4");
              }}
            >
              Semester-4
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="#/Semester5"
              onClick={() => {
                setSemesterName("semester5");
              }}
            >
              Semester-5
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="#/Semester6"
              onClick={() => {
                setSemesterName("semester6");
              }}
            >
              Semester-6
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="#/Semester7"
              onClick={() => {
                setSemesterName("semester7");
              }}
            >
              Semester-7
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="#/Semester8"
              onClick={() => {
                setSemesterName("semester8");
              }}
            >
              Semester-8
            </Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
        <div
          className={classes.internal}
          style={{ color: "#0166b2", marginTop: "3%" }}
        >
          Mentor Meeting Details{" "}
        </div>
        <div
          style={{ height: "100%" }}
          className="d-flex flex-column justify-content-center"
        >
          <form
            style={{ overflowX: "auto", marginTop: "3%" }}
            className="d-flex justify-content-center align-items-center "
          >
            <div className="table-responsive col-10 col-sm-9 col-md-10 col-lg-11">
              <table className="table table-borderless">
                <tr>
                  <th style={{ width: "15%" }} className={classes.tablehead}>
                    Date
                  </th>
                  <th style={{ width: "20%" }} className={classes.tablehead}>
                    Time
                  </th>
                  <th className={classes.tablehead}>Focus of Discussion</th>
                  <th hidden={!editButton} className={classes.tablehead}>Remarks</th>
                </tr>
                {mentorMeetingDetails.map((items) => {
                  return (
                    <tr>
                      <td style={{ height: "50px" }} className={classes.table}>
                        <input
                          disabled={canEdit}
                          type="date"
                          onChange={(e) => {
                            items.meetingDate = e.target.value;
                          }}
                          key={items.meetingDate}
                          defaultValue={items.meetingDate}
                          className={classes.inputbox}
                        />
                      </td>
                      <td className={classes.table}>
                        <input
                          disabled={canEdit}
                          type="time"
                          onChange={(e) => {
                            items.meetingTime = e.target.value;
                          }}
                          key={items.meetingTime}
                          defaultValue={items.meetingTime}
                          className={classes.inputbox}
                        />
                      </td>
                      <td className={classes.table}>
                        <input
                          disabled={canEdit}
                          onChange={(e) => {
                            items.focusOnDiscussion = e.target.value;
                          }}
                          key={items.focusOnDiscussion}
                          defaultValue={items.focusOnDiscussion}
                          className={classes.inputbox}
                        />
                      </td>
                      <td hidden={!editButton} className={classes.table}>
                        <input
                          disabled={canEdit}
                          onChange={(e) => {
                            items.remarks = e.target.value;
                          }}
                          key={items.remarks}
                          defaultValue={items.remarks}
                          className={classes.inputbox}
                        />
                      </td>
                    </tr>
                  );
                })}
              </table>
              <div
                hidden={!editButton}
                style={{
                  color: "#0166b2",
                  fontWeight: "bold",
                  marginTop: "5%",
                }}
              >
                Additional Information :
              </div>
              <textarea
                hidden={!editButton}
                disabled={canEdit}
                style={{ height: "150px", width: "600px", marginTop: "2%" }}
                className={classes.box}
                defaultValue={additionalInfo || ""}
                onChange={(e) => {
                  setAdditionalInfo(e.target.value);
                }}
              ></textarea>
            </div>
          </form>
          <div
            style={{ marginLeft: "83%", marginTop: "3%", marginBottom: "3%" }}
          >
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
              style={{ marginLeft: "5%" }}
              className={classes.icon}
              type="button"
              onClick={(e) => {
                console.log(mentorMeetingDetails);
                updateMarks(e);
              }}
            >
              <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorMeetingDetails;
