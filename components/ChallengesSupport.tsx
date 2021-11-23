import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";

const ChallengesSupport = () => {

    const { register, handleSubmit, setValue, getValues } = useForm();

  
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };
    
    return (
        <div className={classes.forms}>
            
          <form onSubmit={handleSubmit(submitProfile)} 
          className="d-flex flex-row justify-content-around align-items-center">
  
         <table style={{marginTop:'20%'}} className={classes.table}>
            <tr>
                <th style={{width:'5%'}} className={classes.tablehead} >No.</th>
                <th style={{width:'20%'}} className={classes.tablehead} >Domain</th>
                <th className={classes.tablehead} >Challenges</th>
                <th className={classes.tablehead} >Sources of Support</th>
            </tr>
           <tr>
             <td className={classes.tablehead} >1.</td> 
             <td className={classes.table} >Academic</td> 
             <td className={classes.table} ><input {...register("achallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("asourcesupport")} className={classes.inputbox} type="text"/></td>  
             
           </tr>
           <tr>
             <td className={classes.tablehead} >2.</td> 
             <td className={classes.table} >Relationship</td> 
             <td className={classes.table} ><input {...register("rchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("rsourcesupport")} className={classes.inputbox} type="text"/></td> 
             
           </tr>
           <tr>
             <td className={classes.tablehead} >3.</td> 
             <td className={classes.table} >Health</td> 
             <td className={classes.table} ><input {...register("hchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("hsourcesupport")} className={classes.inputbox} type="text"/></td>  
           </tr>

           <tr>

             <td className={classes.tablehead} >4.</td> 
             <td className={classes.table} >Financial</td> 
             <td className={classes.table} ><input {...register("fchallenges")} className={classes.inputbox} type="text"/></td> 
             <td className={classes.table} ><input {...register("fsourcesupport")} className={classes.inputbox} type="text"/></td> 
             
           </tr>
         </table>
         {/* <div style={{marginTop:'40%'}}><button  type="submit" >Submit</button></div> */}
       </form>
       </div>
    )
}

export default ChallengesSupport
