import React,{useEffect,useState} from 'react'
import { useForm } from 'react-hook-form';
import classes from "../styles/studentMainPage.module.css";
import { ApiService } from "../services/api.service"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Additional } from '../interfaces/Additional';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Btech = ({studentId}) => {

    var logedinStudent:Additional=new Additional();
    const [loggedinStudent,setloggedinStudent]=useState<Additional>(Object);
    let apiService: ApiService = new ApiService();
    let url:string
    useEffect(()=> {
        url=`additional/${studentId}/list`;
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
      apiService.post("additional/update",values)
        .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    };
    return (
        <div style={{height:"100%"}} className={classes.forms}>
            <form onSubmit={handleSubmit(submitProfile)}className="justify-content-around  d-flex flex-column ">
                <div className={classes.discipline}>B.E/B.Tech. result (Overall) :</div>
                <div  className="row">
                <div className="col-md-3" style={{marginTop:'1%',color:'#0166b2',fontWeight:'bold'}} >
                    Percentage: <input {...register("percentage")} defaultValue={loggedinStudent.percentage} className={classes.credits}></input>
                </div>
                <div className="col-md-5" style={{color:'#0166b2',fontWeight:'bold',}}>
                    Class : <input {...register("className")} defaultValue={loggedinStudent.className} className={classes.credits}></input>
                </div>
                <div className="col-md-4" style={{marginLeft:"0%",color:'#0166b2',fontWeight:'bold'}}>
                    Rank : <input {...register("rank")} defaultValue={loggedinStudent.rank} className={classes.credits}></input>
                </div>
                <label  style={{marginTop:"2%",marginLeft:"0%"}}className={classes.placement}>Career (PLacement) Information :</label>
                        <textarea {...register("careerInfo")}  defaultValue={loggedinStudent.careerInfo} style={{ width: "90%", height: "100px",marginLeft:"30px",marginBottom:"25px",outlineColor:"black",borderRadius:"10px"}}
                        className={classes.box}></textarea>
                <label style={{marginLeft:"0%"}}className={classes.placement}>Graduate Study :</label>
                        <textarea {...register("graduateStudy")}  defaultValue={loggedinStudent.graduateStudy} style={{ width: "90%", height: "100px",marginLeft:"30px",marginBottom:"25px",outlineColor:"black",borderRadius:"10px"}}
                        className={classes.box}></textarea>
                </div>
            </form>
            <button style={{marginLeft:"50%"}}onClick={()=>{
                setValue("studentId",studentId)
                handleSubmit(submitProfile)()
            }} className={classes.icon}
                ><FontAwesomeIcon  style={{ fontSize: "110%" }} icon={faCheck} /></button>
        </div>
    )
}

export default Btech