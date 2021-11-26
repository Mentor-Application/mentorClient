import React, { useEffect, useState } from "react";
import classes from "../styles/studentMainPage.module.css";
import { useForm } from "react-hook-form";
import { ApiService } from "../services/api.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const FamilyProfile = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  let apiService: ApiService = new ApiService();
  const submitProfile = (values) => {
    console.log(values);
  };

  let whiteBox = `${classes.forms} col-12 col-xl-11`;

  return (
    <div style={{ overflowX: "auto", height: "90%" }} className={whiteBox}>
      <form
        onSubmit={handleSubmit(submitProfile)}
        style={{ overflowX: "auto", marginLeft: "10%" }}
      >
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
          <tr>
            <td className={classes.tablehead}>1</td>
            <td className={classes.table}>Father</td>
            <td className={classes.table}>
              <input
                {...register("fage")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("feq")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("focc")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("fai")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td className={classes.tablehead}>2</td>
            <td className={classes.table}>Mother</td>
            <td className={classes.table}>
              <input
                {...register("mage")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("meq")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("mocc")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("mai")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td className={classes.tablehead}>3</td>
            <td className={classes.table}>Sibling(s)</td>
            <td className={classes.table}>
              <input
                {...register("sage")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("seq")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("socc")}
                className={classes.inputbox}
                type="text"
              />
            </td>
            <td className={classes.table}>
              <input
                {...register("sai")}
                className={classes.inputbox}
                type="text"
              />
            </td>
          </tr>
        </table>
        <div style={{ marginTop: "5%", marginLeft: "83%" }}>
          <button className={classes.icon} type="submit">
            <FontAwesomeIcon style={{ fontSize: "110%" }} icon={faCheck} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FamilyProfile;
