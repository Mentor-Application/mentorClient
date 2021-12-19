export class LocalGuardian {
  guardianId: string;
  guardianName: string;
  address: string;
  mobileNumber: string;
  emailId: string;

  deserialize(input: any, output: any): this {
    if (input) {
      output.guardianId = input.guardianId;
      output.guardianName = input.guardianName;
      output.address=input.address;
      output.mobileNumber=input.mobileNumber;
      output.emailId=input.emailId;
    }
    return output;
  }
}
