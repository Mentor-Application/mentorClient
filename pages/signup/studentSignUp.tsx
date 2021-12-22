import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo";
import { environment } from "../../environments/environments";
import { ApiService } from "../../services/api.service";
import classes from "../../styles/login.module.css";

export const studentSignUp = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(true);
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  const handleLogin = async (values) => {
    const response = await axios
      .post(`${environment.api_url}/auth/signup`, values)
      .then((res) => {
        console.log(res);
        setIsError(true);
        router.replace("/");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setIsError(false);
      });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div
        style={{ background: "#ffffff", borderRadius: "30px", height: "80%" }}
        className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-column justify-content-center  "
      >
        <div
          style={{ marginTop: "5%" }}
          className="col-sm-10 col-md-12 col-11 "
        >
          <Logo></Logo>
        </div>
        <div
          style={{ color: "red", marginBottom: "3%", textAlign: "center" }}
          hidden={isError}
        >
          {errorMessage}
        </div>
        <form
          style={{ marginTop: "5%" }}
          className=" d-flex flex-column align-items-center"
        >
          <input
            placeholder="Username"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Username")}
            type="text"
            className={classes.username}
            {...register("userName", {
              required: "Username Required",
            })}
          ></input>
          <input
            placeholder="SSN Email"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "SSN Email")}
            type="email"
            className={classes.username}
            {...register("email", {
              required: "Email Required",
            })}
          ></input>
          <input
            placeholder="Password"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Password")}
            type="password"
            className={classes.password}
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            placeholder="Repeat Password"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Repeat Password")}
            type="password"
            required
            className={classes.password}
            onChange={(e) => setRepeatPassword(e.target.value)}
          ></input>

          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(password);
              console.log(repeatPassword);
              if (repeatPassword.match(password)) {
                setValue("password", password);
                setValue("roles", ["student"]);
                handleSubmit(handleLogin)();
                setIsError(true);
              } else {
                setIsError(false);
                setErrorMessage("Password and Repeat password are not same");
              }
            }}
            className={classes.login}
          >
            Signup as Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default studentSignUp;
