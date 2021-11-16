import React, { useState } from "react";
import Logo from "../components/Logo";
import { useRouter } from "next/dist/client/router";
import classes from "../styles/login.module.css";

export const login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email + " " + password);
    try {
      const response = await fetch("http://localhost:8090/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.json();
      data.then((res) => {
        const items = res;
        console.log(items);
        if (res.status === "OK") {
          router.push("/landing");
        } else {
          console.log("error");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div
        style={{ background: "#ffffff", borderRadius: "30px", height: "70%" }}
        className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-column"
      >
        <div
          style={{ marginTop: "7%" }}
          className="col-sm-10 col-md-12 col-11 "
        >
          <Logo></Logo>
        </div>

        <form
          style={{ marginTop: "7%" }}
          className=" d-flex flex-column align-items-center"
          onSubmit={handleLogin}
        >
          <input
            placeholder="Username"
            type="text"
            className={classes.username}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <input
            placeholder="Password"
            type="password"
            className={classes.password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" className={classes.login}>
            Log in
          </button>
          <div className={classes.forgotPassword}>
            Forgot Username or Password?
          </div>
        </form>
      </div>
    </div>
  );
};
export default login;
