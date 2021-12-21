export class Overall{
    
    studentId!: string;
    year1!: string;
    year2!: string;
    year3!: string;
    year4!: string;

    deserialize(input: any, output: any): this{
        if(input) {
            
            output.studentId=input.studentId;
            output.year1=input.year1;
            output.year2=input.year2;
            output.year3=input.year3;
            output.year4=input.year4;
        }
        return output;
}
}