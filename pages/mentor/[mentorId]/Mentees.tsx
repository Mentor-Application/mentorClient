import React, { useEffect, useState } from "react";
import MenteeCard from "../../../components/MenteeCard";
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
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "../../../services/api.service";

type MenteeCardItems = {
  studentName: string;
  registerNumber: string;
  studentId:string;
};

export const Mentees = ({sendProp}) => {
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
    setRemoveMenteecards(MenteeCardItems);
    setMenteeCardItems([]);
    // loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    // apiService
    //   .post(`student/mentor/${loggedInUser.mentorId}/editmentee`, clearMentee)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // alert("Mentees List have been cleared");
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
      .post(`student/mentor/${loggedInUser.mentorId}/editmentee`, removeMenteecards)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Mentees List have been submitted");
  };

  return (
    <div>
      <div>
      <button
        className={classes.Editbtn}
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        Edit Mentees
      </button>
      {MenteeCardItems.map((items) => (
        <div>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "10px",
              width: "25%",
              outline: "black",
              height: "200px",
              flexDirection: "row",
              float: "left",
              marginLeft: "20px",
              marginTop: "40px",
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
                      marginTop: " 5%",
                      marginLeft: "5px",
                      color: "#ff0000",
                      alignItems: "center",
                    }}
                    icon={faMinusCircle}
                  />
                </button>
              ) : null}
            </div>
            <Image width={15} height={115} src={prof}></Image>

            <div
              style={{
                textAlign: "center",
                color: "#0166b2",
                fontWeight: "bold",
              }}
            >
              {items.studentName}
              <button
                  style={{
                    top: "0px",
                    right: "0px",
                    background: "none",
                    marginLeft: "70%",
                    border: "none",
                  }}
                  onClick={() => sendProp(items.studentId, true,"profile",true)}
                >
                  <FontAwesomeIcon
                    style={{
                      marginTop: " 5%",
                      marginLeft: "5px",
                      color: "#0166b2",
                      alignItems: "center",
                    }}
                    icon={faUser}
                    
                  />
                </button>
                {items.registerNumber}
            </div>
          </div>
        </div>
      ))}
      </div>
      <div>
     <Row> <div style={{position:'fixed',bottom:'60px',left:'600px'}}>
        {isEdit ? (
          <button className={classes.Clearbtn} onClick={Submit}>
            Submit
          </button>
        ) : null}
      
        {isEdit ? (
          <button className={classes.Clearbtn} onClick={Undo}>
            Undo
          </button>
        ) : null}
      
      {isEdit ? (
      <button onClick={Clear} className={classes.Clearbtn}>
        Clear 
      </button>
      ):null}
      </div>
      </Row>
      </div>
      </div>
    
  );
};

export default Mentees;
