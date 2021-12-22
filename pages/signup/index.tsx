import React from "react";
import FrontPageButton from "../../components/FrontPageButton";
import Logo from "../../components/Logo";
import { FrontPageItems } from "../../utils/sample-data";
import Link from "next/link";

export const index = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <div
        style={{ background: "#ffffff", borderRadius: "30px", height: "70%" }}
        className="col-11 col-xl-3 col-lg-4 col-md-6 col-sm-7  flex-column   d-flex flex-column"
      >
        <div style={{ marginTop: "20px" }} className=" col-md-12 col-lg-12">
          <Logo></Logo>
        </div>
        <div
          style={{ fontWeight: "bold", marginTop: "5px" }}
          className="d-flex justify-content-center"
        >
          Signup as
        </div>
        <div
          style={{ marginTop: "20px" }}
          className="d-flex flex-column align-items-center"
        >
          {FrontPageItems.map((item) => {
            return (
              <Link href={item.route}>
                <a>
                  <FrontPageButton id={item.id} title={item.title} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
