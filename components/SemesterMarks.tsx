import React from 'react'
import { useForm } from 'react-hook-form';
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from 'classnames'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SemesterMarks = () => {
    const {register,handleSubmit,getValues,setValue} = useForm();
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };
    let whiteBox = `${classes.forms} col-12 col-xl-11`;

    return (
      <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
        <form
          onSubmit={handleSubmit(submitProfile)}
          style={{ overflowX: "auto", marginLeft: "10%" }}
        >
                <table style={{marginTop:'0%'}} className={classes.table}>
                <tr>
                    <th style={{width:"5%"}} className={classes.tablehead}>SI No.</th>
                    <th style={{width:"50%"}} className={classes.tablehead}>Subject Code and Name</th>
                    <th className={classes.tablehead}>Grade</th>
                    <th className={classes.tablehead}>Grade points obtained (Credits x Score)</th>
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
                {/* <tr>
                    <td  className={classes.tablehead}></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input></td>
                    <td  className={classes.table}><input className={classes.inputbox}></input>Credits :</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input>Total Grade Points :</td>
                    <td  className={classes.table}><input className={classes.inputbox}></input>GPA :</td>
                    
                </tr> */}
                </table>
                <div style={{marginTop:'10%'}} className="row">
                <div className="col-md-3" style={{marginTop:'1%',color:'#0166b2',fontWeight:'bold'}} >
                    Credits: <input className={classes.credits}></input>
                </div>
                <div className="col-md-5" style={{color:'#0166b2',fontWeight:'bold'}}>
                    Total Grade Points: <input className={classes.credits}></input>
                </div>
                <div className="col-md-4" style={{color:'#0166b2',fontWeight:'bold'}}>
                    GPA: <input className={classes.credits}></input>
                </div>
                </div>
                
            </form>
            
        </div>
    )
}

export default SemesterMarks
