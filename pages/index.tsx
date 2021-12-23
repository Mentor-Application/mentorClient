import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { useRouter } from "next/dist/client/router";
import classes from "../styles/login.module.css";
import { loginInfo, User } from "../interfaces";
import { ApiService } from "../services/api.service";
import Link from "next/link";

export const login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("Invalid login");
  const router = useRouter();
  const [isError, setIsError] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(Object);
  const [userInfo, setUserInfo] = useState(Object);
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const loginData: loginInfo = {
    email: email,
    password: password,
  };

  let apiService: ApiService = new ApiService();

  useEffect(() => {
    setAuthUser(loggedInUser);
  }, [loggedInUser]);

  const deserializerUser = (input: any) => {
    userInfo.id = input.id;
    setUserId(input.id);
    userInfo.userName = input.userName;
    userInfo.email = input.email;
    userInfo.roles = input.roles;
    userInfo.studentId = input.studentId;
    userInfo.mentorId = input.mentorId;
    userInfo.parentId = input.parentId;
    userInfo.facultyId = input.facultyId;
    return userInfo;
  };

  const deserializerToken = (input: any) => {
    const token = `${input.tokenType} ${input.accessToken}`;
    console.log(token);
    sessionStorage.setItem("accessToken", JSON.stringify(token));
  };

  const setAuthUser = (user) => {
    const currentuser = deserializerUser(user);
    console.log(currentuser);
    sessionStorage.setItem("user", JSON.stringify(currentuser));
    deserializerToken(user);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    apiService
      .post("auth/login", loginData)
      .then((res) => {
        const { status, mentorId, studentId, parentId, facultyId } = res;
        if (status === "OK") {
          setLoggedInUser(res);
          setIsError(true);
          if (studentId != null) {
            router.push("student");
          } else if (mentorId != null) {
            router.push("mentor");
          } else if (facultyId !=null) {
            router.push("faculty");
          }
            else if(parentId!= null){
              router.push("parent")
            }
        } else {
          setIsError(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(false);
      });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div
        style={{ background: "#ffffff", borderRadius: "30px", height: "70%" }}
        className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-column justify-content-center"
      >
        <div
          style={{ marginTop: "7%" }}
          className="col-sm-10 col-md-12 col-11 "
        >
          <Logo></Logo>
        </div>

        <form
          style={{ marginTop: "5%" }}
          className=" d-flex flex-column align-items-center"
          onSubmit={handleLogin}
        >
          <div style={{ color: "red", marginBottom: "0%" }} hidden={isError}>
            {errorMessage}
          </div>
          <input
            placeholder="Username"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Username")}
            type="text"
            className={classes.username}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <input
            placeholder="Password"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Password")}
            type="password"
            className={classes.password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" className={classes.login}>
            Log in
          </button>
          <div className={classes.forgotPassword}>
            <Link href="/signup">
              <div>SignUp</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default login;
