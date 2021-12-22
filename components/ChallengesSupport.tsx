import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { User } from "../interfaces";
import { Challenges } from "../interfaces/Challenges";

const ChallengesSupport = ({ studentId, canEditProp,editButton}) => {
  const [canEdit, setCanEdit] = useState(false);
  const [challengesSupport, setChallengesSupport] = useState<Array<Challenges>>(
    []
  );
  const [toggleEdit, setToggleEdit] = useState(true);

  let url: string;

  useEffect(() => {
    url = `student/list/challenges/${studentId}`;
    setCanEdit(canEditProp);
    apiService
      .get(url)
      .then((res) => {
        const data = res;
        if (data.length === 0) {
          setChallengesSupport([
            {
              challengeId: "",
              domain: "",
              challenges: "",
              sourceOfSupport: "",
            },
            {
              challengeId: "",
              domain: "",
              challenges: "",
              sourceOfSupport: "",
            },
            {
              challengeId: "",
              domain: "",
              challenges: "",
              sourceOfSupport: "",
            },
            {
              challengeId: "",
              domain: "",
              challenges: "",
              sourceOfSupport: "",
            },
          ]);
        } else {
          if (data.length < 3) {
            while (data.length <= 3) {
              data.push({
                challengeId: "",
                domain: "",
                challenges: "",
                sourceOfSupport: "",
              });
            }
          }
          setChallengesSupport(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let apiService: ApiService = new ApiService();
  const updateChallengesSupport = (e) => {
    e.preventDefault();
    setCanEdit(true);
    apiService
      .post(`student/${studentId}/challenges`, challengesSupport)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const edit=(e)=>{
    e.preventDefault();
    setCanEdit(!toggleEdit);
    setToggleEdit(!toggleEdit);
  }

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
      <form className="d-flex flex-column justify-content-around align-items-center">
        <table
          style={{ marginTop: "10%", marginLeft: "10%" }}
          className={classes.table}
        >
          <tr>
            <th style={{ width: "10%" }} className={classes.tablehead}>
              No.
            </th>
            <th style={{ width: "20%" }} className={classes.tablehead}>
              Domain
            </th>
            <th style={{ width: "45%" }} className={classes.tablehead}>
              Challenges
            </th>
            <th style={{ width: "200%" }} className={classes.tablehead}>
              Sources of Support
            </th>
          </tr>
          {challengesSupport.map((items, index) => {
            return (
              <tr>
                <td className={classes.tablehead}>{index + 1}</td>
                <td className={classes.table}>
                  {(() => {
                    if (index + 1 === 1) {
                      return "Academic";
                    } else if (index + 1 === 2) {
                      return "Relationship";
                    } else if (index + 1 === 3) {
                      return "Health";
                    } else {
                      return "Financial";
                    }
                  })()}
                </td>
                <td className={classes.table}>
                  <input
                    key={items.challenges}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.challenges = e.target.value;
                    }}
                    defaultValue={items.challenges}
                    className={classes.inputbox}
                    type="text"
                  />
                </td>
                <td className={classes.table}>
                  <input
                    key={items.sourceOfSupport}
                    disabled={canEdit}
                    onChange={(e) => {
                      items.sourceOfSupport = e.target.value;
                    }}
                    defaultValue={items.sourceOfSupport}
                    className={classes.inputbox}
                    type="text"
                  />
                </td>
              </tr>
            );
          })}
        </table>
        <div style={{ marginTop: "5%", marginLeft: "70%",marginBottom:'5%' }}>
      {editButton ? (
          <button
            className={classes.icon}
            onClick={edit}
            title="Edit"
            style={{marginRight:'10px'}}
          >
            <FontAwesomeIcon style={{ fontSize: "100%" }} icon={faPen} />
          </button>
        ) : null}

          <button
            className={classes.icon}
            type="button"
            // style={{marginLeft:'1%'}}
            onClick={(e) => {
              console.log(challengesSupport);
              updateChallengesSupport(e);
            }}
          >
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChallengesSupport;
