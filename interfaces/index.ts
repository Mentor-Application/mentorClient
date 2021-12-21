// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: string;
  userName: string;
  email: string;
  studentId: string;
  mentorId: string;
  parentId: string;
  facultyId: string;
  roles: Array<string>;
};

export type loginInfo = {
  email: string;
  password: string;
};
export type MenteeItems = {
  studentId: number;
  studentName: string;
  regNo: string;
};

export type viewProfile = {
  studentId: string;
  canEdit: boolean;
  editButton:boolean;
};
