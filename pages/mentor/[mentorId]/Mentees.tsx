import React from "react";
import MenteeCard from "../../../components/MenteeCard";
import { MenteeCardItems } from "../../../utils/sample-data";


export const Mentees = () => {
  
  return(
  <div> 
    {MenteeCardItems.map(items => {
      return <MenteeCard studentName={items.studentName} regNo={items.regNo}></MenteeCard>
    })}
  </div>
  );
};

export default Mentees;
