import React, { useState } from "react";
import classes from "../../../styles/studentMainPage.module.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CatMarks from "../../../components/CatMarks";
import { Dropdown, DropdownButton, Row } from "react-bootstrap";
import SemesterMarks from "../../../components/SemesterMarks";

export const Marks = ({ studentId, canEdit, editButton }) => {
  const [semesterName, setSemesterName] = useState("Semester1");

  return (
    <div
      style={{
        marginLeft: "3%",
        background: "#ffffff",
        height: "87%",
        marginTop: "70px",
        overflowY: "scroll",
        marginBottom: "5%",
      }}
      className="col-11"
    >
      <div style={{ marginLeft: "10%" }}>
        <Dropdown>
          <Dropdown.Toggle
            id="dropwdown-custom-1"
            style={{
              color: "white",
              backgroundColor: "#0166b2",
              border: "2.5px solid #0166b2",
              fontWeight: "bold",
              marginTop: "5%",
              borderRadius: "15px",
              width: "140px",
              height: "40px",
            }}
          >
            {semesterName}
          </Dropdown.Toggle>
          <Dropdown.Menu
            id="dropdown-menu-align-right"
            style={{ background: "white", color: "#0166b2" }}
            className="DropDown"
          >
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              onClick={() => {
                setSemesterName("Semester1");
              }}
            >
              Semester-1
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              onClick={() => {
                setSemesterName("Semester2");
              }}
            >
              Semester-2
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              onClick={() => {
                setSemesterName("Semester3");
              }}
            >
              Semester-3
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              onClick={() => {
                setSemesterName("Semester4");
              }}
            >
              Semester-4
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              onClick={() => {
                setSemesterName("Semester5");
              }}
            >
              Semester-5
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              onClick={() => {
                setSemesterName("Semester6");
              }}
            >
              Semester-6
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              onClick={() => {
                setSemesterName("Semester7");
              }}
            >
              Semester-7
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#0166b2", fontWeight: "bold" }}
              href="/Semester8"
              onClick={() => {
                setSemesterName("Semester8");
              }}
            >
              Semester-8
            </Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center    col-lg-12 col-md-12 col-xl-12"
      >
        <CatMarks
          semesterName={semesterName}
          studentId={studentId}
          canEditProp={canEdit}
          editButton={editButton}
        ></CatMarks>
      </div>

      <div
        style={{ height: "100%", marginTop: "10%" }}
        className="d-flex justify-content-center  col-lg-12 col-md-12 col-xl-12"
      >
        <SemesterMarks
          canEditProp={canEdit}
          semesterName={semesterName}
          studentId={studentId}
          editButton={editButton}
        ></SemesterMarks>
      </div>
    </div>
  );
};

export default Marks;
