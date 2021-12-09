import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { ApiService } from "../../../services/api.service";
import axios from "axios";
import { environment } from "../../../environments/environments";

export const AddMentees = () => {

  const { register, handleSubmit} = useForm();
  const [studentList,setStudentList]=useState([]);
  

   const handleSearch=async (values)=> {
     
    await axios.get(`${environment.api_url}/student/search`,{
      params:{periodOfStudy: values.periodofstudy,studentName: values.studentname,branch: values.branch,section: values.section},
      headers:{"Content-Type": "application/json"},
      
    })
    .then((res)=>{
      const data=res.data;
      setStudentList(data)
      return res;
    })
    .catch((err)=>{
      console.log(err);
    });
    
     console.log(studentList)

  }

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
  <div>
      <input type="text" placeholder="Student Name" {...register("studentname")}/>
      <input
                {...register("branch")}
                style={{
                  color: "white",
                  backgroundColor: "#0166b2",
                  border: "1.5px solid #0166b2",
                  width: "10%",
                  height: "40px",
                  marginLeft: "12%",
                }}
                list="branches"
                type="text"
                placeholder="branch"
              ></input>

              <datalist style={{color:'white'}} id="branches">
                <option value="CSE" />
                <option value="IT" />
                <option value="ECE" />
                <option value="EEE" />
                <option value="MECH" />
                <option value="BME" />
                <option value="CIVIL" />
                <option value="CHEM" />
              </datalist>
              <input
              {...register("section")}
                style={{
                  color: "white",
                  backgroundColor: "#0166b2",
                  border: "1.5px solid #0166b2",
                  width: "10%",
                  height: "40px",
                  marginLeft: "12%",
                }}
                list="section"
                type="text"
                placeholder="Section"
              ></input>

              <datalist style={{color:'white'}} id="section">
                <option value="A" />
                <option value="B" />
              </datalist>
              <input
              {...register("periodofstudy")}
                style={{
                  color: "white",
                  backgroundColor: "#0166b2",
                  border: "1.5px solid #0166b2",
                  width: "10%",
                  height: "40px",
                  marginLeft: "12%",
                }}
                list="batch"
                type="text"
                placeholder="Batch"
              ></input>
              <datalist style={{color:'white'}} id="batch">
                  <option value="2018-2022"/>
                  <option value="2019-2023"/>
                  <option value="2020-2024"/>
                  <option value="2021-2025"/>
                  <option value="2022-2026"/>
              </datalist>
              <button style={{backgroundColor:'#0166b2',marginLeft:'5%',color:'white'}}
              type="submit"> 
              <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faSearch} />
              </button>
  </div>
  </form>

  )
};

export default AddMentees;
