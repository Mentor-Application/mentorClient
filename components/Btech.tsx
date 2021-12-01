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
                <div  className="row">
                <div className="col-md-3" style={{marginTop:'1%',color:'#0166b2',fontWeight:'bold'}} >
                    Percentage: <input className={classes.credits}></input>
                </div>
                <div className="col-md-5" style={{color:'#0166b2',fontWeight:'bold',}}>
                    Class : <input className={classes.credits}></input>
                </div>
                <div className="col-md-4" style={{marginLeft:"0%",color:'#0166b2',fontWeight:'bold'}}>
                    Rank : <input className={classes.credits}></input>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Btech