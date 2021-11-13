import React from "react";
import classes from "../styles/frontPage.module.css";

type frontProp = {
  id: number;
  title: string;
};

export const FrontPageButton = ({ id, title }: frontProp) => {
  return (
    <div>
      <button className={classes.button}>{title}</button>
    </div>
  );
};

export default FrontPageButton;
