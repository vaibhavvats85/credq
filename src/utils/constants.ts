export const home_paragraph = `CredQ uses the combined power of alternative data, psychometrics & artificial intelligence 
to close the critical gap that prevents lenders and insurers to provide affordable 
financial services to reliable low-income individuals.`
export const about_paragraph = [`CredQ, a psychometric-based risk scoring company that provides instant 
personality scores for individuals who aren't able to access traditional systems and proof their risks. 
CredQ translates alternative data points and psychometrics into a personality score and provides recommendations 
for loan approvals and insurance claims.`, `CredQ enables lenders and insurers to assess individual's attitude, 
traits and unique financial behavior, mitigate their risk, improve their access to new market segments,
such as the new-to-credit (NTC), thin files and a quicker underwriting process.`]
export const partner_login = 'Partner Login';
export const alt_data_source = 'Alternative Data Sources';
export const psych_test = 'Psychometrics';
export const intel_ai_engine = 'Intelligent AI-Risk Engine';
export const what_we_do = 'What We Do';
export const how_it_works = 'How It Works';
export const products = 'Products';
export const scheduleDemoSubmitMsg = 'Thanks for reaching out to us. Our Sales Team will get back to you with more information within 24 hrs.'
export const scheduleDemoFormFail = 'Something went wrong. Try again later';
export const working_steps: any = {
    point_1: {
        text: 'CredQ collects ', suffix: 'alternative data'
    },
    point_2: {
        text: 'CredQ creates novel predictive features using ', suffix: 'artificial intelligence',
    },
    point_3: { text: `The new features consumed into risk scoring model` },
    point_4: {
        text: 'Start the Application driven by ', suffix: 'psychometrics'
    },
    point_5: { text: "CredQ's personality score & recommendations generated" },
    point_6: { text: 'Faster & Better risk decisions made instantly at low cost' }
}

export const schedule_demo = 'Schedule a Demo';
export const support = 'Support';
export const social = 'Social';
export const contact = 'Contact Us';
export const privacy_policy = 'Privacy Policy';
export const terms_conditions = 'Terms and Conditions';

// Form labels
export const enter_username = 'Enter CredQ credentials';
export const user_label = 'User ID';
export const password_label = 'Password';
export const new_password = 'New Password';
export const confirm_password = 'Confirm Password';
export const submit_btn = 'Submit';
export const login_btn = 'Proceed Securely';
export const name_label = 'Name';
export const email_label = 'Email';
export const phone_label = 'Phone';
export const org_label = 'Organization';
export const msg_label = 'Message';
export const essential_features = [
    'CredQ Score',
    'KYC Authentication',
    'Social Index',
    'Individual Index',
    'Mobile Data Insights',
    'Economic Potential Insights',
    'Government Reports Trends',
    '+ API Integration',
    '+ Monthly Standard Report',
    '+ 24X7 Support - Priority'
];
export const premium_features = [
    'CredQ Score',
    'KYC Authentication',
    'Social Index',
    'Individual Index',
    'Agronomic Index',
    'Mobile Data Insights',
    'Geospatial Imagery Index',
    'Economic Potential Insights',
    'Government Reports Trends',
    '+ API Integration',
    '+ Customize Loan Tracker',
    '+ 24X7 Support- Priority'
];

// Application Page
export const application_tracker = 'Application Tracker';
export const application_count_prefix = 'You have';
export const application_count_suffix = 'applications left with you';
export const no_applications_msg = 'You have exhausted your applications!';
export const visit_planbilling = 'Please visit Plan & billing section to buy more applications';
export const new_application = 'New Application';
export const start_application_msg = 'Click the below button to start new application';
export const start_application = 'Start Application';
export const cant_proceed_msg = 'You cannot proceed with the new application';
export const start_application_confirm = 'Do you want to start a new application?';
export const noInvoiceMsg = 'There are no invoices yet for your organization';
export const close_warning = 'Please complete the form';

// User Option Links 
export const cust_profile = "Search Customer Profile";
export const plan_billing = 'Billing';
export const help_center = 'Help Center';
export const logout = 'Logout';


// Product Pricing
export const product_pricing: any = {
    essentials: 7.99,
    premium: 9.99
}
// Cookies label
export const jwt_token = 'X-JWT-Authorization';
export const question_set = 'question_set';

//URLS
export const BASE_URL = 'https://backend-dev.credq.org/.netlify/functions/api';
// export const BASE_URL = 'http://localhost:5000';


// Scoring
export const repayment_capability = 'repayment_capability';
export const repayment_willingness = 'repayment_willingness';
export const social_engagement = 'social_engagement';
export const Ambition = 'Ambition';



export const privacy_policy_questions = [
    { ques: 'Why do we collect data?', ans: ['It’s very simple and transparent.  In accordance to our services, we collect data to generate instant risk scores for our partner financial institutions to assess the creditworthiness and reliability of their target applicants that assist them in their decisioning processes.'] },
    {
        ques: 'How do we collect data?',
        ans: ['Our partner financial institutions collect applicant’s personal information and psychometric data through our platform which includes  details such as name, age, gender, and marital status. In addition, we collect the alternative data such as past credit reports, utility bills, government reports, geolocation  from third party data providers.',
            'We also collect the data through the deployment of cookies. Cookies are small text files that are downloaded to your computer or mobile device when you visit a CredQ website. CredQ uses two kinds of cookies:',
            `First-party cookies: These are employed directly by CredQ to your computer/mobile device Third-party cookies: These are employed by a third party (Google Analytics) on the behalf of CredQ. We use third-party cookies for web analytics to improve our website performance and to provide insights into our platform.`]
    },
    {
        ques: 'How do we use data?',
        ans: ['Based on the information and answers provided by the applicants, we generate alternative risk score and recommendation for our partner financial institution through our proprietary AI risk engine using highly sophisticated algorithms and predictive analytics. Our AI model also incorporates the predictive features from alternative data sources. It is a sole discretionary power of financial institutions to decide whether or not to grant a loan or other financial services to an applicant irrespective of the alternative risk score and recommendations. All information answers are collected and stored in our database and are used to calculate risk scores and to build new risk models.',]
    },
    {
        ques: 'Do we share the data?',
        ans: [`We share the result of applicant’s risk assessment only with our partner financial institutions. The result only includes risk score and recommendations to assist lenders/insurers in their decisioning processes. We do not  sell or disclose any data provided to us to anyone. If we are involved in a merger, acquisition or asset sale, we will abide by this Privacy Policy.`]
    },
    {
        ques: 'How do we protect the data?',
        ans: ['All of our data remains stored right here, in India, where it was sourced from. Our data center maintains backup and disaster recovery mechanism system in India. ']
    },
    {
        ques: 'How long do we keep the data?',
        ans: ['To implement and improve the functionality of  our service and to update the AI driven risk engine developed for the financial institution client, we will keep applicant’s data for up to three years unless the applicant requests us to delete the data at an earlier date.']
    },
    {
        ques: 'Changes to Privacy Policy',
        ans: ['CredQ reserves the right to change this policy from time to time. Any changes shall be effective immediately upon the posting of the revised Privacy Policy. We encourage you to periodically review this page for latest information on our privacy practices.',
            'If you have any concerns about how data is processed, stored, or have any comments or questions regarding your privacy, please do not hesitate to contact us at info@credq.org.']
    }
];

export const terms_conditions_questions = [
    {
        ans: [
            'These terms and conditions explain how that works. They were last updated on 1st Jan, 2021.',
            'Confused? Got questions? Send us an email at info@credq.org'
        ]
    },
    {
        ques: 'What do you charge money for ?',
        ans: [`We charge you to use our product. The charges are as per the  number of application purchased from us.`]
    },
    {
        ques: 'Do you ever change your prices ?',
        ans: ['Yes, that might happen. We can change the price at any time—we will give you a notice at least two months before. If you carry on using our service after changes come into effect, you automatically agree to the new price. What you then pay is not refundable, unless the law says it is. If you don’t pay, we might suspend or delete your account—which means you could lose access to our service.']
    },
    {
        ques: 'Do prices include GST ?',
        ans: [`Yes, plus any other applicable taxes.`]
    },
    {
        ques: 'How can I pay to avail CredQ’s services ?',
        ans: ['You can pay with a credit or debit card, UPI, Wallets, Net banking etc. We have no access to payment data, and we don’t store that information. Only the company processing payments has access to this information.  Please make sure your payment information is up-to-date. If payment isn’t processed, we might suspend or delete your account.']
    },
    {
        ques: 'How do you invoice ?',
        ans: ['We invoice every time you make the payment. You can download the invoice from our platform itself. Also, We’ll send invoices to the email address you provided.']
    },
    {
        ques: 'Can I get a refund if I decided to stop using the product/service ?',
        ans: ['Sorry, no. If you decided to stop using our product/service after the payment, then we can’t refund you or grant any credit.']
    }
];

export const question_mapping = [
    {
        "actual _question": "“Would you take Rs 10,000 today or Rs 35,000 in 3 months or Rs 75,000 in 6 months ”? Which choice would you prefer ?",
        "question_id": "Q1",
        "Response": "In 6 months",
        "Score(Value)": "300"
    },
    {
        "actual _question": "“Would you take Rs 10,000 today or Rs 35,000 in 3 months or Rs 75,000 in 6 months ”? Which choice would you prefer ?",
        "question_id": "Q1",
        "Response": "In 3 months",
        "Score(Value)": "200"
    },
    {
        "actual _question": "“Would you take Rs 10,000 today or Rs 35,000 in 3 months or Rs 75,000 in 6 months ”? Which choice would you prefer ?",
        "question_id": "Q1",
        "Response": "Today",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Which of the following statement describes your financial attitude?",
        "question_id": "Q2",
        "Response": "I organize my finances carefully.",
        "Score(Value)": "130"
    },
    {
        "actual _question": "Which of the following statement describes your financial attitude?",
        "question_id": "Q2",
        "Response": "I avoid risky financial situations. ",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Which approach to life you will prefer ?",
        "question_id": "Q3",
        "Response": "A planned life is a good life.",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Which approach to life you will prefer ?",
        "question_id": "Q3",
        "Response": "Don’t think long term. Just enjoy each day!",
        "Score(Value)": "100"
    },
    {
        "actual _question": "Do you agree with a following statement - “You would start or invest in a business based on a conversation with friend, family member or colleague”.",
        "question_id": "Q4",
        "Response": "Agree",
        "Score(Value)": "120"
    },
    {
        "actual _question": "Do you agree with a following statement - “You would start or invest in a business based on a conversation with friend, family member or colleague”.",
        "question_id": "Q4",
        "Response": "Neither Agree or Disagree",
        "Score(Value)": "100"
    },
    {
        "actual _question": "Do you agree with a following statement - “You would start or invest in a business based on a conversation with friend, family member or colleague”.",
        "question_id": "Q4",
        "Response": "Disagree",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Find the right sequence. Select the appropriate option.",
        "question_id": "Q5",
        "Response": "Correct Option(D)",
        "Score(Value)": "100"
    },
    {
        "actual _question": "How much money is enough for you ? Select the appropriate image.",
        "question_id": "Q6",
        "Response": "Irrelevant",
        "Score(Value)": "0"
    },
    {
        "actual _question": "How do you feel about your future ? Select the appropriate image.",
        "question_id": "Q7",
        "Response": "Irrelevant",
        "Score(Value)": "0"
    },
    {
        "actual _question": "Would you take Rs 8,000 today or Rs 18,000 in 4 months or Rs 29,000 in 6 months”? Which choice would you prefer?",
        "question_id": "Q8",
        "Response": "In 6 months",
        "Score(Value)": "300"
    },
    {
        "actual _question": "Would you take Rs 8,000 today or Rs 18,000 in 4 months or Rs 29,000 in 6 months”? Which choice would you prefer?",
        "question_id": "Q8",
        "Response": "In 3 months",
        "Score(Value)": "200"
    },
    {
        "actual _question": "Would you take Rs 8,000 today or Rs 18,000 in 4 months or Rs 29,000 in 6 months”? Which choice would you prefer?",
        "question_id": "Q8",
        "Response": "Today",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Imagine the following one-time opportunity. Which option would you choose ?",
        "question_id": "Q9",
        "Response": "You have a 50/50 chance to either win Rs 50,000 or lose Rs 10,000. ",
        "Score(Value)": "130"
    },
    {
        "actual _question": "Imagine the following one-time opportunity. Which option would you choose ?",
        "question_id": "Q9",
        "Response": "You will leave empty-handed, but you can't lose anything. ",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Which of the following describes me best ?",
        "question_id": "Q10",
        "Response": "Decide first, and then think later!",
        "Score(Value)": "100"
    },
    {
        "actual _question": "Which of the following describes me best ?",
        "question_id": "Q10",
        "Response": "Think long before making a decision and stick to it.   ",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Which of the following business or investment type do you prefer ?",
        "question_id": "Q11",
        "Response": "Business / Investment with no fluctuation in profits.",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Which of the following business or investment type do you prefer ?",
        "question_id": "Q11",
        "Response": "Business / Investment  with some fluctuation in profits.",
        "Score(Value)": "130"
    },
    {
        "actual _question": "Which of the following business or investment type do you prefer ?",
        "question_id": "Q11",
        "Response": "Business / Investment with moderate fluctuations in profits.",
        "Score(Value)": "110"
    },
    {
        "actual _question": "Which of the following business or investment type do you prefer ?",
        "question_id": "Q11",
        "Response": "Business / Investment with large fluctuations in profits.",
        "Score(Value)": "100"
    },
    {
        "actual _question": "Find the right sequence. Select the appropriate option.",
        "question_id": "Q12",
        "Response": "Correct Option(D)",
        "Score(Value)": "100"
    },
    {
        "actual _question": "How much money is enough for you ? Select the appropriate image.",
        "question_id": "Q6",
        "Response": "Irrelevant",
        "Score(Value)": "0"
    },
    {
        "actual _question": "How do you feel about your future ? Select the appropriate image.",
        "question_id": "Q7",
        "Response": "Irrelevant",
        "Score(Value)": "0"
    },
    {
        "actual _question": "Would you take Rs 12,000 today or Rs 18,000 in 3 months or Rs 25,000 in 4 months”? Which choice would you prefer ?",
        "question_id": "Q13",
        "Response": "in 4 months",
        "Score(Value)": "300"
    },
    {
        "actual _question": "Would you take Rs 12,000 today or Rs 18,000 in 3 months or Rs 25,000 in 4 months”? Which choice would you prefer ?",
        "question_id": "Q13",
        "Response": "in 3 months",
        "Score(Value)": "200"
    },
    {
        "actual _question": "Would you take Rs 12,000 today or Rs 18,000 in 3 months or Rs 25,000 in 4 months”? Which choice would you prefer ?",
        "question_id": "Q13",
        "Response": "Today",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Which of the following saving scheme you will select to invest your money :",
        "question_id": "Q14",
        "Response": "Scheme 1 : The fixed return of 4% and  maximum return of 9% ",
        "Score(Value)": "150"
    },
    {
        "actual _question": "Which of the following saving scheme you will select to invest your money :",
        "question_id": "Q14",
        "Response": "Scheme 2 : The average return of 6% and maximum return of 8%.",
        "Score(Value)": "130"
    },
    {
        "actual _question": "If you have a meeting with your business partner at 6pm, then when are you more likely to arrive ? Select the appropriate option",
        "question_id": "Q15",
        "Response": "5:50 PM",
        "Score(Value)": "150"
    },
    {
        "actual _question": "If you have a meeting with your business partner at 6pm, then when are you more likely to arrive ? Select the appropriate option",
        "question_id": "Q15",
        "Response": "6:00 PM",
        "Score(Value)": "130"
    },
    {
        "actual _question": "If you have a meeting with your business partner at 6pm, then when are you more likely to arrive ? Select the appropriate option",
        "question_id": "Q15",
        "Response": "6:15 PM",
        "Score(Value)": "100"
    },
    {
        "actual _question": "You recently faced a financial crisis due to Covid-19  and you lost 50% of your saving. Suppose if you had those savings then you would :",
        "question_id": "Q16",
        "Response": "I will hold my savings with me. ",
        "Score(Value)": "150"
    },
    {
        "actual _question": "You recently faced a financial crisis due to Covid-19  and you lost 50% of your saving. Suppose if you had those savings then you would :",
        "question_id": "Q16",
        "Response": "Invest the portion of savings in bank schemes. ",
        "Score(Value)": "120"
    },
    {
        "actual _question": "You recently faced a financial crisis due to Covid-19  and you lost 50% of your saving. Suppose if you had those savings then you would :",
        "question_id": "Q16",
        "Response": "Invest all the savings in bank schemes",
        "Score(Value)": "100"
    },
    {
        "actual _question": "Find the right sequence. Select the appropriate option",
        "question_id": "Q17",
        "Response": "Correct Option(C)",
        "Score(Value)": "100"
    },
    {
        "actual _question": "How much money is enough for you ? Select the appropriate image.",
        "question_id": "Q6",
        "Response": "Irrelevant",
        "Score(Value)": "0"
    },
    {
        "actual _question": "How do you feel about your future ? Select the appropriate image.",
        "question_id": "Q7",
        "Response": "Irrelevant",
        "Score(Value)": "0"
    }];

    export const LATE_PAYMENT_CATEGORY: any = {
        critical: {image:'Critical_4.png', description: 'There is a high chance that {NAME} financial behavioral will leads {HIM_HER} to be defaulter in future. Along with personalized weekly call payment reminder, an acute monitoring is required.'},
        frequent: {image:'Frequent_3.png', description: 'There is a high probability that {NAME} will go through high number of late payments. Personalized monthly text message payment reminder is necessary would help {HIM_HER} to repayments on-time.'},
        negligible: {image:'Negligible_1.png', description: '{NAME} will make the repayments on-time. No intervention is required at this point'},
        occasional: {image: 'Occasional_2.png' ,description:'{NAME} will have stable repayments over certain period of time. {HE_SHE} may miss few payments, but {he_she} is a reliable applicant. No intervention is required at this point.'}
    }
