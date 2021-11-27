import React, { useEffect, useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../services/api.service"
import { Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const MentorMeetingDetails = () => {

  const { register, handleSubmit, setValue, getValues,formState: { errors }, } = useForm();
  const { register: register1, handleSubmit: handleSubmit1 } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();
  
  const [mentorMeetingDetails, setmentorMeetingDetails] = useState([]);

  const onsubmit = (values) => {
    mentorMeetingDetails.push(values);
  };

  const onsubmit1 = (values) => {
    mentorMeetingDetails.push(values);
  };

  const onsubmit2 = (values) => {
    mentorMeetingDetails.push(values);
  };

  const onsubmit3 = (values) => {
    mentorMeetingDetails.push(values);
    console.log(mentorMeetingDetails);
  };

  
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };
    let whiteBox = `${classes.forms} col-12 col-xl-11`;


    return (

      <div
      style={{
        overflowY: "scroll",
        height: "100vh",
      }}
      className="row"
    >
      <div
        style={{ height: "90%" }}
        className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12"
      >
        <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
        <Dropdown>
            <Dropdown.Toggle id="dropwdown-custom-1"style={{
                    color: "white",
                    backgroundColor: "#0166b2",
                    border: "2.5px solid #0166b2",
                    marginLeft:"5%",
                    fontWeight:'bold',
                    fontSize:'100%',
                    marginTop:"5%",
                    borderRadius: "15px",
                    width: "10%",
                    height: "40px",}}>Semester</Dropdown.Toggle>
                     <Dropdown.Menu
                    id="dropdown-menu-align-right"
                    style={{background:"white",color:"#0166b2"}}
                    className="DropDown"
                    
                >
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester1">Semester-1</Dropdown.Item>
                <Dropdown.Item  style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester2">Semester-2</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item  style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester3">Semester-3</Dropdown.Item>
                <Dropdown.Item  style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester4">Semester-4</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester5">Semester-5</Dropdown.Item>
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester6">Semester-6</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester7">Semester-7</Dropdown.Item>
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester8">Semester-8</Dropdown.Item>
                <Dropdown.Divider />
                </Dropdown.Menu>
                </Dropdown>
                <div className={classes.internal} style={{color:'#0166b2',marginTop:'0%'}}>Mentor Meeting Details </div>
      <form
        onSubmit={handleSubmit(submitProfile)}
        style={{ overflowX: "auto", marginLeft: "10%" }}
      >
           <table style={{marginTop:'10%'}} className={classes.table}>
            <tr>
                <th style={{width:'15%'}} className={classes.tablehead} >Date</th>
                <th style={{width:'20%'}} className={classes.tablehead} >Time</th>
                <th className={classes.tablehead} >Focus of Discussion</th>
                <th className={classes.tablehead} >Remarks</th>
            </tr>
           <tr>
             <td style={{height:'50px'}} className={classes.table} ><input {...register("date")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("time")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("focusOfDiscussion")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("remarks")} className={classes.inputbox} type="text"/></td>  
             
           </tr>
           <tr>
             <td style={{height:'50px'}}  className={classes.table} ><input {...register1("date")} className={classes.inputbox} type="text"/></td>  
             <td className={classes.table} ><input {...register1("time")} className={classes.inputbox} type="text"/></td>  
             <td className={classes.table} ><input {...register1("focusOfDiscussion")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register1("remarks")} className={classes.inputbox} type="text"/></td> 
             
           </tr>
           <tr>
             <td style={{height:'50px'}}  className={classes.table} ><input {...register2("date")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register2("time")} className={classes.inputbox} type="text"/></td>  
             <td className={classes.table} ><input {...register2("focusOfDiscussion")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register2("remarks")} className={classes.inputbox} type="text"/></td>  
           </tr>

           <tr>

             <td style={{height:'50px'}}  className={classes.table} ><input {...register3("date")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register3("time")} className={classes.inputbox} type="text"/></td>  
             <td className={classes.table} ><input {...register3("focusOfDiscussion")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register3("remarks")} className={classes.inputbox} type="text"/></td> 
             
           </tr>
         </table> 
         <div style={{ marginTop: "5%", marginLeft: "83%" }}>
          <button
            className={classes.icon}
            type="button"
            onClick={(e) => {
              console.log("clicking");
              handleSubmit(onsubmit)();
              handleSubmit1(onsubmit1)();
              handleSubmit2(onsubmit2)();
              handleSubmit3(onsubmit3)();
            }}
          >
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
        </form>
        </div>
        </div>
        </div>
    )
}

export default MentorMeetingDetails
