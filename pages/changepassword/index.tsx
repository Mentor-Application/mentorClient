import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo";
import { User } from "../../interfaces";
import { ApiService } from "../../services/api.service";
import classes from "../../styles/login.module.css";
let loggedInUser: User;
import Image from "next/image";
import prof from "../../public/grey.jpg";



const index = () => {

    const { register, handleSubmit, setValue } = useForm();
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [image, setImage] = useState("");
    const [error,setError] = useState(true);

    let apiService: ApiService = new ApiService();

    useEffect(() => {
        loggedInUser = JSON.parse(sessionStorage.getItem("user"));
        
        setUserName(loggedInUser.userName);
      
        apiService
          .get(`student/${loggedInUser.studentId}/picture/list`, "arraybuffer")
          .then((res) => {
            const data = res;
            // setImage(data);
            const base64 = Buffer.from(data, "binary").toString("base64");
            setImage("data:image/jpg;base64," + base64);
            console.log("picture", base64);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

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
            </div>
            
            <form
          style={{ marginTop: "5%" }}
          className=" d-flex flex-column align-items-center"
        >
            <input
            className={classes.username}
            placeholder="Old Password"
            {...register("oldPassword", {
                required: "Required",
              })}
            />
            <input
            className={classes.username}
            placeholder="New Password"
            {...register("newPassword", {
                required: "Required",
              })}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <input
            className={classes.username}
            placeholder="Repeat New Password"
            {...register("repeatNewPassword", {
                required: "Required",
              })}
              onChange={(e)=>setNewPassword(e.target.value)}
            />
            <div style={{ color: "red", marginBottom: "3%",marginTop:'-3%', textAlign: "center" }} hidden={error}>
                Password and Repeat Password are not same
            </div>
            <button
            className={classes.login}
            onClick={(e)=>{
                e.preventDefault();
                if(password.match(newPassword)){
                    console.log("Password Matches")
                }
                else{
                    setError(false);
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