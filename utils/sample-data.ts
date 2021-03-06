import { frontPageItems } from "./../interfaces/frontPageItems";
import { MenteeItems } from "../interfaces";
export const FrontPageItems: Array<frontPageItems> = [
  { id: 1, title: "Student", route: "/signup/studentSignUp" },
  { id: 2, title: "Mentor", route: "" },
  { id: 3, title: "Parent", route: "/signup/parentSignUp" },
  { id: 4, title: "Faculty", route: "/signup/facultySignUp" },
];

export const MenteeCardItems: Array<MenteeItems> = [
  { studentId: 1, studentName: "Vaseekaran", regNo: "195001124" },
  { studentId: 2, studentName: "Srikanth", regNo: "195001108" },
  { studentId: 3, studentName: "Vignesh", regNo: "195001127" },
  { studentId: 4, studentName: "Pravin", regNo: "195001082" },
  { studentId: 5, studentName: "Yashwanth", regNo: "195001130" },
  { studentId: 6, studentName: "Venkat", regNo: "195001126" },
];
