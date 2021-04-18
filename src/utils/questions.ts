import * as constants from './constants';
export const questions: any = {
    Set_1: [
        {
            question: {
                english: "Would you take Rs 10,000 today or Rs 35,000 in 3 months” ? Which choice would you prefer ?",
                tamil: "நீங்கள் இன்று ரூ.10,000 அல்லது 3 மாதங்களில் ரூ. 35,000 எடுப்பீர்களா ? எந்த விருப்பத்தை விரும்புகிறீர்கள் ?"
            },
            options: [
                {
                    english: 'In 3 months',
                    tamil: '3 மாதங்களில்',
                    img: '35k',
                    score: 300
                },
                {
                    english: 'Today',
                    tamil: 'இன்று',
                    img: '10k',
                    score: 200
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Which of the following statement describes your financial attitude ?",
                tamil: "உங்கள் நிதிக் கண்ணோட்டத்தை விவரிக்கும் பின்வரும் அறிக்கைகளில் எது ?"
            },
            options: [
                {
                    english: 'I organize my finances carefully.',
                    tamil: 'எனது பணத்தை கவனமாக ஒழுங்கமைக்கிறேன்.',
                    score: 130
                },
                {
                    english: 'I avoid risky financial situations.',
                    tamil: 'ஆபத்தான நிதி சூழ்நிலைகளை நான் தவிர்க்கிறேன்.',
                    score: 150
                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                english: "Which approach to life you will prefer ?",
                tamil: "வாழ்க்கையைப் பற்றிய உங்கள் அணுகுமுறை என்ன ? எந்த விருப்பத்தை கீழே விரும்புகிறீர்கள் ?"
            },
            options: [
                {
                    english: 'A planned life is a good life.',
                    tamil: '3 மாதங்களில்',
                    score: 150
                },
                {
                    english: 'Today',
                    tamil: 'இன்று',
                    score: 100
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Do you agree with a following statement - “You would start or invest in a business based on a conversation with friend, family member or colleague”",
                tamil: "பின்வரும் அறிக்கையுடன் நீங்கள் உடன்படுகிறீர்களா - “நீங்கள் ஒரு நண்பர், குடும்ப உறுப்பினர் அல்லது சக ஊழியருடனான உரையாடலின் அடிப்படையில் ஒரு வணிகத்தைத் தொடங்குவீர்கள் அல்லது முதலீடு செய்வீர்கள்”."
            },
            options: [
                {
                    english: 'Agree',
                    tamil: 'ஒப்புக்கொள்கிறேன்',
                    score: 120
                },
                {
                    english: 'Neither Agree or Disagree',
                    tamil: 'நான் ஒப்புக்கொள்ளவில்லை அல்லது ஏற்கவில்லை',
                    score: 100
                },
                {
                    english: 'Disagree',
                    tamil: 'நான் ஏற்கவில்லை',
                    score: 150
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Find the right sequence. Select the appropriate option.",
                tamil: "சரியான வரிசையைக் கண்டறியவும். பொருத்தமான விருப்பத்தைத் தேர்வுசெய்க",
                question_img: ['apple_1_ques', 'apple_2_ques', 'apple_3_ques', 'question_mark']
            },
            options: [
                {
                    url: 'apple_1_option',
                    score: 0
                },
                {
                    url: 'apple_2_option',
                    score: 0
                },
                {
                    url: 'apple_3_option',
                    score: 0
                },
                {
                    url: 'apple_4_option',
                    score: 100
                },
            ],
            tag: constants.repayment_willingness
        },
    ],
    Set_2: [
        {
            question: {
                english: "Would you take Rs 8,000 today or Rs 18,000 in 4 months” ? Which choice would you prefer ?",
                tamil: "நீங்கள் இன்று ரூ. 8,000 அல்லது 4 மாதங்களில் ரூ. 18,000 எடுப்பீர்களா ? எந்த விருப்பத்தை விரும்புகிறீர்கள் ?"
            },
            options: [
                {
                    english: 'In 4 months',
                    tamil: '4 மாதங்களில்',
                    img: '18k',
                    score: 300
                },
                {
                    english: 'Today',
                    tamil: 'இன்று',
                    img: '8k',
                    score: 200
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Imagine the following one-time opportunity. Which option would you choose ?",
                tamil: "பின்வரும் ஒரு முறை வாய்ப்பை கற்பனை செய்து பாருங்கள். நீங்கள் எதை எடுப்பீர்கள் ?"
            },
            options: [
                {
                    english: 'You have a 50/50 chance to either win Rs 50,000 or lose Rs 10,000.',
                    tamil: 'ரூ .50,000 வெல்ல 50/50 வாய்ப்பு அல்லது ரூ .10,000 முழுமையான இழப்பு உங்களுக்கு உள்ளது.',
                    score: 130
                },
                {
                    english: "You will leave empty-handed, but you can't lose anything.",
                    tamil: 'நீங்கள் எதையும் வெல்ல மாட்டீர்கள், ஆனால் நீங்கள் எதையும் இழக்க முடியாது.',
                    score: 150
                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                english: "Which of the following describes me best ?",
                tamil: "பின்வரும் விருப்பங்களில் எது என்னை சிறப்பாக விவரிக்கிறது ?"
            },
            options: [
                {
                    english: 'Decide first, and then think later!',
                    tamil: 'முதலில் முடிவு செய்து, பின்னர் சிந்தியுங்கள் !',
                    score: 100
                },
                {
                    english: 'Think long before making a decision and stick to it.',
                    tamil: 'ஒரு முடிவை எடுப்பதற்கு நீண்ட நேரம் சிந்தித்து, பின்னர் அந்த முடிவில் ஒட்டிக்கொள்க.',
                    score: 150
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Which of the following business or investment type do you prefer ?",
                tamil: "பின்வரும் வணிக அல்லது முதலீட்டு வகைகளில் எது விரும்புகிறீர்கள் ?"
            },
            options: [
                {
                    english: 'Business / Investment with no fluctuation in profits.',
                    tamil: 'வர்த்தகம் / முதலீடு இதில் லாபத்தில் ஏற்ற இறக்கங்கள் இல்லை.',
                    score: 150
                },
                {
                    english: 'Business / Investment  with some fluctuation in profits.',
                    tamil: 'இலாபங்களில் சில ஏற்ற இறக்கங்களுடன் வர்த்தகம் / முதலீடு.',
                    score: 130
                },
                {
                    english: 'Business / Investment with moderate fluctuations in profits.',
                    tamil: 'லாபத்தில் மிதமான ஏற்ற இறக்கங்களைக் கொண்ட வர்த்தகம் / முதலீடு.',
                    score: 110
                },
                {
                    english: 'Business / Investment with large fluctuations in profits.',
                    tamil: 'லாபத்தில் பெரிய ஏற்ற இறக்கங்களைக் கொண்ட வர்த்தகம் / முதலீடு.',
                    score: 100
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Find the right sequence. Select the appropriate option.",
                tamil: "சரியான வரிசையைக் கண்டறியவும். பொருத்தமான விருப்பத்தைத் தேர்வுசெய்க",
                question_img: ['set_2_ques_1', 'set_2_ques_2', 'set_2_ques_3', 'set_2_ques_4', 'set_2_ques_5', 'question_mark']
            },
            options: [
                {
                    url: 'set_2_option_1',
                    score: 0
                },
                {
                    url: 'set_2_option_2',
                    score: 0
                },
                {
                    url: 'set_2_option_3',
                    score: 0
                },
                {
                    url: 'set_2_option_4',
                    score: 100
                },
            ],
            tag: constants.repayment_willingness
        },
    ],
    Set_3: [
        {
            question: {
                english: "Would you take Rs 12,000 today or Rs 25,000 in 4 months” ? Which choice would you prefer ?",
                tamil: "நீங்கள் இன்று ரூ.12,000 அல்லது 4 மாதங்களில் ரூ. 25,000 எடுப்பீர்களா ? எந்த விருப்பத்தை விரும்புகிறீர்கள் ?"
            },
            options: [
                {
                    english: 'In 4 months',
                    tamil: '4 மாதங்களில்',
                    img: '25k',
                    score: 300
                },
                {
                    english: 'Today',
                    tamil: 'இன்று',
                    img: '12k',
                    score: 200
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Which of the following saving scheme you will select to invest your money",
                tamil: "உங்கள் பணத்தை முதலீடு செய்ய பின்வரும் எந்த சேமிப்பு திட்டங்களை நீங்கள் தேர்வு செய்கிறீர்கள் "
            },
            options: [
                {
                    english: 'The fixed return of 4% and  maximum return of 9% .',
                    tamil: 'நிலையான வருமானம் 4% மற்றும் அதிகபட்ச வருவாய் 9%',
                    score: 150
                },
                {
                    english: "The average return of 6% and maximum return of 8%.",
                    tamil: ': சராசரி வருமானம் 6% மற்றும் அதிகபட்ச வருவாய் 8%',
                    score: 130
                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                english: "If you have a meeting with your business partner at 6pm, then when are you more likely to arrive ? Select the appropriate option.",
                tamil: "மாலை 6 மணிக்கு உங்கள் வணிக கூட்டாளரை சந்திக்க திட்டமிட்டால், நீங்கள் எந்த நேரத்தில் வருவீர்கள்? சரியான விருப்பத்தைத் தேர்வுசெய்க."
            },
            options: [
                {
                    english: '5.50 PM',
                    img: '5.50PM',
                    score: 150
                },
                {
                    english: '6.00 PM',
                    img: '6.00PM',
                    score: 130
                },
                {
                    english: 'I will arrive at my convenient time.',
                    tamil: 'எனது வசதியான நேரத்திற்கு வருவேன்.',
                    score: 100
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "You recently faced a financial crisis due to Covid-19  and you lost 50% of your saving. Suppose if you had those savings then you would :",
                tamil: "Covid -19 காரணமாக நீங்கள் சமீபத்தில் நிதி நெருக்கடியை எதிர்கொண்டீர்கள், மேலும் உங்கள் சேமிப்பில் 50% இழந்தீர்கள். உங்களிடம் அந்த சேமிப்பு இருந்தால், நீங்கள் பின்வருமாறு செய்வீர்கள்:"
            },
            options: [
                {
                    english: 'I will hold my savings with me.',
                    tamil: 'எனது சேமிப்பை அப்படியே வைத்திருப்பேன்.',
                    score: 150
                },
                {
                    english: 'Invest the portion of savings in bank schemes.',
                    tamil: 'சேமிப்பில் ஒரு பகுதியை வங்கி திட்டங்களில் முதலீடு செய்வேன்.',
                    score: 130
                },
                {
                    english: 'Invest all the savings in bank schemes.',
                    tamil: 'அனைத்து சேமிப்பு வங்கி திட்டங்களிலும் முதலீடு செய்வேன்.',
                    score: 110
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Find the right sequence. Select the appropriate option.",
                tamil: "சரியான வரிசையைக் கண்டறியவும். பொருத்தமான விருப்பத்தைத் தேர்வுசெய்க",
                question_img: ['set_3_ques_1', 'set_3_ques_2', 'set_3_ques_3', 'question_mark']
            },
            options: [
                {
                    url: 'set_3_option_1',
                    score: 0
                },
                {
                    url: 'set_3_option_2',
                    score: 0
                },
                {
                    url: 'set_3_option_3',
                    score: 0
                },
                {
                    url: 'set_3_option_4',
                    score: 100
                },
            ],
            tag: constants.repayment_willingness
        },
    ]
}

export const dont_understand: any = {
    english: 'I don’t understand the question.',
    tamil: 'எனக்கு கேள்வி புரியவில்லை.'
}