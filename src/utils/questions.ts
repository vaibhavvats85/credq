import * as constants from './constants';
export const surveyQuestion = {
    question: {
        english: "Based on your answers, we assess that you like to take risk and don’t care much about results.",
        tamil: "உங்கள் பதில்களின் அடிப்படையில், நீங்கள் ரிஸ்க் எடுக்க விரும்புவது போல் தெரிகிறது மற்றும் விளைவுகளைப் பற்றி அதிகம் கவலைப்படுவதில்லை.",
        hindi: 'आपके जवाबों के आधार पर, यह लगता है कि  आपको जोखिम लेना पसंद हैं और आप  परिणामों की अधिक परवाह नहीं करते हैं।',
        title: {
            english: 'Do you think this is correct assessment?',
            hindi: 'क्या आपको लगता है कि यह सही आकलन है?',
            tamil: 'இது சரியான மதிப்பீடு என்று நீங்கள் நினைக்கிறீர்களா?'
        }
    },
    options: [
        {
            english: 'YES',
            hindi: 'हां',
            tamil: 'ஆம்',
            score: 0
        },
        {
            english: 'NO',
            hindi: 'नहीं',
            tamil: 'இல்லை',
            score: 0
        }
    ],
    tag: 'survey'
};
export const questions: any = {
    Set_1: [
        {
            question: {
                id: '1FORW',
                english: "“Would you take Rs 10,000 today or Rs 35,000 after 3 months or Rs 75,000 after 6 months ”? Which choice would you prefer ?",
                tamil: "“நீங்கள் இன்று ரூ. 10,000 எடுக்க விரும்புகிறீர்களா அல்லது 3 மாதங்களுக்கு பிறகு ரூ. 35,000 எடுக்க விரும்புகிறீர்களா அல்லது 6 மாதங்களுக்கு பிறகு ரூ .75,000 எடுக்க விரும்புகிறீர்களா”? நீங்கள் எந்த விருப்பத்தை விரும்புகிறீர்கள்?",
                hindi: "“क्या आप आज 10,000 रुपये लेना चाहेंगे या आप 3 महीने बाद 35,000 रुपये लेना चाहेंगे या फिर आप 6 महीने बाद 75,000 रुपये लेना चाहेंगे”? आप कौन सा विकल्प पसंद करेंगे?",
                questionType: 'Future Orientation'
            },
            options: [
                {
                    url: '35k',
                    score: 200,
                    climate: 'Moderate',
                },
                {
                    url: '10k',
                    score: 150,
                    climate: 'Low',

                },
                {
                    url: '75k',
                    score: 300,
                    climate: 'Extremely High',
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Which of the following statement describes your <span class='highlight-italics'>financial attitude</span>?",
                tamil: "பின்வரும் அறிக்கைகளில் எது உங்கள் <span class='highlight-italics'>நிதி கண்ணோட்டத்தை</span> சிறப்பாக விவரிக்கிறது?",
                hindi: "नीचे दिए गए में से कौन सा कथन आपके <span class='highlight-italics'>वित्तीय दृष्टिकोण</span> को अच्छे से बयान करता है?",
                questionType: 'Risk Aversion'
            },
            options: [
                {
                    english: 'I organize my finances carefully.',
                    tamil: 'எனது பணத்தை கவனமாக ஒழுங்கமைக்கிறேன்.',
                    hindi: 'मैं अपना पैसा ध्यान से व्यवस्थित करता हूं।',
                    score: 130,
                    climate: 'High'
                },
                {
                    english: 'I avoid risky financial situations.',
                    tamil: 'ஆபத்தான நிதி சூழ்நிலைகளை நான் தவிர்க்கிறேன்.',
                    hindi: 'मैं जोखिमपूर्ण वित्तीय स्थितियों से बचता हूं।',
                    score: 150,
                    climate: 'Extremely High'
                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                english: "Which approach to life you will prefer ?",
                tamil: "வாழ்க்கையைப் பற்றிய உங்கள் அணுகுமுறை என்ன ? எந்த விருப்பத்தை கீழே விரும்புகிறீர்கள் ?",
                hindi: 'जीवन के प्रति आपका दृष्टिकोण क्या है? नीचे आप कौन सा विकल्प पसंद करेंगे?',
                questionType: 'Perfectionism'
            },
            options: [
                {
                    english: 'A planned life is a good life.',
                    tamil: 'திட்டமிட்ட வாழ்க்கை ஒரு நல்ல வாழ்க்கை.',
                    hindi: 'एक नियोजित जीवन ही एक अच्छा जीवन होता है।',
                    score: 150,
                    climate: 'High'
                },
                {
                    english: "Don't think long term. Just enjoy each day!",
                    tamil: 'எதிர்காலத்தைப் பற்றி சிந்திக்க வேண்டாம். ஒவ்வொரு நாளும் மகிழுங்கள்!',
                    hindi: 'भविष्य के बारे में मत सोचो। बस हर दिन का आनंद लो!',
                    score: 100,
                    climate: 'Moderate'
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "How do you feel when your mobile network has low internet connectivity? ",
                tamil: "உங்கள் மொபைல் நெட்வொர்க்கில் குறைந்த இணைய இணைப்பு இருக்கும்போது நீங்கள் எப்படி உணருகிறீர்கள்?",
                hindi: 'जब आपके मोबाइल नेटवर्क में इंटरनेट कनेक्टिविटी कम हो तो आप कैसा महसूस करते हैं?',
                questionType: 'Risk Perception'
            },
            options: [
                {
                    // english: 'Agree',
                    tamil: 'ஒப்புக்கொள்கிறேன்',
                    hindi: 'सहमत',
                    score: 150,
                    climate: 'Low',
                    url: 'set_1_risk_perc_1'
                },
                {
                    // english: 'Neither Agree or Disagree',
                    tamil: 'நான் ஒப்புக்கொள்ளவில்லை அல்லது ஏற்கவில்லை',
                    hindi: 'न तो सहमत या असहमत',
                    score: 100,
                    climate: 'Moderate',
                    url: 'set_1_risk_perc_2'
                },
                {
                    // english: 'Disagree',
                    tamil: 'நான் ஏற்கவில்லை',
                    hindi: 'असहमत',
                    score: 120,
                    climate: 'High',
                    url: 'set_1_risk_perc_3'
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "How much money is enough for you ? Select the appropriate image.",
                tamil: "உங்களுக்கு எவ்வளவு பணம் போதுமானது? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आपके लिए कितना पैसा काफी है? उपयुक्त चित्र का चयन करें।',
                questionType: 'Social Engagement'
            },
            options: [
                {
                    url: 'gold_money',
                    score: 0,
                    climate: 'Low'
                },
                {
                    url: 'only_gold',
                    score: 0,
                    climate: 'Moderate'

                },
                {
                    url: 'only_money',
                    score: 0,
                    climate: 'High'

                },
            ],
            tag: constants.social_engagement
        },
        {
            question: {
                english: "How do you feel about your future ? Select the appropriate image.",
                tamil: "உங்கள் எதிர்காலத்தைப் பற்றி நீங்கள் எப்படி உணருகிறீர்கள்? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आप अपने भविष्य के बारे में कैसा महसूस करते हैं? उपयुक्त चित्र का चयन करें।',
                questionType: 'Ambition'
            },
            options: [
                {
                    url: 'smily',
                    score: 0,
                    climate: 'Moderate'
                },
                {
                    url: 'confused',
                    score: 0,
                    climate: 'Low'

                },
                {
                    url: 'strong',
                    score: 0,
                    climate: 'High'

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
                questionType: 'Fluid Intelligence'
            },
            options: [
                {
                    url: 'apple_1_option',
                    score: 0,
                    climate: 'Extremely Low'
                },
                {
                    url: 'apple_2_option',
                    score: 0,
                    climate: 'Extremely Low'

                },
                {
                    url: 'apple_3_option',
                    score: 0,
                    climate: 'Extremely Low'

                },
                {
                    url: 'apple_4_option',
                    score: 100,
                    climate: 'High'

                },
            ],
            tag: constants.repayment_capability
        },

    ],
    Set_2: [
        {
            question: {
                english: "Would you like to take 50 coins today or 100 coins after 6 months from today? Which choice would you prefer ?",
                tamil: "நீங்கள் இன்று 50 நாணயங்களை எடுக்க விரும்புகிறீர்களா அல்லது 6 மாதங்களில் இருந்து 100 நாணயங்களை எடுக்க விரும்புகிறீர்களா? நீங்கள் எந்த விருப்பத்தை விரும்புகிறீர்கள் ?",
                hindi: 'क्या आप आज 50 सिक्के लेना चाहेंगे या आज से 6 महीने बाद 100 सिक्के लेना चाहेंगे? आप कौन सा विकल्प पसंद करेंगे?​',
                questionType: 'Future Orientation'
            },
            options: [
                {
                    url: '50_coins',
                    score: 300,
                    climate: 'Moderate'

                },
                {
                    url: '100_coins',
                    score: 150,
                    climate: 'Low'

                },
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "If given the opportunity, which of the below option would you to choose?",
                tamil: "வாய்ப்பு கிடைத்தால், பின்வருவனவற்றில் எதை நீங்கள் தேர்வு செய்வீர்கள்?",
                hindi: 'यदि आपको अवसर दिया जाए तो आप नीचे दिए गए विकल्पों में से किसे चुनेंगे?',
                questionType: 'Risk Aversion',
            },
            options: [
                {
                    english: 'You have 90% chance of winning Rs. 50,000 in a lottery but there is a 10% chance of losing Rs. 10,000.',
                    tamil: 'வெல்ல உங்களுக்கு 90% வாய்ப்பு உள்ளது லாட்டரியில் ரூ. 50,000 ஆனால்  இழக்க 10% வாய்ப்பு உள்ளது ரூ. 10,000.',
                    hindi: 'आपके पास लॉटरी में Rs. 50,000 जीतने का 90% मौका है लेकिन Rs. 10,000 हारने की 10% संभावना है ।',
                    score: 130,
                    climate: 'Moderate'
                },
                {
                    english: "You will not win anything, but you won't lose your money either.",
                    tamil: 'நீங்கள் எதையும் வெல்ல மாட்டீர்கள், ஆனால் உங்கள் பணத்தை இழக்க மாட்டீர்கள்.',
                    hindi: 'आप कुछ भी नहीं जीतेंगे, लेकिन आप अपना पैसा भी नहीं खोएंगे।',
                    score: 150,
                    climate: 'Extremely High'

                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                english: "How do you feel when due date for electricity bill is approaching for payment? Select the image that describes you.",
                tamil: "மின் கட்டணம் செலுத்துவதற்கான தேதி நெருங்கும்போது நீங்கள் எப்படி உணருகிறீர்கள் ? உங்களை சித்தரிக்கும் பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'जब बिजली बिल जमा करने की तारीख नजदीक आती हैं तो आपको कैसा लगता है ? उपयुक्त चित्र का चयन करें जो आपको दर्शाती है ।',
                questionType: 'Perfectionism',
            },
            options: [
                {
                    score: 100,
                    climate: 'Moderate',
                    url: 'set_2_perf_1'
                },
                {
                    score: 150,
                    climate: 'High',
                    url: 'set_2_perf_2'
                },
                {
                    score: 100,
                    climate: 'Moderate',
                    url: 'set_2_perf_3'
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "Do you agree with a following statement – <span class='highlight-italics'>“At some point in my life, I will experience financial difficulties”</span>",
                tamil: "பின்வரும் அறிக்கையுடன் நீங்கள் உடன்படுகிறீர்களா - <span class='highlight-italics'>“என் வாழ்க்கையின் ஒரு கட்டத்தில் நான் நிதி சிக்கல்களை எதிர்கொள்ள வேண்டும்”</span>",
                hindi: "क्या आप निम्नलिखित कथन से सहमत हैं – <span class='highlight-italics'>“मुझे अपने जीवन में कभी न कभी आर्थिक कठिनाइयों का सामना करना होगा ”</span",
                questionType: 'Risk Perception',

            },
            options: [
                {
                    english: 'YES',
                    tamil: 'ஆம்',
                    hindi: 'हां',
                    score: 150,
                    climate: 'High'
                },
                {
                    english: 'MAYBE',
                    tamil: 'அநேகமாக',
                    hindi: 'शायद',
                    score: 120,
                    climate: 'Moderate'

                },
                {
                    english: 'NO',
                    tamil: 'இல்லை',
                    hindi: 'नहीं',
                    score: 100,
                    climate: 'Low'

                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "How much money is enough for you ? Select the appropriate image.",
                tamil: "உங்களுக்கு எவ்வளவு பணம் போதுமானது? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आपके लिए कितना पैसा काफी है? उपयुक्त चित्र का चयन करें।',
                questionType: 'Social Engagement'
            },
            options: [
                {
                    url: 'gold_money',
                    score: 0,
                    climate: 'Low'
                },
                {
                    url: 'only_gold',
                    score: 0,
                    climate: 'Moderate'
                },
                {
                    url: 'only_money',
                    score: 0,
                    climate: 'High'
                },
            ],
            tag: constants.social_engagement
        },
        {
            question: {
                english: "How do you feel about your future ? Select the appropriate image.",
                tamil: "உங்கள் எதிர்காலத்தைப் பற்றி நீங்கள் எப்படி உணருகிறீர்கள்? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आप अपने भविष्य के बारे में कैसा महसूस करते हैं? उपयुक्त चित्र का चयन करें।',
                questionType: 'Ambition'
            },
            options: [
                {
                    url: 'smily',
                    score: 0,
                    climate: 'Moderate'
                },
                {
                    url: 'confused',
                    score: 0,
                    climate: 'Low'
                },
                {
                    url: 'strong',
                    score: 0,
                    climate: 'High'
                },
            ],
            tag: constants.Ambition
        },

        {
            question: {
                english: "Would you say that coming to financial decisions quickly is a sign of intelligence?",
                tamil: "பண விஷயங்களில் விரைவான முடிவுகளை எடுப்பது ஞானத்தின் அடையாளம் என்று நீங்கள் கூறுவீர்களா ?",
                hindi: 'क्या आप कहेंगे कि पैसों से जुड़े मामलों  पर जल्दी  में  फैसले  करना बुद्धिमान होने की निशानी है?',
                questionType: 'Fluid Intelligence'
            },
            options: [
                {
                    english: 'YES',
                    tamil: 'ஆம்',
                    hindi: 'हां',
                    score: 50,
                    climate: 'Low',
                },
                {
                    english: 'SOMETIMES',
                    tamil: 'சில நேரங்களில்',
                    hindi: 'कभी - कभी',
                    score: 50,
                    climate: 'Low'

                },
                {
                    english: 'NO',
                    tamil: 'இல்லை',
                    hindi: 'नहीं',
                    score: 100,
                    climate: 'Moderate'

                }
            ],
            tag: constants.repayment_capability
        }
    ],
    Set_3: [
        {
            question: {
                english: "Would you take Rs 12,000 today or Rs 18,000 after 3 months or Rs 25,000 after 4 months”? Which choice would you prefer?",
                tamil: "நீங்கள் இன்று ரூ .12,000 எடுக்க விரும்புகிறீர்களா அல்லது 3 மாதங்களில் ரூ .18,000 எடுக்க விரும்புகிறீர்களா அல்லது 4 மாதங்களில் ரூ .25,000 எடுக்க விரும்புகிறீர்களா ? எந்த விருப்பத்தை விரும்புகிறீர்கள் ?",
                hindi: 'क्या आप आज 12,000 रुपये लेना चाहेंगे या आप 3 महीने बाद 18,000 रुपये लेना चाहेंगे या फिर आप 4 महीने बाद 25,000 रुपये लेना चाहेंगे"? आप कौन सा विकल्प पसंद करेंगे ?​',
                questionType: 'Future Orientation'
            },
            options: [
                {
                    english: 'After 4 months',
                    tamil: '4 மாதங்களில்',
                    hindi: '4 महीने के बाद',
                    img: '25k',
                    score: 300,
                    climate: 'Extremely High'
                },
                {
                    english: 'Today',
                    tamil: 'இன்று',
                    hindi: 'आज',
                    img: '12k',
                    score: 150,
                    climate: 'Moderate'

                },
                {
                    english: 'After 3 months',
                    tamil: '3 மாதங்களில்',
                    hindi: '3 महीने के बाद',
                    img: '18k',
                    score: 200,
                    climate: 'Low'

                },
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                prefix: {
                    english: 'Scheme',
                    tamil: 'திட்டம்',
                    hindi: 'योजना'
                },
                english: "If given chance, Which of the following scheme you will select to invest your money:",
                tamil: "ஒரு வாய்ப்பு கிடைத்தால், பின்வரும் எந்த திட்டத்தில் நீங்கள் உங்கள் பணத்தை முதலீடு செய்வீர்கள்:",
                hindi: 'यदि मौका दिया जाए, तो आप अपने पैसे का निवेश नीचे दिए गए किस योजना में करेंगे:',
                questionType: 'Risk Aversion'
            },
            options: [
                {
                    english: 'You will get the fixed return of 4% and you may get  maximum return of 9%  as well.',
                    tamil: 'நீங்கள் 4% நிலையான திரும்ப மற்றும் அதிகபட்சம் 9% திரும்ப பெறுவீர்கள்.',
                    hindi: 'आपको 4% का निश्चित रिटर्न मिलेगा और आपको अधिकतम 9% का रिटर्न भी मिल सकता है।',
                    score: 150,
                    climate: 'Extremely High'
                },
                {
                    english: "You will get an average return of 6% and may get  maximum return of 8%  as well.",
                    tamil: ': நீங்கள் சராசரியாக 6% வருமானத்தைப் பெறுவீர்கள், மேலும் அதிகபட்சமாக 8% வருமானத்தையும் பெறலாம்.',
                    hindi: 'आपको औसतन 6% का रिटर्न मिलेगा और आपको अधिकतम 8% का रिटर्न भी मिल सकता है।',
                    score: 130,
                    climate: 'High'

                }
            ],
            tag: constants.repayment_capability
        },
        {
            question: {
                id: '3PRW',
                english: "If you have a meeting with your business partner at 6pm, then when are you more likely to arrive ? Select the appropriate option.",
                tamil: "மாலை 6 மணிக்கு உங்கள் வணிக கூட்டாளரை சந்திக்க திட்டமிட்டால், நீங்கள் எந்த நேரத்தில் வருவீர்கள்? சரியான விருப்பத்தைத் தேர்வுசெய்க.",
                hindi: 'यदि आप शाम 6 बजे अपने बिजनेस पार्टनर के साथ मिलने की योजना बना रहे हैं, तो आप किस समय पहुंचेंगे? सही विकल्प चुनें।',
                questionType: 'Perfectionism',
        
            },
            options: [
                {
                    url: '5.50PM',
                    score: 150,
                    climate: 'Extremely High'
                },
                {
                    url: '6.00PM',
                    score: 130,
                    climate: 'High'

                },
                {
                    url: '6.15PM',
                    score: 100,
                    climate: 'Low'

                },
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "How do you feel when your mobile network have low internet connectivity? ",
                tamil: "உங்கள் மொபைல் நெட்வொர்க்கில் குறைந்த இணைய இணைப்பு இருக்கும்போது நீங்கள் எப்படி உணருகிறீர்கள்?",
                hindi: 'जब आपके मोबाइल नेटवर्क में इंटरनेट कनेक्टिविटी कम हो तो आप कैसा महसूस करते हैं?',
                questionType: 'Risk Perception'
            },
            options: [
                {
                    // english: 'Agree',
                    tamil: 'ஒப்புக்கொள்கிறேன்',
                    hindi: 'सहमत',
                    score: 150,
                    climate: 'Low',
                    url: 'set_1_risk_perc_1'
                },
                {
                    // english: 'Neither Agree or Disagree',
                    tamil: 'நான் ஒப்புக்கொள்ளவில்லை அல்லது ஏற்கவில்லை',
                    hindi: 'न तो सहमत या असहमत',
                    score: 100,
                    climate: 'Moderate',
                    url: 'set_1_risk_perc_2'
                },
                {
                    // english: 'Disagree',
                    tamil: 'நான் ஏற்கவில்லை',
                    hindi: 'असहमत',
                    score: 120,
                    climate: 'High',
                    url: 'set_1_risk_perc_3'
                }
            ],
            tag: constants.repayment_willingness
        },
        {
            question: {
                english: "How much money is enough for you ? Select the appropriate image.",
                tamil: "உங்களுக்கு எவ்வளவு பணம் போதுமானது? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आपके लिए कितना पैसा काफी है? उपयुक्त चित्र का चयन करें।',
                questionType: 'Social Engagement'
            },
            options: [
                {
                    url: 'gold_money',
                    score: 0,
                    climate: 'Low'
                },
                {
                    url: 'only_gold',
                    score: 0,
                    climate: 'Moderate'

                },
                {
                    url: 'only_money',
                    score: 0,
                    climate: 'High'

                },
            ],
            tag: constants.social_engagement
        },
        {
            question: {
                english: "How do you feel about your future ? Select the appropriate image.",
                tamil: "உங்கள் எதிர்காலத்தைப் பற்றி நீங்கள் எப்படி உணருகிறீர்கள்? பொருத்தமான படத்தைத் தேர்ந்தெடுக்கவும்.",
                hindi: 'आप अपने भविष्य के बारे में कैसा महसूस करते हैं? उपयुक्त चित्र का चयन करें।',
                questionType: 'Ambition'
            },
            options: [
                {
                    url: 'smily',
                    score: 0,
                    climate: 'Moderate'
                },
                {
                    url: 'confused',
                    score: 0,
                    climate: 'Low'
                },
                {
                    url: 'strong',
                    score: 0,
                    climate: 'High'
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
                questionType: 'Fluid Intelligence'
            },
            options: [
                {
                    url: 'set_3_option_1',
                    score: 0,
                    climate: 'Extremely Low'
                },
                {
                    url: 'set_3_option_2',
                    score: 0,
                    climate: 'Extremely Low'

                },
                {
                    url: 'set_3_option_3',
                    score: 100,
                    climate: 'High'

                },
                {
                    url: 'set_3_option_4',
                    score: 0,
                    climate: 'Extremely Low'

                },
            ],
            tag: constants.repayment_capability
        },

    ]
}

export const dont_understand: any = {
    english: 'I don’t understand the question.',
    tamil: 'எனக்கு கேள்வி புரியவில்லை.',
    hindi: 'मुझे सवाल समझ नहीं आया ।',
    questionType: 'Fluid Intelligence',
    climate: 'Low'
}