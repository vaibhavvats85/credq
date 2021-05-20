export const language = {
    english: ['English', 'Hindi', 'Tamil', 'Kannada', 'Marathi'],
    native: ['English', 'हिन्दी', 'தமிழ்', 'ಕನ್ನಡ', 'मराठी'],
    disabled: [false, false, false, true, true],
    nativeMapping: (locale: string) => {
        let selected = '';
        language.native.forEach((lang, idx) => {
            if (locale === lang) {
                selected = language.english[idx];
            }
        });
        return selected.toLowerCase();
    }
}
export const location: any = {
    title: {
        english: 'Location',
        tamil: 'இடம்',
        hindi: 'स्थान'
    }
}
export const loan_amount: any = {
    title: {
        english: 'Enter the Loan Amount Needed',
        tamil: 'தேவையான கடன் தொகையை உள்ளிடவும்',
        hindi: 'आवश्यक ऋण राशि दर्ज करें'
    }
}
export const personal_details: any = {
    applicant_name: {
        title: {
            english: 'Applicant Name',
            tamil: 'விண்ணப்பதாரரின் பெயர்',
            hindi: 'आवेदक का नाम'
        }
    },
    gender: {
        title: {
            english: 'Gender',
            tamil: 'பாலினம்',
            hindi: 'लिंग'
        },
        options: {
            english: ['Male', 'Female'],
            tamil: ['ஆண்', 'பெண்கள்'],
            hindi: ['पुरुष', 'महिला']
        }
    },
    marital_status: {
        title: {
            english: 'Marital Status',
            tamil: 'திருமண நிலை',
            hindi: 'वैवाहिक स्थिति'
        },
        options: {
            english: ['Single',
                'Married, have no kids',
                'Married, have kids',
                'Prefer Not to Answer'
            ],
            tamil: ['திருமணமாகாதவர்', 'திருமணமானவர்', 'விரும்பவில்லை'],
            hindi: ['अविवाहित', 'विवाहित', 'जवाब नहीं देना चाहता']
        }
    }
}

export const age: any = {
    title: {
        english: 'Age',
        tamil: 'வயது',
        hindi: 'उम्र'
    }
}