export class StrengthAssessment {
  iAm: string;
  iCan: string;
  iHave: string;

  deserialize(input: any, output: any): this {
    if (input) {
      output.studentId = input.studentId;
      output.registerNumber = input.registerNumber;
      output.studentName = input.studentName;
    }
    return output;
  }
}
