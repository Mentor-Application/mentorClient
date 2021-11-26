import classNames from 'classnames'
import React from 'react'
import classes from "../../../styles/studentMainPage.module.css";
import Link from 'next/dist/client/link';
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CatMarks from '../../../components/CatMarks';
import { Dropdown, DropdownButton, Row } from 'react-bootstrap';
import SemesterMarks from '../../../components/SemesterMarks';

export const Marks = () => {
    const { register, handleSubmit, setValue, getValues,formState: { errors }, } = useForm();
    return (
        <div
            style={{ background: "#ffffff", borderRadius: "30px", width:"98%",height: "90%",marginTop:"70px",overflowY:"scroll" }}
            className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex  justify-content-center ">  
            
            {/* <div className="dropdown">
                <button style={{marginTop:"5%"}}className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     SEMESTER
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" >SEM 1</a>
                    <a className="dropdown-item" >SEM 2</a>
                    <a className="dropdown-item" >SEM 3</a>
                    <a className="dropdown-item" >SEM 4</a>
                    <a className="dropdown-item" >SEM 5</a>
                    <a className="dropdown-item" >SEM 6</a>
                    <a className="dropdown-item" >SEM 7</a>
                    <a className="dropdown-item" >SEM 8</a>
                </div>
                <div style={{color:"#0166b2",fontWeight:"bold"}}>MENTOR NAME:</div>
            </div> */}
                
            <div>
                {/* <input style={{color:"#0166b2",background:"#ffffff",border: "1.5px solid #0166b2",borderRadius: "15px",width: "20%",height: "40px",marginLeft: "12%"}} list="Semester" type="text">
                <datalist id="branches">
                    <option value="SEM-1" />
                    <option value="SEM-2" />
                    <option value="SEM-3" />
                    <option value="SEM-4" />
                    <option value="SEM-5" />
                    <option value="SEM-6" />
                    <option value="SEM-7" />
                    <option value="SEM-8" />
                </datalist>
            </input> */}
            <Dropdown>
            <Dropdown.Toggle id="dropwdown-custom-1"style={{
                    color: "white",
                    backgroundColor: "#0166b2",
                    border: "2.5px solid #0166b2",
                    marginLeft:"20px",
                    fontWeight:'bold',
                    marginTop:"5%",
                    borderRadius: "15px",
                    width: "15%",
                    height: "40px",}}>Semester</Dropdown.Toggle>
                     <Dropdown.Menu
                    id="dropdown-menu-align-right"
                    style={{background:"white",color:"#0166b2"}}
                    className="DropDown"
                    
                >
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester1">Semester-1</Dropdown.Item>
                <Dropdown.Item  style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester2">Semester-2</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item  style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester3">Semester-3</Dropdown.Item>
                <Dropdown.Item  style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester4">Semester-4</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester5">Semester-5</Dropdown.Item>
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester6">Semester-6</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester7">Semester-7</Dropdown.Item>
                <Dropdown.Item style={{color:'#0166b2',fontWeight:'bold'}} href="#/Semester8">Semester-8</Dropdown.Item>
                <Dropdown.Divider />
                </Dropdown.Menu>
                </Dropdown>
                <Row>
                <div className={classes.internal} style={{color:'#0166b2',marginTop:'5%'}}>Internal Assesment Results </div>
                </Row>
                <div style={{ height: "100%" }}
                    className="d-flex justify-content-center  col-lg-12 col-md-11 col-xl-12">
                        <CatMarks></CatMarks></div>
                <Row>
                <div className={classes.univ} style={{color:'#0166b2',}}>University examination Results </div>
                </Row>
                <div style={{ height: "110%" }}
                    className="d-flex justify-content-center align-items-center col-lg-12 col-md-11 col-xl-12" >
                        <SemesterMarks></SemesterMarks></div>       
               </div>
        </div>
    );
}

export default Marks
