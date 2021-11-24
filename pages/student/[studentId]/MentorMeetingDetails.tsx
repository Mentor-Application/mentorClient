import React, { useEffect, useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../services/api.service"

export const MentorMeetingDetails = () => {

    const { register, handleSubmit, setValue, getValues,formState: { errors }, } = useForm();

  
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };

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
        <div className={classes.forms}>
            
        <form onSubmit={handleSubmit(submitProfile)} 
        className="d-flex flex-column justify-content-around align-items-center">
           <table style={{marginTop:'10%'}} className={classes.table}>
            <tr>
                <th style={{width:'15%'}} className={classes.tablehead} >Date</th>
                <th style={{width:'20%'}} className={classes.tablehead} >Time</th>
                <th className={classes.tablehead} >Focus of Discussion</th>
                <th className={classes.tablehead} >Remarks</th>
            </tr>
           <tr>
             <td style={{height:'50px'}} className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("asourcesupport")} className={classes.inputbox} type="text"/></td>  
             
           </tr>
           <tr>
             <td style={{height:'50px'}}  className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td>  
             <td className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td>  
             <td className={classes.table} ><input {...register("rchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("rsourcesupport")} className={classes.inputbox} type="text"/></td> 
             
           </tr>
           <tr>
             <td style={{height:'50px'}}  className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td>  
             <td className={classes.table} ><input {...register("hchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("hsourcesupport")} className={classes.inputbox} type="text"/></td>  
           </tr>

           <tr>

             <td style={{height:'50px'}}  className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td>  
             <td className={classes.table} ><input {...register("fchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("fsourcesupport")} className={classes.inputbox} type="text"/></td> 
             
           </tr>
         </table> 
        </form>
        </div>
        </div>
        </div>
    )
}

export default MentorMeetingDetails
