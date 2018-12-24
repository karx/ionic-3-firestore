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
        input_type:"option",
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
    },
    {
      question_id: 'm2-09',
      phrase: "Thanks. Which of these durables do you currently have in your home?",
      input_type: "option",
      options: [
        { value: "Electricity Connection" },
        { value: "Air Conditioner" },
        { value: "Car/Jeep/Van" },
        { value: "Ceiling Fan" },
        { value: "LPG Stove" },
        { value: "Colour TV" },
        { value: "Refrigerator" },
        { value: "Washing Machine" },
        { value: "Two Wheeler" },
        { value: "Landline/Fixed Wireless Phone connection" },
        { value: "Laptop Computer" },
        { value: "Desktop Computer" },
        { value: "Tablet/Pads" },
        { value: "Agricultural Land (currently under cultivation or plantation)" }
      ]
    },
    {
      question_id: 'm2-10',
      phrase: "Thanks. Which of these is the most expensive vehicle you currently have in your home?",
      input_type: "option",
      options: [
        { value: "Bi-cycle" },
        { value: "MUV/SUV (costing less than Rs. 12lakh)" },
        { value: "Scooter/Motorcycle" },
        { value: "Luxury Car/SUV (costing more than Rs. 18lakh)" },
        { value: "Small Car (costing less than Rs. 4lakh)" },
        { value: "Luxury Car/SUV (costing more than Rs. 25lakh)" },
        { value: "Mid performance car (costing more than Rs. 6lakh)" },
        { value: "Luxury Car/SUV (costing more than Rs. 50lakh)" },
        { value: "Sedan (costing more than Rs. 10lakh)" },
        { value: "None of the above" }
      ]
    },
    {
      question_id: 'm2-11',
      phrase: "Thanks. Please select the approximate range of your “total monthly household income” of your household (putting together the income of all members sharing the same kitchen)? Where:",
      input_type: "option",
      options: [
        { value: "Up to Rs.3,000" },
        { value: "Rs.3,000 to Rs.6,250" },
        { value: "Rs.6,250 to Rs.9,000" },
        { value: "Rs.9,000 to Rs.12,500" },
        { value: "Rs.12,500 to Rs.18,000" },
        { value: "Rs.18,000 to Rs.25,000" },
        { value: "Rs.25,000 to Rs.40,000" },
        { value: "Rs.40,000 to Rs.60,000" },
        { value: "Rs.60,000 to Rs.80,000" },
        { value: "Rs.80,000 to Rs.1,00,000" },
        { value: "Rs.1,00,000 to Rs. 2,00,000" },
        { value: "Rs.2,00,000 to Rs. 3,00,000" },
        { value: "Rs.3,00,000 to Rs. 5,00,00" },
        { value: "More than Rs. 5,00,000" },
        { value: "Don’t know/Can’t say" }
      ]
    },
    {
      question_id: 'm2-xx-1',
      phrase: "Thanks for your cooperation. Now I know you better. Please type, “right”, “yes”, “OK’, “Yup”… I don’t understand the rest as a dumb bot, but I will soon learn from you and become smarter ☺",
      input_type: "option",
      options: [
        { value: "Right" },
        { value: "Yes" },
        { value: "You are a dumb bot" },
        { value: "Okay" },
        { value: "None of the above" }
      ]
    },
    {
      question_id: 'm2-12',
      phrase: "Thanks buddy. Now let’s talk about your Extrinsic Quality of Life at your locality (RWA/colony/apartment). How friendly and helpful do you find your neighbors currently?",
      input_type: "option",
      options: [
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
        { value: "5" },
        { value: "6" },
        { value: "7" },
        { value: "8" },
        { value: "9" },
        { value: "10" }
      ]
    }
]
