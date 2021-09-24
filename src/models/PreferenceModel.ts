export interface PreferenceModel {
    username: string | undefined;
    applicant: string | undefined;
    score: number | undefined;
    capability: number | undefined;
    willingness: number | undefined;
    customerInsights: [] | undefined;
    loanAmount: string | undefined;
    language: string;
    location: string;
    amount: string;
    name: string;
    gender: string;
    marital_status: string;
    age: string;
    date: Date;
    // responses: Object;
    duration: string;
    questionSet?: string;
    surveyQuestion?: string;
}