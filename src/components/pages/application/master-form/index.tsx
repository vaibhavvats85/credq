import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import Button from "../../../atoms/button";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import './styles.scss';
import * as preferences from '../../../../store/preferences';
import { Preferences } from "../../../../models";
import { useHistory } from "react-router";

export interface MasterFormProps {
    currentStep: number;
    email: string;
    username: string;
    password: string;
    className: string;
}
const MasterForm: React.FC<MasterFormProps> = ({ className = '' }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formValues, setFormValues] = useState<Preferences>({
        language: '',
        location: '',
        amount: '',
        name: '',
        gender: '',
        marital_status: '',
        age: '',
        date: Date.now(),
        member_id: '',

    });
    // Mock entires
    // useEffect(() => setFormValues({
    //     language: 'English',
    //     location: 'Seattle, WA, USA',
    //     amount: '100000',
    //     name: 'Test',
    //     gender: 'Male',
    //     marital_status: 'Single',
    //     age: '21-29',
    //     date: Date.now(),
    //     member_id: '',
    // }), [])
    window.addEventListener('popstate', function (event) {
        history.go(1);
    }, false);

    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return ev.returnValue = 'Are you sure you want to close?';
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);

    const handleChange = (event: any) => {
        const { name, value } = event?.target;
        storePreferencetState(name, value);
    }

    const handleChangeApplicantName = (event: any) => {
        const val = event?.target.value;
        if (!val.match(/^[a-zA-Z\s]*$/) && val !== "") {
            return;
        }
        else {
            const { name, value } = event?.target;
            storePreferencetState(name, value);
        }
    }

    const handleAmountChange = (values: any) => {
        const value = values.formattedValue.slice(1, values.formattedValue.length);
        storePreferencetState('amount', value);
    }
    const storePreferencetState = (name: string, value: string) => {
        setFormValues((form: any) => {
            const updatedForm = {
                ...form,
                [name]: value,

            };
            dispatch(preferences.loadPreferences(updatedForm));

            return updatedForm;
        });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        history.push('/application/quiz');
    }

    const _next = () => {
        setCurrentStep((step) => step >= 4 ? 5 : step + 1);
    }

    const _prev = () => {
        setCurrentStep((step) => step <= 1 ? 1 : step - 1)
    }

    const enableContinueBtn = () => {
        switch (currentStep) {
            case 1: if (formValues.language) return false;
                break;
            case 2: if (formValues.location) return false;
                break;
            case 3: if (parseInt(formValues.amount) > 0) return false;
                break;
            case 4:
                if (formValues.name && formValues.gender && formValues.marital_status) return false;
                break;
            default: return true;
        }
        return true;
    }

    const previousButton = () => {
        if (currentStep !== 1) {
            return (
                <Button
                    className="btn btn-secondary"
                    onClick={_prev}>
                    Back
                </Button>
            )
        }
        return null;
    }

    const nextButton = () => {
        if (currentStep < 5) {
            return (
                <Button
                    className="btn btn-primary"
                    onClick={_next}
                    disabled={enableContinueBtn()}
                >
                    Continue
                </Button>
            )
        }
        return null;
    }

    const quizButton = () => {
        if (currentStep === 5) {
            return (
                <Button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    disabled={formValues.age === ''}
                >
                    Quiz
                </Button>
            )
        }
        return null;
    }
    return (
        <div className={`steps ${className}`} style={currentStep === 5 ? { margin: '5rem auto' } : {}}>
            <form onSubmit={handleSubmit}>
                {/* 
        render the form steps and pass required props in
      */}
                <Step1
                    currentStep={currentStep}
                    handleChange={handleChange}
                    language={formValues.language}
                />
                <Step2
                    currentStep={currentStep}
                    handleChange={storePreferencetState}
                    location={formValues.location}
                />
                <Step3
                    currentStep={currentStep}
                    handleChange={handleAmountChange}
                    amount={formValues.amount}
                />
                <Step4
                    currentStep={currentStep}
                    handleChangeApplicantName={handleChangeApplicantName}
                    handleChange={handleChange}
                    name={formValues.name}
                    marital_status={formValues.marital_status}
                    gender={formValues.gender}
                />
                <Step5
                    currentStep={currentStep}
                    handleChange={handleChange}
                    age={formValues.age}
                />
                {previousButton()}
                {nextButton()}
                {quizButton()}

            </form>
        </div>
    );
}
export default MasterForm;