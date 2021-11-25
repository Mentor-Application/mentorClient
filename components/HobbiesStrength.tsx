import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const HobbiesStrength = () => {

    const { register, handleSubmit, setValue, getValues } = useForm();

  
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };

    let whiteBox = `${classes.forms}  d-flex justify-content-start col-12 col-xl-11`;
    return (
      <div style={{ height: "87%" }} className={whiteBox}>
        <form
          style={{ overflowY: "scroll", overflowX: "hidden" }}
          onSubmit={handleSubmit(submitProfile)}
          className="row d-flex justify-content-around"
        >
          <div className="d-flex flex-column col-lg-5 col-xl-5 col-md-10 col-sm-9 col-12">
                
                    <h4  style={{marginLeft:'15%',color:'#0166b2',marginTop:'20%',marginBottom:'5%'}}>Top three Hobbies </h4>
                
                
                    <div style={{marginLeft:'15%',color:'#0166b2',fontWeight:'bold'}}>1.<input className={classes.inputgoals}></input></div>
                
                
                    <div style={{marginLeft:'15%',color:'#0166b2',fontWeight:'bold'}}>2.<input className={classes.inputgoals}></input></div>
                
                
                    <div style={{marginLeft:'15%',color:'#0166b2',fontWeight:'bold'}}>3.<input className={classes.inputgoals}></input></div>
                
                
                    <h4 style={{marginLeft:'15%',color:'#0166b2',marginTop:'20%',marginBottom:'5%'}}>Strength Assessment </h4>
                
                
                    <div style={{marginLeft:'15%',color:'#0166b2',fontWeight:'bold'}}>I am<input className={classes.inputgoals}></input></div>
                
                
                    <div style={{marginLeft:'15%',marginRight:'15%',color:'#0166b2',fontWeight:'bold'}}>I have<input className={classes.inputgoals}></input></div>
            
            
                    <div style={{marginLeft:'15%',color:'#0166b2',fontWeight:'bold'}}>I can<input className={classes.inputgoals}></input></div>
                
            </div>
            <div style={{marginTop:'5%',marginLeft:'60%'}}>  
                <button className={classes.icon} type="submit" ><FontAwesomeIcon style={{fontSize:'110%'}} icon={faCheck} /></button>
            </div>
            
        </form>    
        </div>
    )
}

export default HobbiesStrength