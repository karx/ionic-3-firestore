import { Question } from './../models/question';
export const questionBank: Question[] = [
    {
        question_id: 'm2-01',
        phrase : "Please type your Colony Name, and District.",
        input_type:"text"
    },
    {
        question_id: 'm2-02',
        phrase : "What’s your gender?",
        input_type:"option",
        options : [
            { value: "Male" },
            { value: "Female" },
            { value: "Others"},
            { value: "Rather not say"}
        ]
    },
    {
        question_id: 'm2-03',
        phrase : "Thanks. What is your month and year of birth ?",
        input_type:"date",

    },
    {
        question_id: 'm2-04',
        phrase :  "Select your highest education?",
        input_type:"option",
        options : [
            { value: "High School/ Higher Secondary" },
            { value: "MBA" },
            { value: "Intermediate/Senior Secondary" },
            { value: "MCA" },
            { value: "Polytechnic/Diploma" },
            { value: "MTech" },
            { value: "BA" },
            { value: "MBBS" },
            { value: "BSc" },
            { value: "MS/MD" },
            { value: "BCom" },
            { value: "LLM" },
            { value: "BBA" },
            { value: "MPhil" },
            { value: "BCA" },
            { value: "PhD General " },
            { value: "BE/BTech" },
            { value: "Civil services (IAS/IPS/IRS/IFS)" },
            { value: "LLB" },
            { value: "Illiterate" },
            { value: "MA" },
            { value: "School Up to 4 years" },
            { value: "MSc" },
            { value: "School 5-9 years" },
            { value: "MCom" },
            { value: "PhD Profession" },
            { value: "CA/ICWA/CS" },
            { value: "PG Diploma" }
        ]
    },
    {
        question_id: 'm2-05',
        phrase : "Select your current occupation?",
        input_type:"option",
        options : [
            { value: "Unskilled worker" },
            { value: "Skilled worker" },
            { value: "Petty Trader" },
            { value: "Shop owners/trader" },
            { value: "Businessman with no employee" },
            { value: "Student" },
            { value: "Housewife" },
            { value: "Retired" },
            { value: "Unemployed but searching for job" },
            { value: "Self-employed professional" },
            { value: "Clerical/salesman (Salaried)" },
            { value: "Supervisory level (Salaried)" },
            { value: "Junior level officer/executive (Salaried)" },
            { value: "Middle level officer/executive (Salaried)" },
            { value: "Senior level officer/executive (Salaried)" },
            { value: "Businessman/industrialist with 1-5 employees" },
            { value: "Businessman/industrialist with 6-10 employees" },
            { value: "Businessman/industrialist with 10-50 employees" },
            { value: "Businessman/industrialist with 50+ employees" },
            { value: "Unable to work due to health/other reason" }
        ]
    },
    {
        question_id: 'm2-06',
        phrase : "Which of these options best describes your marital status?",
        input_type:"option",
        options : [
            { value: "Single - living at home with parents"},
            { value: "Single - living alone"},
            { value: "Married & living in a joint family"},
            { value: "Married & living in a nuclear family"},
            { value: "Widowed"},
            { value: "Divorced"}
        ]
    },
    {
        question_id: 'm2-07m',
        phrase : "Please type the number of Male Members in your household",
        input_type:"text",

    },
    {
        question_id: 'm2-07f',
        phrase : "Please type the number of Female Members in your household",
        input_type:"text",

    },
    {
        question_id: 'm2-08',
        phrase : "Which of these durables do you currently have in your home?",
        input_type:"multi",
        options : [
            { value: "Electricity Connection" },
            { value: "Air Conditioner" },
            { value: "Car/Jeep/Van" },
            { value: "Ceiling Fan" },
            { value: "LPG Stove" },
            { value: "Colour TV" },
            { value: "Refrigerator" },
            { value: "Washing Machine" },
            { value: "Two Wheeler		" },
            { value: "Landline/Fixed Wireless Phone connection" },
            { value: "Laptop Computer" },
            { value: "Desktop Computer" },
            { value: "Tablet/Pads" },
            { value: "Agricultural Land (currently under cultivation or plantation)	" }
        ]
    }


]
