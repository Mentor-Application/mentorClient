import React from 'react'
import { useForm } from 'react-hook-form';
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const DisciplinaryAction = () => {
    const {register,handleSubmit,getValues,setValue} = useForm();
    let apiService: ApiService = new ApiService();
    const submitProfile = (values) => {
      console.log(values);
    };
    return (
        <div  style={{height:"100%"}}className={classes.forms}>
            <form onSubmit={handleSubmit(submitProfile)}className="justify-content-around  d-flex flex-column ">
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
                        <td className={classes.dataitem}><input className={classes.inputbox}></input></td>
                        <td className={classes.dataitem}><input className={classes.inputbox}></input></td>
                        <td className={classes.dataitem}><input className={classes.inputbox}></input></td>
                        <td className={classes.dataitem}><input className={classes.inputbox}></input></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default DisciplinaryAction
