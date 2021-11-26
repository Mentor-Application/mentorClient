import React from 'react'
import classes from "../../../styles/studentMainPage.module.css";
import Link from 'next/dist/client/link';
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import DisciplinaryAction from '../../../components/DisciplinaryAction';
import CoCurricular from '../../../components/CoCurricular';
import { Row } from 'react-bootstrap';
import OverallAssesment from '../../../components/OverallAssesment';
import Btech from '../../../components/Btech';
export const AdditionalDetails = () => {
    return (
        <div style={{ background: "#ffffff", borderRadius: "30px", width:"98%",height: "90%",marginTop:"70px",overflowY:"scroll" }}
        className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-column">

                    <div style={{ height: "50%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12">
                       <DisciplinaryAction></DisciplinaryAction> </div>
                        
                    <div style={{ height: "50%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12">
                       <CoCurricular></CoCurricular> </div>
                        
                    <div style={{ height: "50%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12">
                       <OverallAssesment></OverallAssesment> </div>
                    
                    <div style={{ height: "50%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12">
                       <Btech></Btech> </div>
                    <div>
                    <label className={classes.placement}>Career (PLacement) Information :</label>
                    <textarea style={{ width: "80%", height: "100%",marginLeft:"30px",marginBottom:"20px" }}
                    className={classes.box}></textarea>
                    </div>

                    <div>
                    <label className={classes.placement}>Graduate Study :</label>
                    <textarea style={{ width: "80%", height: "100%",marginLeft:"30px",marginBottom:"20px",marginTop:"20px" }}
                    className={classes.box}></textarea>
                    </div>
                    
                        
        </div>
    )
}

export default AdditionalDetails


