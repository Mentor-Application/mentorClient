import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo";
import { User } from "../../interfaces";
import { ApiService } from "../../services/api.service";
import classes from "../../styles/login.module.css";
let loggedInUser: User;
import Image from "next/image";
import prof from "../../public/grey.jpg";
import axios from "axios";
import { environment } from "../../environments/environments";
import { useRouter } from "next/dist/client/router";



const index = () => {

    const { register, handleSubmit, setValue } = useForm();
    const [userName,setUserName]=useState("");
    const [repeatPassword,setRepeatPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [image, setImage] = useState("");
    const [error,setError] = useState(true);
    const [email,setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(true);
    const router = useRouter();

    let apiService: ApiService = new ApiService();

    useEffect(() => {
        loggedInUser = JSON.parse(sessionStorage.getItem("user"));
        
        setUserName(loggedInUser.userName);
        setEmail(loggedInUser.email);
        apiService
          .get(`student/${loggedInUser.studentId}/picture/list`, "arraybuffer")
          .then((res) => {
            const data = res;
            // setImage(data);
            const base64 = Buffer.from(data, "binary").toString("base64");
            setImage("data:image/jpg;base64," + base64);
            // console.log("picture", base64);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


      const submit=async(values)=>{
       console.log(values);
       const response = await axios
      .post(`${environment.api_url}/auth/changepassword`, values)
      .then((res) => {
        console.log(res);
        setIsError(true);
        router.push(`/student/${loggedInUser.studentId}`);
      })
      .catch((error) => {
        setErrorMessage("Old Password Incorrect");
        setIsError(false);
      });
      }


    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
      <div
        style={{ background: "#ffffff", borderRadius: "30px", height: "85%" }}
        className="col-11 col-xl-4 col-lg-4 col-md-6 col-sm-7 d-flex flex-column justify-content-center  "
      >
        <div
          style={{ marginTop: "5%" }}
          className="d-flex flex-column align-items-center justify-content-around"
        >
             <Image
              src={image ? image : prof}
              width="200px"
              height="200px"
            ></Image>
            <h4 style={{ fontWeight: "bold", marginTop: "15px",color:'#0166b2' }}>
                {userName}
            </h4>
            <div
          style={{ color: "red", marginBottom: "3%", textAlign: "center" }}
          hidden={isError}
        >
          {errorMessage}
        </div>
            </div>
            
            <form
          style={{ marginTop: "5%" }}
          className=" d-flex flex-column align-items-center"
        >
            <input
            className={classes.username}
            placeholder="Old Password"
            {...register("password", {
                required: "Required",
              })}
            />
            <input
            className={classes.username}
            placeholder="New Password"
            {...register("newPassword", {
                required: "Required",
              })}
              onChange={(e)=>setNewPassword(e.target.value)}
            />
            <input
            className={classes.username}
            placeholder="Repeat New Password"
            {...register("repeatPassword", {
                required: "Required",
              })}
              onChange={(e)=>setRepeatPassword(e.target.value)}
            />
            <button
            className={classes.login}
            onClick={(e)=>{
                e.preventDefault();
                if(newPassword.match(repeatPassword)){
                    console.log("Password Matches")
                    setValue("email",email);
                    handleSubmit(submit)();
                    setIsError(true);
                }
                else{
                    setIsError(false);
                    setErrorMessage("New Password and Repeat Password are not same");
                }
            }}>
                Change Password
            </button>
        </form>
            </div>
        </div>
    )
}

export default index
