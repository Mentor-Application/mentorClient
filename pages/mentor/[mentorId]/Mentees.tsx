import React, { useEffect, useState } from "react";
import MenteeCard from "../../../components/MenteeCard";
import { User } from "../../../interfaces";
import prof from "../../../public/grey.jpg";
import classes from "../../../styles/studentMainPage.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faUserTimes,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "../../../services/api.service";

type MenteeCardItems = {
  studentName: string;
  registerNumber: string;
};

export const Mentees = ({}) => {
  let loggedInUser: User;
  let url: string;

  let apiService: ApiService = new ApiService();

  const [isEdit, setIsEdit] = useState(false);
  const [MenteeCardItems, setMenteeCardItems] = useState<
    Array<MenteeCardItems>
  >([]);
  const [removeMenteecards, setRemoveMenteecards] = useState([]);
  useEffect(() => {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    apiService
      .get(`student/mentor/${loggedInUser.mentorId}`)
      .then((res) => {
        const data = res;
        setMenteeCardItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("menetee", MenteeCardItems);
    console.log("remov", removeMenteecards);
  }, [MenteeCardItems, removeMenteecards]);

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
  };

  const Undo = () => {
    console.log(MenteeCardItems);
    setMenteeCardItems([...MenteeCardItems, ...removeMenteecards]);
    setRemoveMenteecards([]);
  };

  const Submit = () => {
    console.log("Submit");
    console.log(removeMenteecards);
  };

  return (
    <div>
      <button
        className={classes.Editbtn}
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        Edit Mentees
      </button>
      <button type="button" onClick={Clear} className={classes.Clearbtn}>
        Clear Mentees
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
            <Image width={15} height={115} src={prof}></Image>

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

            <div
              style={{
                textAlign: "center",
                color: "#0166b2",
                fontWeight: "bold",
              }}
            >
              {items.studentName}-{items.registerNumber}
            </div>
          </div>
        </div>
      ))}

      <div>
        {isEdit ? (
          <button
            style={{ top: "0px", right: "0px" }}
            className={classes.Clearbtn}
            onClick={Submit}
          >
            Submit
          </button>
        ) : null}
      </div>

      <div>
        {isEdit ? (
          <button
            style={{ top: "0px", right: "0px" }}
            className={classes.Clearbtn}
            onClick={Undo}
          >
            Undo
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Mentees;
