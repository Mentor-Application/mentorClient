import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { User } from "../interfaces";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Disciplinary } from '../interfaces/Disciplinary';


export const DisciplinaryAction = ({studentId}) => {
    var logedinStudent: Disciplinary=new Disciplinary();
    const [loggedinStudent,setloggedinStudent]=useState<Disciplinary>(Object);
    let url:string
    let apiService: ApiService = new ApiService();
    useEffect(()=> {
        url=`disciplinary/${studentId}/list`;
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

        apiService.post("disciplinary/update",values)
        .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    };
    return (
        <div  style={{height:"100%"}}className={classes.forms}>
            <form className="justify-content-around  d-flex flex-column ">
                <div className={classes.discipline}>Particulars of Disciplinary action</div>
                <span style={{fontSize:" small",marginLeft:" 20px"}}>
                    (Whether transferred to or from other college,Migration,Discontinuation,Repetition,Detention due to lack of attendance , striking off from rolls,disciplinary actions,stoppage of scholarships,etc.)
                </span>
                <table  style={{marginTop:'3%',marginLeft:'10%'}} className={classes.table}>
                    <tr>
                        <th style={{width:"5%"}}className={classes.tablehead}>YEAR 1</th>
                        <th style={{width:"5%"}}className={classes.table}>YEAR 2</th>
                        <th style={{width:"5%"}}className={classes.table}>YEAR 3</th>
                        <th style={{width:"5%"}}className={classes.table}>YEAR 4</th>
                    </tr>
                    <tr>
                        <td className={classes.dataitem}><input {...register("year1")} defaultValue={loggedinStudent.year1} className={classes.inputbox}></input></td>
                        <td className={classes.dataitem}><input {...register("year2")} defaultValue={loggedinStudent.year2} className={classes.inputbox}></input></td>
                        <td className={classes.dataitem}><input {...register("year3")} defaultValue={loggedinStudent.year3} className={classes.inputbox}></input></td>
                        <td className={classes.dataitem}><input {...register("year4")} defaultValue={loggedinStudent.year4} className={classes.inputbox}></input></td>
                    </tr>
                </table>
                   
            </form>
            <button onClick={()=>{
                setValue("studentId",studentId)
                handleSubmit(submitProfile)()
            }} className={classes.icon}
                ><FontAwesomeIcon  style={{ fontSize: "110%" }} icon={faCheck} /></button>
        </div>
        
    )
    
}

export default DisciplinaryAction
