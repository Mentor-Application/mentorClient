import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { User } from "../../interfaces";

export const index = () => {
  const router = useRouter();
  let loggedInUser: User;
  let url: string;
  useEffect(() => {
    loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    url = `student/${loggedInUser.studentId}`;
    router.push(url);
  }, []);

  return <div>student</div>;
};

export default index;
