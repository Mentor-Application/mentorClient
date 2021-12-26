import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { FamilyProfile } from "../interfaces/FamilyProfile";
import SchoolRecord from "./SchoolRecord";

const FamilyProfile = ({ studentId, canEditProp, editButton }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [familyProfile, setFamilyProfile] = useState<Array<FamilyProfile>>([]);
  const [toggleEdit, setToggleEdit] = useState(true);

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
          setCanEdit(true);
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

    apiService
      .post(`student/${studentId}/familyprofile`, familyProfile)
      .then((res) => {
        //console.log(res);
        setCanEdit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const edit = (e) => {
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11  d-flex flex-column align-items-center justify-content-center`;

  return (
    <div style={{ height: "100%" }} className={whiteBox}>
      <h3 className={classes.heading}>Family Profile</h3>
      <form
        style={{ height: "60%" }}
        className="d-flex justify-content-center align-items-center "
      >
        <div className="table-responsive col-7 col-sm-8 col-md-10 col-lg-12">
          <table className="table table-borderless">
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
                      type="number"
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </form>
      <div style={{ marginTop: "0%", marginLeft: "70%", width: "30%" }}>
        {editButton ? (
          <button
            className={classes.icon}
            onClick={edit}
            title="Edit"
            // style={{marginLeft:'60%'}}
          >
            <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
          </button>
        ) : null}

        <button
          hidden={canEdit}
          className={classes.icon}
          type="button"
          style={{ marginLeft: "5%" }}
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
