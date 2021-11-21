import React from "react";
import classes from "../styles/studentMainPage.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export const ParentGuardian = () => {

    return (

    

        <div className={classes.forms}>
            
          <form className="d-flex flex-row justify-content-around align-items-center">
           <div className="d-flex flex-column col-lg-4">
                <Row>
                   <h3 style={{marginTop:'5%',marginBottom:'5%'}} className={classes.heading}>Parent</h3>
                </Row>

                <Row><label style={{marginTop:'0%'}} className={classes.label}>Name</label>
                <input style={{width:'80%'}} className={classes.box} type="text" ></input>
                </Row>

                <Row>
                <label className={classes.label}>Address for Communication</label>
                <textarea style={{width:'80%',height:'90px'}} className={classes.box}  ></textarea>
                </Row>

                <Row>
                <label style={{marginTop:'20%'}} className={classes.label}>Email ID</label>
                <input style={{width:'80%'}} className={classes.box} type="text" ></input>
                </Row>
              
           </div>
    
           <div className={classes.vl}></div>
    
            <div className="d-flex flex-column col-lg-4">
                <Row>
                   <h4 style={{marginTop:'10%'}} className={classes.heading}>Local Guardian(for hosteller)</h4>
                </Row>

                <Row><label style={{marginTop:'20px'}} className={classes.label}>Name</label>
                <input style={{width:'80%'}} className={classes.box} type="text" ></input>
                </Row>

                <Row>
                <label className={classes.label}>Address for Communication</label>
                <textarea style={{width:'80%',height:'90px'}} className={classes.box}  ></textarea>
                </Row>

                <Row>
                <label className={classes.label}>Mobile No.</label>
                <input style={{width:'80%'}} className={classes.box} type="text" ></input>
                </Row>

                <Row>
                <label className={classes.label}>Email ID</label>
                <input style={{width:'80%'}} className={classes.box} type="text" ></input>
                </Row>
            </div>
          </form>
        </div>
      );
    };
    
export default ParentGuardian;