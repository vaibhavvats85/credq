import * as constants from './constants';
export const questions: any = {
    Set_1: [
        {
            question: {
                english: "“Would you take Rs 10,000 today or Rs 35,000 in 3 months or Rs 75,000 in 6 months ”? Which choice would you prefer ?​",
                tamil: "“நீங்கள் இன்று ரூ .10,000 எடுக்க விரும்புகிறீர்களா அல்லது 3 மாதங்களில் ரூ .35,000 எடுக்க விரும்புகிறீர்களா அல்லது 6 மாதங்களில் ரூ .75,000 எடுக்க விரும்புகிறீர்களா”? எந்த விருப்பத்தை விரும்புகிறீர்கள் ?",
                hindi: "“क्या आप आज 10,000 रुपये लेना चाहेंगे या आप 3 महीने में 35,000 रुपये लेना चाहेंगे या फिर आप 6 महीने में 75,000 रुपये लेना चाहेंगे ”? आप कौन सा विकल्प पसंद करेंगे?",
                questionType:'Future Orientation'
            },
            options: [
                {
                    english: 'In 3 months',
                    tamil: '3 மாதங்களில்',
                    hindi: '3 महीने में',
                    img: '35k',
                    score: 300,
                    climate:'Moderate',
                },
                {
                    english: 'Today',
                    tamil: 'இன்று',
                    hindi: '3 महीने में',
                    img: '10k',
                    score: 200,
                    climate:'Low',

                },
                {
                    english: 'In 6 months',
                    tamil: '6 மாதங்களில்',
                    hindi: '6 महीने में',
                    img: '75k',
                    score: 300,
                    climate:'Extremely High',
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Which of the following statement describes your financial attitude ?",
                tamil: "உங்கள் நிதிக் கண்ணோட்டத்தை விவரிக்கும் பின்வரும் அறிக்கைகளில் எது ?",
                hindi: 'निम्नलिखित में से कौन सा कथन आपके वित्तीय दृष्टिकोण का वर्णन करता है?',
                questionType:'Risk Aversion'
            },
            options: [
                {
                    english: 'I organize my finances carefully.',
                    tamil: 'எனது பணத்தை கவனமாக ஒழுங்கமைக்கிறேன்.',
                    hindi: 'मैं अपना पैसा ध्यान से व्यवस्थित करता हूं।',
                    score: 130,
                    climate:'Moderate'
                },
                {
                    english: 'I avoid risky financial situations.',
                    tamil: 'ஆபத்தான நிதி சூழ்நிலைகளை நான் தவிர்க்கிறேன்.',
                    hindi: 'मैं जोखिमपूर्ण वित्तीय स्थितियों से बचता हूं।',
                    score: 150,
                    climate:'Extremely High'
                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                english: "Which approach to life you will prefer ?",
                tamil: "வாழ்க்கையைப் பற்றிய உங்கள் அணுகுமுறை என்ன ? எந்த விருப்பத்தை கீழே விரும்புகிறீர்கள் ?",
                hindi: 'जीवन के प्रति आपका दृष्टिकोण क्या है? नीचे आप कौन सा विकल्प पसंद करेंगे?',
                questionType:'Perfectionism'
            },
            options: [
                {
                    english: 'A planned life is a good life.',
                    tamil: 'திட்டமிட்ட வாழ்க்கை ஒரு நல்ல வாழ்க்கை.',
                    hindi: 'एक नियोजित जीवन ही एक अच्छा जीवन होता है।',
                    score: 150,
                    climate:'High'
                },
                {
                    english: "Don't think long term. Just enjoy each day!",
                    tamil: 'எதிர்காலத்தைப் பற்றி சிந்திக்க வேண்டாம். ஒவ்வொரு நாளும் மகிழுங்கள்!',
                    hindi: 'भविष्य के बारे में मत सोचो। बस हर दिन का आनंद लो!',
                    score: 100,
                    climate:'Moderate'
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Do you agree with a following statement - “You would start or invest in a business based on a conversation with friend, family member or colleague”",
                tamil: "பின்வரும் அறிக்கையுடன் நீங்கள் உடன்படுகிறீர்களா - “நீங்கள் ஒரு நண்பர், குடும்ப உறுப்பினர் அல்லது சக ஊழியருடனான உரையாடலின் அடிப்படையில் ஒரு வணிகத்தைத் தொடங்குவீர்கள் அல்லது முதலீடு செய்வீர்கள்”.",
                hindi: 'क्या आप निम्नलिखित कथन से सहमत हैं - “आप किसी मित्र, परिवार के सदस्य या सहकर्मी के साथ बातचीत के आधार पर व्यवसाय शुरू या निवेश करेंगे” ।',
                questionType:'Risk Perception'
            },
            options: [
                {
                    english: 'Agree',
                    tamil: 'ஒப்புக்கொள்கிறேன்',
                    hindi: 'सहमत',
                    score: 120,
                    climate:'Low'
                },
                {
                    english: 'Neither Agree or Disagree',
                    tamil: 'நான் ஒப்புக்கொள்ளவில்லை அல்லது ஏற்கவில்லை',
                    hindi: 'न तो सहमत या असहमत',
                    score: 100,
                    climate:'Moderate'

                },
                {
                    english: 'Disagree',
                    tamil: 'நான் ஏற்கவில்லை',
                    hindi: 'असहमत',
                    score: 150,
                    climate:'High'

                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "How much money is enough for you ? Select the appropriate image.",
                tamil: "உங்களுக்கு எவ்வளவு பணம் போதுமானது? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आपके लिए कितना पैसा काफी है? उपयुक्त चित्र का चयन करें।',
                questionType:'Social Engagement'
            },
            options: [
                {
                    url: 'gold_money',
                    score: 0,
                    climate:'Low'
                },
                {
                    url: 'only_gold',
                    score: 0,
                    climate:'Moderate'

                },
                {
                    url: 'only_money',
                    score: 0,
                    climate:'High'

                },
            ],
            tag: constants.social_engagement
        },
        {
            question: {
                english: "How do you feel about your future ? Select the appropriate image.",
                tamil: "உங்கள் எதிர்காலத்தைப் பற்றி நீங்கள் எப்படி உணருகிறீர்கள்? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आप अपने भविष्य के बारे में कैसा महसूस करते हैं? उपयुक्त चित्र का चयन करें।',
                questionType:'Ambition'
            },
            options: [
                {
                    url: 'smily',
                    score: 0,
                    climate:'Moderate'
                },
                {
                    url: 'confused',
                    score: 0,
                    climate:'Low'

                },
                {
                    url: 'strong',
                    score: 0,
                    climate:'High'

                },
            ],
            tag: constants.Ambition
        },
        {
            question: {
                english: "Find the right sequence. Select the appropriate option.",
                tamil: "சரியான வரிசையைக் கண்டறியவும். பொருத்தமான விருப்பத்தைத் தேர்வுசெய்க",
                hindi: 'सही क्रम को खोजें । उपयुक्त विकल्प चुनें',
                question_img: ['apple_1_ques', 'apple_2_ques', 'apple_3_ques', 'question_mark'],
                questionType:'Fluid Intelligence'
            },
            options: [
                {
                    url: 'apple_1_option',
                    score: 0,
                    climate:'Low'
                },
                {
                    url: 'apple_2_option',
                    score: 0,
                    climate:'Extremely Low'

                },
                {
                    url: 'apple_3_option',
                    score: 0,
                    climate:'Low'

                },
                {
                    url: 'apple_4_option',
                    score: 100,
                    climate:'High'

                },
            ],
            tag: constants.repayment_willingness
        },
       
    ],
    Set_2: [
        {
            question: {
                english: "Would you take Rs 8,000 today or Rs 18,000 in 4 months or Rs 29,000 in 6 months”? Which choice would you prefer?",
                tamil: "நீங்கள் இன்று ரூ .8,000 எடுக்க விரும்புகிறீர்களா அல்லது 4 மாதங்களில் ரூ .18,000 எடுக்க விரும்புகிறீர்களா அல்லது 6 மாதங்களில் ரூ .29,000 எடுக்க விரும்புகிறீர்களா? எந்த விருப்பத்தை விரும்புகிறீர்கள் ?",
                hindi: 'क्या आप आज 8,000 रुपये लेना चाहेंगे या आप 4 महीने में 18,000 रुपये लेना चाहेंगे या फिर आप 6 महीने में 29,000 रुपये लेना चाहेंगे"? आप कौन सा विकल्प पसंद करेंगे?​',
                questionType:'Future Orientation'
            },
            options: [
                {
                    english: 'In 4 months',
                    tamil: '4 மாதங்களில்',
                    hindi: '4 महीने में',
                    img: '18k',
                    score: 200,
                    climate:'Moderate'

                },
                {
                    english: 'Today',
                    tamil: 'இன்று',
                    hinid: 'आज',
                    img: '8k',
                    score: 150,
                    climate:'Low'

                },
                {
                    english: 'In 6 months',
                    tamil: '6 மாதங்களில்',
                    hindi: '6 महीने में',
                    img: '29k',
                    score: 300,
                    climate:'Extremely High'

                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Imagine the following one-time opportunity. Which option would you choose ?",
                tamil: "பின்வரும் ஒரு முறை வாய்ப்பை கற்பனை செய்து பாருங்கள். நீங்கள் எதை எடுப்பீர்கள் ?",
                hindi: 'निम्नलिखित एक बार के अवसर की कल्पना करें। आप कौन सा विकल्प चुनेंगे ?',
                questionType:'Risk Aversion',
            },
            options: [
                {
                    english: 'You have a 50/50 chance to either win Rs 50,000 or lose Rs 10,000.',
                    tamil: 'ரூ .50,000 வெல்ல 50/50 வாய்ப்பு அல்லது ரூ .10,000 முழுமையான இழப்பு உங்களுக்கு உள்ளது.',
                    hindi: 'आपके पास 50,000 रुपये जीतने का 50/50 मौका है या फिर पूरी तरह से 10,000 रुपये का नुकसान ।',
                    score: 130,
                    climate:'Moderate'
                },
                {
                    english: "You will leave empty-handed, but you can't lose anything.",
                    tamil: 'நீங்கள் எதையும் வெல்ல மாட்டீர்கள், ஆனால் நீங்கள் எதையும் இழக்க முடியாது.',
                    hindi: 'आप कुछ भी नहीं जीतेंगे, लेकिन आप कुछ भी नहीं खो सकते हैं ।',
                    score: 150,
                    climate:'Extremely High'

                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                english: "Which of the following describes me best ?",
                tamil: "பின்வரும் விருப்பங்களில் எது என்னை சிறப்பாக விவரிக்கிறது ?",
                hindi: 'निम्नलिखित में से कौन सा विकल्प मेरे बारे में सबसे अच्छा वर्णन करता है?',
                questionType:'Perfectionism',
            },
            options: [
                {
                    english: 'Decide first, and then think later!',
                    tamil: 'முதலில் முடிவு செய்து, பின்னர் சிந்தியுங்கள் !',
                    hindi: 'पहले तय करें, और फिर बाद में सोचें !',
                    score: 100,
                    climate:'Low'
                },
                {
                    english: 'Think long before making a decision and stick to it.',
                    tamil: 'ஒரு முடிவை எடுப்பதற்கு நீண்ட நேரம் சிந்தித்து, பின்னர் அந்த முடிவில் ஒட்டிக்கொள்க.',
                    hindi: 'निर्णय लेने से पहले लंबे समय तक सोचें और फिर उस निर्णय पर टिके रहें ।',
                    score: 150,
                    climate:'High'

                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Which of the following business or investment type do you prefer ?",
                tamil: "பின்வரும் வணிக அல்லது முதலீட்டு வகைகளில் எது விரும்புகிறீர்கள் ?",
                hindi: 'आप निम्नलिखित में से किस व्यवसाय या निवेश प्रकार को पसंद करते हैं ?',
                questionType:'Risk Perception',

            },
            options: [
                {
                    english: 'Business / Investment with no fluctuation in profits.',
                    tamil: 'வர்த்தகம் / முதலீடு இதில் லாபத்தில் ஏற்ற இறக்கங்கள் இல்லை.',
                    hindi: 'व्यापार / निवेश  जिसमें  मुनाफे  में  कोई उतार-चढ़ाव न हो।',
                    score: 150,
                    climate:'High'
                },
                {
                    english: 'Business / Investment  with some fluctuation in profits.',
                    tamil: 'இலாபங்களில் சில ஏற்ற இறக்கங்களுடன் வர்த்தகம் / முதலீடு.',
                    hindi: 'व्यापार / निवेश  जिसमें  मुनाफे  में  कुछ  उतार-चढ़ाव हो।',
                    score: 130,
                    climate:'Moderate'

                },
                {
                    english: 'Business / Investment with moderate fluctuations in profits.',
                    tamil: 'லாபத்தில் மிதமான ஏற்ற இறக்கங்களைக் கொண்ட வர்த்தகம் / முதலீடு.',
                    hindi: 'व्यापार / निवेश  जिसमें  मुनाफे  में  मध्यम  उतार-चढ़ाव हो।',
                    score: 110,
                    climate:'Moderate'

                },
                {
                    english: 'Business / Investment with large fluctuations in profits.',
                    tamil: 'லாபத்தில் பெரிய ஏற்ற இறக்கங்களைக் கொண்ட வர்த்தகம் / முதலீடு.',
                    hindi: 'व्यापार / निवेश  जिसमें  मुनाफे  में  बड़े  उतार-चढ़ाव हो।',
                    score: 100,
                    climate:'Low'

                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "How much money is enough for you ? Select the appropriate image.",
                tamil: "உங்களுக்கு எவ்வளவு பணம் போதுமானது? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आपके लिए कितना पैसा काफी है? उपयुक्त चित्र का चयन करें।',
                questionType:'Social Engagement'
            },
            options: [
                {
                    url: 'gold_money',
                    score: 0,
                    climate:'Low'
                },
                {
                    url: 'only_gold',
                    score: 0,
                    climate:'Moderate'
                },
                {
                    url: 'only_money',
                    score: 0,
                    climate:'High'
                },
            ],
            tag: constants.social_engagement
        },
        {
            question: {
                english: "How do you feel about your future ? Select the appropriate image.",
                tamil: "உங்கள் எதிர்காலத்தைப் பற்றி நீங்கள் எப்படி உணருகிறீர்கள்? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आप अपने भविष्य के बारे में कैसा महसूस करते हैं? उपयुक्त चित्र का चयन करें।',
                questionType:'Ambition'
            },
            options: [
                {
                    url: 'smily',
                    score: 0,
                    climate:'Moderate'
                },
                {
                    url: 'confused',
                    score: 0,
                    climate:'Low'
                },
                {
                    url: 'strong',
                    score: 0,
                    Climate:'High'
                },
            ],
            tag: constants.Ambition
        },
        {
            question: {
                english: "Find the right sequence. Select the appropriate option.",
                tamil: "சரியான வரிசையைக் கண்டறியவும். பொருத்தமான விருப்பத்தைத் தேர்வுசெய்க",
                hindi: 'सही क्रम को खोजें । उपयुक्त विकल्प चुनें',
                question_img: ['set_2_ques_1', 'set_2_ques_2', 'set_2_ques_3', 'set_2_ques_4', 'set_2_ques_5', 'question_mark'],
                questionType:'Fluid Intelligence'
            },
            options: [
                {
                    url: 'set_2_option_1',
                    score: 0,
                    climate:'Low'
                },
                {
                    url: 'set_2_option_2',
                    score: 0,
                    climate:'Extremely Low'

                },
                {
                    url: 'set_2_option_3',
                    score: 0,
                    climate:'Extremely Low'

                },
                {
                    url: 'set_2_option_4',
                    score: 100,
                    climate:'High'

                },
            ],
            tag: constants.repayment_willingness
        },
        
    ],
    Set_3: [
        {
            question: {
                english: "Would you take Rs 12,000 today or Rs 18,000 in 3 months or Rs 25,000 in 4 months”? Which choice would you prefer ?",
                tamil: "நீங்கள் இன்று ரூ .12,000 எடுக்க விரும்புகிறீர்களா அல்லது 3 மாதங்களில் ரூ .18,000 எடுக்க விரும்புகிறீர்களா அல்லது 4 மாதங்களில் ரூ .25,000 எடுக்க விரும்புகிறீர்களா ? எந்த விருப்பத்தை விரும்புகிறீர்கள் ?",
                hindi: 'क्या आप आज 12,000 रुपये लेना चाहेंगे या आप 3 महीने में 18,000 रुपये लेना चाहेंगे या फिर आप 4 महीने में 25,000 रुपये लेना चाहेंगे"? आप कौन सा विकल्प पसंद करेंगे ?​',
                questionType:'Future Orientation'
            },
            options: [
                {
                    english: 'In 4 months',
                    tamil: '4 மாதங்களில்',
                    hindi: '4 महीने में',
                    img: '25k',
                    score: 300,
                    climate:'Extremely High'
                },
                {
                    english: 'Today',
                    tamil: 'இன்று',
                    hindi: 'आज',
                    img: '12k',
                    score: 150,
                    climate:'Moderate'

                },
                {
                    english: 'In 3 months',
                    tamil: '3 மாதங்களில்',
                    hindi: '3 महीने में',
                    img: '18k',
                    score: 200,
                    climate:'Low'

                },
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                prefix: {
                    english: 'Scheme',
                    tamil: 'திட்டம்'
                },
                english: "Which of the following saving scheme you will select to invest your money ?",
                tamil: "உங்கள் பணத்தை முதலீடு செய்ய பின்வரும் எந்த சேமிப்பு திட்டங்களை நீங்கள் தேர்வு செய்கிறீர்கள்?",
                hindi: 'निम्नलिखित में से कौन सी बचत योजना आप अपने पैसे का निवेश करने के लिए चुनेंगे ?',
                questionType:'Risk Aversion'
            },
            options: [
                {
                    english: 'The fixed return of 4% and  maximum return of 9% ',
                    tamil: 'நிலையான வருமானம் 4% மற்றும் அதிகபட்ச வருவாய் 9%',
                    hindi: '4% की तय वापसी और 9% की अधिकतम वापसी',
                    score: 150,
                    climate:'Extremely High'
                },
                {
                    english: "The average return of 6% and maximum return of 8%",
                    tamil: ': சராசரி வருமானம் 6% மற்றும் அதிகபட்ச வருவாய் 8%',
                    hindi: '6% की औसत वापसी और 8% की अधिकतम वापसी',
                    score: 130,
                    climate:'Moderate'

                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                english: "If you have a meeting with your business partner at 6pm, then when are you more likely to arrive ? Select the appropriate option.",
                tamil: "மாலை 6 மணிக்கு உங்கள் வணிக கூட்டாளரை சந்திக்க திட்டமிட்டால், நீங்கள் எந்த நேரத்தில் வருவீர்கள்? சரியான விருப்பத்தைத் தேர்வுசெய்க.",
                hindi: 'यदि आप शाम 6 बजे अपने बिजनेस पार्टनर के साथ मिलने की योजना बना रहे हैं, तो आप किस समय पहुंचेंगे? सही विकल्प चुनें।',
                questionType:'Perfectionism'
            },
            options: [
                {
                    english: '5.50 PM',
                    img: '5.50PM',
                    score: 150,
                    climate:'Extremely High'
                },
                {
                    english: '6.00 PM',
                    img: '6.00PM',
                    score: 130,
                    climate:'High'

                },
                {
                    english: '6.15 PM',
                    img: '6.15PM',
                    score: 100,
                    climate:'Low'

                },
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "You recently faced a financial crisis due to Covid-19  and you lost 50% of your saving. Suppose if you had those savings then you would :",
                tamil: "Covid -19 காரணமாக நீங்கள் சமீபத்தில் நிதி நெருக்கடியை எதிர்கொண்டீர்கள், மேலும் உங்கள் சேமிப்பில் 50% இழந்தீர்கள். உங்களிடம் அந்த சேமிப்பு இருந்தால், நீங்கள் பின்வருமாறு செய்வீர்கள்:",
                hindi: 'आपको हाल ही में कोविद -19 के कारण वित्तीय संकट का सामना करना पड़ा और आपने अपनी बचत का 50% गंवा दिया। मान लीजिए अगर आपके पास वो बचत होती तो आप :',
                questionType:'Risk Perception'
            },
            options: [
                {
                    english: 'I will hold my savings with me.',
                    tamil: 'எனது சேமிப்பை அப்படியே வைத்திருப்பேன்.',
                    hindi: 'मैं अपनी बचत को यथावत रखूंगा ।',
                    score: 150,
                    climate:'High'
                },
                {
                    english: 'Invest the portion of savings in bank schemes.',
                    tamil: 'சேமிப்பில் ஒரு பகுதியை வங்கி திட்டங்களில் முதலீடு செய்வேன்.',
                    hindi: 'बचत का एक हिस्सा बैंक योजनाओं में निवेश करूंगा ।',
                    score: 120,
                    climate:'Moderate'
                },
                {
                    english: 'Invest all the savings in bank schemes.',
                    tamil: 'அனைத்து சேமிப்பு வங்கி திட்டங்களிலும் முதலீடு செய்வேன்.',
                    hindi: 'सभी बचत बैंक योजनाओं में निवेश करूंगा ।',
                    score: 100,
                    climate:'Low'

                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "How much money is enough for you ? Select the appropriate image.",
                tamil: "உங்களுக்கு எவ்வளவு பணம் போதுமானது? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आपके लिए कितना पैसा काफी है? उपयुक्त चित्र का चयन करें।',
                questionType:'Social Engagement'
            },
            options: [
                {
                    url: 'gold_money',
                    score: 0,
                    climate:'Low'
                },
                {
                    url: 'only_gold',
                    score: 0,
                    climate:'Moderate'

                },
                {
                    url: 'only_money',
                    score: 0,
                    climate:'High'

                },
            ],
            tag: constants.social_engagement
        },
        {
            question: {
                english: "How do you feel about your future ? Select the appropriate image.",
                tamil: "உங்கள் எதிர்காலத்தைப் பற்றி நீங்கள் எப்படி உணருகிறீர்கள்? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आप अपने भविष्य के बारे में कैसा महसूस करते हैं? उपयुक्त चित्र का चयन करें।',
                questionType:'Ambition'
            },
            options: [
                {
                    url: 'smily',
                    score: 0,
                    climate:'Moderate'
                },
                {
                    url: 'confused',
                    score: 0,
                    climate:'Low'
                },
                {
                    url: 'strong',
                    score: 0,
                    climate:'High'
                },
            ],
            tag: constants.Ambition
        },
        {
            question: {
                english: "Find the right sequence. Select the appropriate option.",
                tamil: "சரியான வரிசையைக் கண்டறியவும். பொருத்தமான விருப்பத்தைத் தேர்வுசெய்க",
                hindi: 'सही क्रम को खोजें । उपयुक्त विकल्प चुनें',
                question_img: ['set_3_ques_1', 'set_3_ques_2', 'set_3_ques_3', 'question_mark'],
                questionType:'Fluid Intelligence'
            },
            options: [
                {
                    url: 'set_3_option_1',
                    score: 0,
                    climate:'Low'
                },
                {
                    url: 'set_3_option_2',
                    score: 0,
                    climate:'Extremely Low'

                },
                {
                    url: 'set_3_option_3',
                    score: 100,
                    climate:'High'

                },
                {
                    url: 'set_3_option_4',
                    score: 0,
                    climate:'Low'

                },
            ],
            tag: constants.repayment_willingness
        },
        
    ]
}

export const dont_understand: any = {
    english: 'I don’t understand the question.',
    tamil: 'எனக்கு கேள்வி புரியவில்லை.',
    hindi: 'मुझे सवाल समझ नहीं आया ।'
}