import { useState } from "react"
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
import DialogModal from "../../../atoms/dialog";
import { close_warning } from "../../../../utils";

export interface MasterFormProps {
    currentStep: number;
    email: string;
    username: string;
    password: string;
}
const MasterForm: React.FC<MasterFormProps> = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const dispatch = useDispatch();
    const history = useHistory();
    const [dialogShow, setDialogShow] = useState(true);
    const [formValues, setFormValues] = useState<Preferences>({
        language: '',
        location: '',
        amount: '',
        name: '',
        gender: '',
        marital_status: '',
        age: ''
    })
    window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return ev.returnValue = 'Are you sure you want to close?';
    });
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues((form: any) => {
            return {
                ...form,
                [name]: value
            }
        });
    }
    const handleSubmit = (event: any) => {
        event.preventDefault()
        dispatch(preferences.loadPreferences(formValues));
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
        <div className="steps">
            <DialogModal type="success" header={close_warning} onClose={() => setDialogShow(false)} isOpen={dialogShow} />
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
                    handleChange={handleChange}
                    location={formValues.location}
                />
                <Step3
                    currentStep={currentStep}
                    handleChange={handleChange}
                    amount={formValues.amount}
                />
                <Step4
                    currentStep={currentStep}
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