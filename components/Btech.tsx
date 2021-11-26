import React from 'react'
import { useForm } from 'react-hook-form';
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Btech = () => {
    const {register,handleSubmit,getValues,setValue} = useForm();
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };
    return (
        <div style={{height:"100%"}} className={classes.forms}>
            <form onSubmit={handleSubmit(submitProfile)}className="justify-content-around  d-flex flex-column ">
                <div className={classes.discipline}>B.E/B.Tech. result (Overall) :</div>
                <table  style={{marginTop:'3%',marginLeft:'10%'}} className={classes.table}>
                    <tr>
                        <th style={{width:"5%"}}className={classes.table}><input className={classes.inputbox}></input>Percentage :</th>
                        <th style={{width:"5%"}}className={classes.table}><input className={classes.inputbox}></input>Class :</th>
                        <th style={{width:"5%"}}className={classes.table}><input className={classes.inputbox}></input>Rank :</th>  
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Btech
