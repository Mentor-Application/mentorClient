import React from "react";
import classes from "../styles/studentMainPage.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Select from 'react-select';

export const StudentProfile = () => {
  

  return (
    <div className={classes.forms}>
      <form className="d-flex flex-row justify-content-around align-items-center">

       <div className="d-flex flex-column col-lg-4">
          <Row><label style={{marginTop:'20px'}} className={classes.label}>Name</label>
          <input style={{width:'80%'}} className={classes.box} type="text" ></input>
          </Row>
        
          <Row>
          <div className="radio">
            <label className={classes.label}>
              <input   value="Male" type="radio" />
              Male
            </label>
      
            <label style={{marginLeft:'150px'}} className={classes.label}>
              <input type="radio" value="Female"  />
              Female
            </label>
           </div>
          </Row>
          <Row>
            <Col>
          <label className={classes.label}>Branch</label>
          <Dropdown >
          <Dropdown.Toggle  id="dropdown-custom-1"  style={{backgroundColor:"white",border:'2.5px solid #0166b2',borderRadius:'25px',width:'65%',height:'40px'}} >    </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown"
            id="dropdown-menu-align-right" style={{backgroundColor:"white",borderRadius:'25px'}} >
              <Dropdown.Item eventKey="option-1">CSE</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">IT</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">EEE</Dropdown.Item>
              <Dropdown.Item eventKey="option-4">ECE</Dropdown.Item>
              <Dropdown.Item eventKey="option-5">MECH</Dropdown.Item>
              <Dropdown.Item eventKey="option-6">BME</Dropdown.Item>
              <Dropdown.Item eventKey="option-7">CIVIL</Dropdown.Item>
         </Dropdown.Menu>
         </Dropdown>{' '}
         </Col>
         <Col>
          <label className={classes.label}>Section</label>
          <input style={{width:'65%',height:'42.5px'}} className={classes.box} type="text" ></input>
          </Col>
          </Row>
          <Row>
          <label className={classes.label}>Date of Birth </label>
          <input style={{width:'80%'}} className={classes.box} type="date" ></input>
          </Row>
          <Row>
          <label className={classes.label}>Father's Mobile Number</label>
          <input style={{width:'80%'}} className={classes.box} type="text" ></input>
          </Row>
          <Row>
          <label className={classes.label}>Religion & Community</label>
          <input style={{width:'80%'}} className={classes.box} type="text" ></input>
          </Row>
          <Row>
            <Col>
              <label style={{marginBottom:'28px'}} className={classes.label}>Hostel / Day Scholar</label>
              <Dropdown >
              <Dropdown.Toggle  id="dropdown-custom-1"  style={{backgroundColor:"white",border:'2.5px solid #0166b2',borderRadius:'25px',width:'65%',height:'40px'}} >    </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown"
                id="dropdown-menu-align-right" style={{backgroundColor:"white",borderRadius:'25px'}} >
                  <Dropdown.Item eventKey="choice-1">Hosteller</Dropdown.Item>
                  <Dropdown.Item eventKey="choice-2">Day Scholar</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>{' '}
           </Col>

           <Col>
            <label className={classes.label}>Room No./Hostel No.</label>
            <input style={{width:'65%',height:'42.5px'}} className={classes.box} type="text" ></input>
           </Col>
          </Row>
          
       </div>

        

        <div className="d-flex flex-column col-lg-4">
          <Row>
          <label className={classes.label}>Email ID</label>
          <input style={{width:'80%'}} className={classes.box} type="email" ></input>
          </Row>
          <Row>
          <label className={classes.label}>Student's Mobile Number</label>
          <input style={{width:'80%'}} className={classes.box} type="text" ></input>
          </Row>
          <Row>
          <label className={classes.label}>Period of Study </label>
          <input style={{width:'80%'}} className={classes.box} type="text" ></input>
          </Row>
          <Row>
          <label className={classes.label}>Mother's Mobile Number</label>
          <input style={{width:'80%'}} className={classes.box} type="text" ></input>
          </Row>
          <Row>
          <label className={classes.label}>Blood Group</label>
          <input style={{width:'80%'}} className={classes.box} type="text" ></input>
          </Row>
          <Row>
          <label className={classes.label}>Address for Communication</label>
          <input style={{width:'80%'}} className={classes.box} type="textarea" ></input>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;
