export interface Ijobs{
  
    companyName: string,
    city: string,
    companyID:{
        companyName:string;
        cities:{
    cityName: string
        },
    }
    jobId: number,
    jobDescription: string,
    jobField: string,
    jobStartDate:[],
    jobEndDate: string,
    jobIsFinished: boolean,
    degreeRequierd: string,
    genderToJob: string,
    jobTime: string,
    jobTitle
  
}

