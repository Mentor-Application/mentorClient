import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { User } from "../interfaces";
import { GoalsGrid } from "../interfaces/GoalsGrid";

const GoalsGrid = ({ studentId, canEditProp }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [goalsGrid, setGoalsGrid] = useState<Array<GoalsGrid>>([]);

  let url: string;

  useEffect(() => {
    url = `student/list/goalsgrid/${studentId}`;
    setCanEdit(canEditProp);
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0) {
          setGoalsGrid([
            {
              goalId: "",
              domain: "",
              goal: null,
              planOfAction: "",
            },
            {
              goalId: "",
              domain: "",
              goal: null,
              planOfAction: "",
            },
            {
              goalId: "",
              domain: "",
              goal: null,
              planOfAction: "",
            },
            {
              goalId: "",
              domain: "",
              goal: null,
              planOfAction: "",
            },
          ]);
        } else {
          if (data.length < 3) {
            while (data.length <= 3) {
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
          setGoalsGrid(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let apiService: ApiService = new ApiService();
  const updateGoalsGrid = (e) => {
    e.preventDefault();
    setCanEdit(true);
    apiService
      .post(`student/${studentId}/goalsgrid`, goalsGrid)
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
      <form style={{ marginLeft: "10%", height: "80%" }}>
        <table style={{ marginTop: "10%" }} className={classes.table}>
          <tr>
            <th style={{ width: "10%" }} className={classes.tablehead}>
              No.
            </th>
            <th className={classes.tablehead}>Domain</th>
            <th style={{ width: "30%" }} className={classes.tablehead}>
              Goal
            </th>
            <th style={{ width: "30%" }} className={classes.tablehead}>
              Plan of Action
            </th>
          </tr>
          {goalsGrid.map((items, index) => {
            return (
              <tr>
                <td className={classes.tablehead}>1.</td>
                <td className={classes.table}>
                  {(() => {
                    if (index + 1 === 1) {
                      return "Acquire (Don’t have, but want)";
                    } else if (index + 1 === 2) {
                      return "Eliminate (Have but don’t want)";
                    } else if (index + 1 === 3) {
                      return "Avoid (Don’t have and don’t want)";
                    } else {
                      return "Sustain (Have and want)";
                    }
                  })()}
                </td>
                <td className={classes.table}>
                  <input
                    key={items.goal}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.goal == e.target.value;
                    }}
                    defaultValue={items.goal}
                    className={classes.inputbox}
                    type="text"
                  />
                </td>
                <td className={classes.table}>
                  <input
                    key={items.planOfAction}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.planOfAction == e.target.value;
                    }}
                    defaultValue={items.planOfAction}
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
          type="submit"
          onClick={(e) => {
            console.log(goalsGrid);
            updateGoalsGrid(e);
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default GoalsGrid;
