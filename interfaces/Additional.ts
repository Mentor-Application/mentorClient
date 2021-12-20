export class Additional{
    studentId!: string;
    percentage!: string;
    className!: string;
    rank!: string;
    graduateStudy!: string;
    careerInfo!: string;
    deserialize(input: any, output: any): this{
        if(input){
            output.studentId=input.studentId;
            output.percentage=input.percentage;
            output.className=input.className;
            output.rank=input.rank;
            output.graduateStudy=input.graduateStudy;
            output.careerInfo=input.careerInfo;
        }
        return output;
    }
}