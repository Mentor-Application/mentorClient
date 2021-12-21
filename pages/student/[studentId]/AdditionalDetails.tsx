import React,{useEffect,useState} from 'react'
import classes from "../../../styles/studentMainPage.module.css";
import Link from 'next/dist/client/link';
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import DisciplinaryAction from '../../../components/DisciplinaryAction';
import CoCurricular from '../../../components/CoCurricular';
import { Row } from 'react-bootstrap';
import OverallAssesment from '../../../components/OverallAssesment';
import Btech from '../../../components/Btech';
import { ApiService } from '../../../services/api.service';
import { Additional } from '../../../interfaces/Additional';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export const AdditionalDetails = ({studentId}) => {

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
        <div style={{ background: "#ffffff", borderRadius: "30px", width:"98%",height: "90%",marginTop:"70px",overflowY:"scroll" }}
        className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-column">

                    <div style={{ height: "50%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12">
                       <DisciplinaryAction studentId={studentId}></DisciplinaryAction> </div>
                        
                    <div style={{ height: "50%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12">
                       <CoCurricular studentId={studentId}></CoCurricular> </div>
                        
                    <div style={{ height: "50%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12">
                       <OverallAssesment studentId={studentId}></OverallAssesment> </div>
                    
                    <div style={{ height: "90%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12">
                       <Btech studentId={studentId}></Btech> </div>             
        </div>
    )
}

export default AdditionalDetails