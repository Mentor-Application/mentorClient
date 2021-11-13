import React from "react";
import Image from "next/image";
import logo from "../public/ssn-logo.jpg";

export const Logo = () => {
  return (
    <div className="d-flex flex-column ">
      <div className=" d-flex justify-content-center">
        <Image src={logo} height={90} width={200}></Image>
      </div>
      <div className="d-flex justify-content-center">
        <h4 style={{ fontWeight: "bold", marginTop: "10px" }}>
          online mentor record
        </h4>
      </div>
    </div>
  );
};

export default Logo;
