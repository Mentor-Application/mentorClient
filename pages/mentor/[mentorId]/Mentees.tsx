import React, { useEffect, useState } from "react";
import MenteeCard from "../../../components/MenteeCard";
import { User } from "../../../interfaces";
import prof from "../../../public/grey.jpg";
import classes from "../../../styles/studentMainPage.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { MenteeItems } from "../../../interfaces";
import { ApiService } from "../../../services/api.service";
import { useForm } from "react-hook-form";
type MenteeCardItems = {
  studentName: string;
  registerNumber: string;
};

let loggedInUser: User;
let url: string;

let apiService: ApiService = new ApiService();

let a: boolean = false;
export const Mentees = () => {
  const [MenteeCardItems, setMenteeCardItems] = useState<Array<MenteeCardItems>>([]);
  useEffect(() => {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    apiService
      .get(`student/mentor/${loggedInUser.mentorId}`)
      .then((res) => {
        const data = res;
        setMenteeCardItems(data);
        console.log(data)
        console.log(MenteeCardItems)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const [removeMenteecards, setremoveMenteecards] = useState([]);

  function handleremoveMentees(items, regNo) {
    const newMentees = MenteeCardItems.filter((item) => item.registerNumber !== regNo);
    console.log(newMentees);
    setMenteeCardItems(newMentees);
    console.log(MenteeCardItems);
  }

  function edit() {
    console.log(MenteeCardItems);
    a = true;
  }

  // const [addMenteesActive, setaddMenteesActive] = useState(false);
  return (
    <div>
      <button
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          color: "#ffffff",
          backgroundColor: "#0166b2",
          fontWeight: "bold",
          justifyItems: "center",
        }}
        onClick={edit}
      >
        Edit Mentees
      </button>
      <button
        type="button"
        onClick={() => {
          // alert('Do you want to clear the mentee list?')
          MenteeCardItems.splice(0, MenteeCardItems.length);
          console.log(MenteeCardItems);
        }}
        className={classes.Clearbtn}
      >
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

            <div>{ a ? <button  style={{top:"0px",right:"0px",}}onClick={()=>handleremoveMentees(items,items.registerNumber)}><FontAwesomeIcon  style={{marginTop:" 5%",marginLeft:"20px",color:"#0166b2"}}icon={faUserTimes} /></button>:null}
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
    </div>
  );
};

export default Mentees;
