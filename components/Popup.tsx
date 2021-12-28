import React from "react";
import classes from "../styles/popup.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Popup = ({ closePopup, handleSubmit }) => {
  return (
    <div
      style={{
        height: "30%",
        position: "absolute",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        marginTop: "10%",
        marginLeft: "0%",
      }}
      className="col-lg-3 col-md-5 col-sm-7 col-10"
    >
      <div
        style={{
          color: "#0166b2",
          textAlign: "center",
          fontWeight: "bold",
          height: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Are you sure ?</h3>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="popupFooter"
      >
        <button
          style={{
            color: "#ffffff",
            backgroundColor: "#0166b2",
            border: "2px solid white",
            borderRadius: "10px",
            width: "35%",
            height: "50%",
          }}
          onClick={() => {
            handleSubmit();
            closePopup();
          }}
        >
          submit
        </button>
        <button
          style={{
            color: "#ffffff",
            backgroundColor: "#0166b2",
            border: "2px solid white",
            borderRadius: "10px",
            width: "35%",
            height: "50%",
          }}
          onClick={(e) => {
            closePopup(false);
          }}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;
