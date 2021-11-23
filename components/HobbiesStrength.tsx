import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import Row from "react-bootstrap/Row";

const HobbiesStrength = () => {

    const { register, handleSubmit, setValue, getValues } = useForm();

  
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };

    return (
        <div className={classes.forms}>
            
        <form onSubmit={handleSubmit(submitProfile)} 
        className="d-flex flex-row justify-content-around align-items-center">
            <div className="d-flex flex-column col-lg-4">
                <Row>
                    <h4 style={{color:'#0166b2',marginTop:'20%',marginBottom:'5%'}}>Top three Hobbies </h4>
                </Row>
                <Row>
                    <div style={{color:'#0166b2',fontWeight:'bold'}}>1.<input className={classes.inputgoals}></input></div>
                </Row>
                <Row>
                    <div style={{color:'#0166b2',fontWeight:'bold'}}>2.<input className={classes.inputgoals}></input></div>
                </Row>
                <Row>
                    <div style={{color:'#0166b2',fontWeight:'bold'}}>3.<input className={classes.inputgoals}></input></div>
                </Row>
            </div>

            <div className="d-flex flex-column col-lg-4">
                <Row>
                    <h4 style={{color:'#0166b2',marginTop:'20%',marginBottom:'5%'}}>Strength Assessment </h4>
                </Row>
                <Row>
                    <div style={{color:'#0166b2',fontWeight:'bold'}}>I am<input className={classes.inputgoals}></input></div>
                </Row>
                <Row>
                    <div style={{color:'#0166b2',fontWeight:'bold'}}>I have<input className={classes.inputgoals}></input></div>
                </Row>
                <Row>
                    <div style={{color:'#0166b2',fontWeight:'bold'}}>I can<input className={classes.inputgoals}></input></div>
                </Row>
            </div>
            
        </form>    
        </div>
    )
}

export default HobbiesStrength
