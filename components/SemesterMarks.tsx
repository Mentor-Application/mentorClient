import React from 'react'
import { useForm } from 'react-hook-form';
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from 'classnames'
const SemesterMarks = () => {
    const {register,handleSubmit,getValues,setValue} = useForm();
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };
    return (
        <div className={classes.forms}>
            <form onSubmit={handleSubmit(submitProfile)} className="justify-content-around align-items-center d-flex flex-column ">
                <table style={{marginTop:'0%'}} className={classes.table}>
                <tr>
                    <th style={{width:"5%"}}className={classes.tablehead}>SI No.</th>
                    <th className={classes.tablehead}>Subject Code and Name</th>
                    <th className={classes.tablehead}>Grade</th>
                    <th className={classes.tablehead}>Grade points obtained (Credits*Score)</th>
                    <th className={classes.tablehead}>Month and Year of Passing</th>
                    
                </tr>
                <tr>
                    <td  className={classes.tablehead}>1.</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td> 
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    
                </tr>
                <tr>
                    <td  className={classes.tablehead}>2.</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td> 
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    
                </tr>
                <tr>
                    <td  className={classes.tablehead}>3.</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td> 
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    
                </tr>
                <tr>
                    <td  className={classes.tablehead}>4.</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td> 
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    
                </tr>
                <tr>
                    <td  className={classes.tablehead}>5.</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td> 
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    
                </tr>
                <tr>
                    <td  className={classes.tablehead}>6.</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td> 
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    
                </tr>
                <tr>
                    <td  className={classes.tablehead}>7.</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td> 
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                </tr>
                <tr>
                    <td  className={classes.tablehead}>8.</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td> 
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                </tr>
                <tr>
                    <td  className={classes.tablehead}></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input>Credits :</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input>Total Grade Points :</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input>GPA :</td>
                    
                </tr>
                </table>
                
            </form>
            
        </div>
    )
}

export default SemesterMarks
