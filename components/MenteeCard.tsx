import React from 'react'
import classes from "../styles/studentMainPage.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import prof from "../public/grey.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserTimes } from "@fortawesome/free-solid-svg-icons";
type MenteeCardItems={
    studentName:string;
    regNo:string;
}
const MenteeCard = ({studentName,regNo }:MenteeCardItems) => {
    return (
        <div>
            <div
            style={{ background: "#ffffff", 
            borderRadius: "10px", 
            width:"25%",
            outline:"black",
            height: "200px",
            flexDirection:"row",
            float:'left',
            marginLeft:"20px",
            marginTop:"40px"
             }}
            className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-row
              justify-content-center ">
                  
                  <div style={{width:"50%",marginLeft:"5%"}}>
                  <Image src={prof}></Image>
                   <FontAwesomeIcon style={{marginTop:" 5%",marginLeft:"20px",color:"#0166b2"}}icon={faUserTimes} />
                  </div>
                  
            <div style={{marginTop:" 140px",textAlign:"center",color:"#0166b2",fontWeight:"bold",marginRight:"30%"}}>
                {studentName}-{regNo}
            </div>
            </div>
        </div>
    )
}

export default MenteeCard
