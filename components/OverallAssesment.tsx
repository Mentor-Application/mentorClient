import React ,{useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Overall } from '../interfaces/Overall';
const OverallAssesment = ({studentId}) => {

    var logedinStudent:Overall=new Overall();
    const [loggedinStudent,setloggedinStudent]=useState<Overall>(Object);
    let apiService: ApiService = new ApiService();
    let url:string
    useEffect(()=> {
        url=`overall/${studentId}/list`;
        apiService.get(url)
        .then((res) => {
            const data=res;
            setloggedinStudent(data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
    },[]);
    const {register,handleSubmit,getValues,setValue} = useForm();
    
    const submitProfile = (values) => {
      console.log(values);
    };
    return (
        <div  style={{height:"100%"}}className={classes.forms}>
        <form onSubmit={handleSubmit(submitProfile)}className="justify-content-around  d-flex flex-column ">
        <div className={classes.discipline}>Overall Assesment :</div>
            <span style={{fontSize:" small",marginLeft:" 20px"}}>
               (Scholarship/Remarkable acheivements/Any other accomplishments , please Mention :)
            </span>
            <table  style={{marginTop:'3%',marginLeft:'10%'}} className={classes.table}>
                <tr>
                    <th style={{width:"5%"}}className={classes.tablehead}>YEAR 1</th>
                    <th style={{width:"5%"}}className={classes.table}>YEAR 2</th>
                    <th style={{width:"5%"}}className={classes.table}>YEAR 3</th>
                    <th style={{width:"5%"}}className={classes.table}>YEAR 4</th>
                </tr>
                <tr>
                    <td className={classes.dataitem}><input defaultValue={loggedinStudent.year1} className={classes.inputbox}></input></td>
                    <td className={classes.dataitem}><input defaultValue={loggedinStudent.year2} className={classes.inputbox}></input></td>
                    <td className={classes.dataitem}><input defaultValue={loggedinStudent.year3} className={classes.inputbox}></input></td>
                    <td className={classes.dataitem}><input defaultValue={loggedinStudent.year4} className={classes.inputbox}></input></td>
                </tr>
            </table>
        </form>
    </div>
    )
}

export default OverallAssesment
