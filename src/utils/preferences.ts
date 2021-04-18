export const language = {
    english: ['English', 'Hindi', 'Kannada', 'Marathi', 'Tamil'],
    native: ['English', 'हिन्दी', 'ಕನ್ನಡ', 'मराठी', 'தமிழ்'],
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
export const location = {
    title: {
        english: 'Location',
        tamil: 'இடம்'
    }
}
export const loan_amount = {
    title: {
        english: 'Enter the Loan Amount Needed',
        tamil: 'தேவையான கடன் தொகையை உள்ளிடவும்'
    }
}
export const personal_details = {
    applicant_name: {
        title: {
            english: 'Applicant Name',
            tamil: 'விண்ணப்பதாரரின் பெயர்'
        }
    },
    gender: {
        title: {
            english: 'Gender',
            tamil: 'பாலினம்'
        },
        options: {
            english: ['Male', 'Female'],
            tamil: ['ஆண்', 'பெண்கள்']
        }
    },
    marital_status: {
        title: {
            english: 'Marital Status',
            tamil: 'திருமண நிலை'
        },
        options: {
            english: ['Single', 'Married', 'Prefer Not to answer'],
            tamil: ['திருமணமாகாதவர்', 'திருமணமானவர்', 'விரும்பவில்லை']
        }
    }
}

export const age = {
    title: {
        english: 'Age',
        tamil: 'வயது'
    }
}