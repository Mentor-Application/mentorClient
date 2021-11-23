import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdCheckCircle } from 'react-icons/md';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const GoalsGrid = () => {
    const { register, handleSubmit, setValue, getValues } = useForm();

  
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };

    return (
         <div className={classes.forms}>
            
          <form onSubmit={handleSubmit(submitProfile)} 
          className="d-flex flex-column justify-content-around align-items-center">
            

         <table style={{marginTop:'0%'}} className={classes.table}>
            <tr>
                <th style={{width:'5%'}} className={classes.tablehead} >No.</th>
                <th className={classes.tablehead} >Domain</th>
                <th className={classes.tablehead} >Goal</th>
                <th className={classes.tablehead} >Plan of Action</th>
            </tr>
           <tr>
             <td className={classes.tablehead} >1.</td> 
             <td className={classes.table} >Acquire (Dont have, but want)</td> 
             <td className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("asourcesupport")} className={classes.inputbox} type="text"/></td>  
             
           </tr>
           <tr>
             <td  className={classes.tablehead} >2.</td> 
             <td className={classes.table} >Eliminate (Have but dont want)</td> 
             <td className={classes.table} ><input {...register("rchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("rsourcesupport")} className={classes.inputbox} type="text"/></td> 
             
           </tr>
           <tr>
             <td className={classes.tablehead} >3.</td> 
             <td className={classes.table} >Avoid (Dont have and dont want)</td> 
             <td className={classes.table} ><input {...register("hchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("hsourcesupport")} className={classes.inputbox} type="text"/></td>  
           </tr>

           <tr>
             <td className={classes.tablehead} >4.</td> 
             <td className={classes.table} >Sustain (Have and want)</td> 
             <td className={classes.table} ><input {...register("fchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("fsourcesupport")} className={classes.inputbox} type="text"/></td> 
             
           </tr>
         </table>
        <div>  
         <button className={classes.icon} type="submit" ><FontAwesomeIcon style={{fontSize : '200%', color:'white'}} icon={faCheckCircle} /></button>
       </div>
       </form>
       </div>
    )
}

export default GoalsGrid
