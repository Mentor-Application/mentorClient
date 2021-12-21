import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FamilyProfile } from "../interfaces/FamilyProfile";
import SchoolRecord from "./SchoolRecord";

const FamilyProfile = ({ studentId, canEditProp }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [familyProfile, setFamilyProfile] = useState<Array<FamilyProfile>>([]);

  let url: string;

  useEffect(() => {
    url = `student/list/familyProfile/${studentId}`;
    setCanEdit(canEditProp);
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0) {
          setFamilyProfile([
            {
              familyProfileId: "",
              relationShip: "",
              age: null,
              educationalQualification: "",
              occupation: "",
              annualIncome: null,
            },
            {
              familyProfileId: "",
              relationShip: "",
              age: null,
              educationalQualification: "",
              occupation: "",
              annualIncome: null,
            },
            {
              familyProfileId: "",
              relationShip: "",
              age: null,
              educationalQualification: "",
              occupation: "",
              annualIncome: null,
            },
          ]);
        } else {
          if (data.length < 2) {
            while (data.length <= 2) {
              data.push({
                familyProfileId: "",
                relationShip: "",
                age: null,
                educationalQualification: "",
                occupation: "",
                annualIncome: null,
              });
            }
          }
          setFamilyProfile(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let apiService: ApiService = new ApiService();
  const updateFamilyProfile = (e) => {
    e.preventDefault();
    setCanEdit(true);
    apiService
      .post(`student/${studentId}/familyprofile`, familyProfile)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
      <form style={{ overflowX: "auto", marginLeft: "10%" }}>
        <table style={{ marginTop: "10%" }} className={classes.table}>
          <tr>
            <th style={{ width: "5%" }} className={classes.tablehead}>
              No.
            </th>
            <th className={classes.tablehead}>Relationship</th>
            <th style={{ width: "10%" }} className={classes.tablehead}>
              Age
            </th>
            <th style={{ width: "30%" }} className={classes.tablehead}>
              Educational Qualification
            </th>
            <th style={{ width: "25%" }} className={classes.tablehead}>
              Occupation
            </th>
            <th className={classes.tablehead}>Annual Income(rs)</th>
          </tr>
          {familyProfile.map((items, index) => {
            return (
              <tr>
                <td className={classes.tablehead}>{index + 1}</td>
                <td className={classes.table}>
                  {(() => {
                    if (index + 1 === 1) {
                      items.relationShip = "Father";
                      return "Father";
                    } else if (index + 1 === 2) {
                      items.relationShip = "Mother";
                      return "Mother";
                    } else {
                      items.relationShip = "sibling(s)";
                      return "Sibling(s)";
                    }
                  })()}
                </td>

                <td className={classes.table}>
                  <input
                    key={items.age}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.age = parseInt(e.target.value);
                    }}
                    defaultValue={items.age}
                    className={classes.inputbox}
                    type="number"
                  />
                </td>
                <td className={classes.table}>
                  <input
                    key={items.educationalQualification}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.educationalQualification = e.target.value;
                    }}
                    defaultValue={items.educationalQualification}
                    className={classes.inputbox}
                    type="text"
                  />
                </td>
                <td className={classes.table}>
                  <input
                    key={items.occupation}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.occupation = e.target.value;
                    }}
                    defaultValue={items.occupation}
                    className={classes.inputbox}
                    type="text"
                  />
                </td>
                <td className={classes.table}>
                  <input
                    key={items.annualIncome}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.annualIncome = parseInt(e.target.value);
                    }}
                    defaultValue={items.annualIncome}
                    className={classes.inputbox}
                    type="text"
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </form>
      <div style={{ marginTop: "5%", marginLeft: "83%" }}>
        <button
          className={classes.icon}
          type="button"
          onClick={(e) => {
            console.log(familyProfile);
            updateFamilyProfile(e);
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default FamilyProfile;
