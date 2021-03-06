import { StrengthAssessment } from "./StrengthAssessment";
import { Hobbies } from "./Hobbies";
import { FamilyProfile } from "./FamilyProfile";
import { LocalGuardian } from "./LocalGuardian";
import { SchoolRecord } from "./SchoolRecord";
import { GoalsGrid } from "./GoalsGrid";
import { Challenges } from "./Challenges";

export class Student {
  studentId!: string;
  registerNumber!: string;
  studentName!: string;
  personalEmail!: string;
  mentorId!: string;
  gender!: string;
  dob!: string;
  branch!: string;
  section!: string;
  mobileNumber!: string;
  fatherMobileNumber!: string;
  motherMobileNumber!: string;
  religion!: string;
  community!: string;
  bloodGroup!: string;
  studentType!: string;
  addressForCommunication!: string;
  periodOfStudy!: string;
  emailId!: string;
  roomNumber!: string;
  busRouteNumber!: string;
  localGuardian!: LocalGuardian;
  schoolRecord!: SchoolRecord[];
  familyProfile!: FamilyProfile[];
  hobbies!: Hobbies[];
  goalsGrid!: GoalsGrid[];
  challenges!: Challenges[];
  strenghAssessment!: StrengthAssessment;

  deserialize(input: any, output: any): this {
    if (input) {
      output.studentId = input.studentId;
      output.registerNumber = input.registerNumber;
      output.studentName = input.studentName;
      output.personalEmail = input.personalEmail;
      output.mentorId = input.mentorId;
      output.gender = input.gender;
      output.dob = input.dob;
      output.branch = input.branch;
      output.section = input.section;
      output.mobileNumber = input.mobileNumber;
      output.fatherMobileNumber = input.fatherMobileNumber;
      output.motherMobileNumber = input.motherMobileNumber;
      output.religion = input.religion;
      output.community = input.community;
      output.bloodGroup = input.bloodGroup;
      output.studentType = input.studentType;
      output.addressForCommunication = input.addressForCommunication;
      output.periodOfStudy = input.periodOfStudy;
      output.emailId = input.emailId;
      output.roomNumber = input.roomNumber;
      output.busRouteNumber = input.busRouteNumber;
      output.localGuardian = input.localGuardian;
      output.schoolRecord = input.schoolRecord;
      output.familyProfile = input.familyProfile;
      output.hobbies = input.hobbies;
      output.goalsGrid = input.goalsGrid;
      output.challenges = input.challenges;
      output.strenghAssessment = input.strenghAssessment;
    }
    return output;
  }

  setValue(setval, input) {
    setval("studentId", input.studentId);
    setval("registerNumber", input.registerNumber);
    setval("studentName", input.studentName);
    setval("personalEmail", input.personalEmail);
    setval("mentorId", input.mentorId);
    setval("gender", input.gender);
    setval("dob", input.dob);
    setval("branch", input.branch);
    setval("section", input.section);
    setval("mobileNumber", input.mobileNumber);
    setval("fatherMobileNumber", input.fatherMobileNumber);
    setval("motherMobileNumber", input.motherMobileNumber);
    setval("religion", input.religion);
    setval("community", input.community);
    setval("bloodGroup", input.bloodGroup);
    setval("studentType", input.studentType);
    setval("addressForCommunication", input.addressForCommunication);
    setval("periodOfStudy", input.periodOfStudy);
    setval("emailId", input.emailId);
    setval("roomNumber", input.roomNumber);
    setval("busRouteNumber", input.busRouteNumber);
    // setval("localGuardian",input.localGuardian);
    // setval("schoolRecord",input.schoolRecord);
    // setval("familyProfile",input.familyProfile);
    // setval("hobbies",input.hobbies);
    // setval(input.goalsGrid);
    // setval(input.challenges);
    // setval(input.strenghAssessment);
  }
}
