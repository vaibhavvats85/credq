import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { ApplicationReport } from '../../../models/Report';
import { updateApplications } from '../../../store/authentication';
import { CredqState } from '../../../store/rootReducer';
import IndicatorBar from '../../atoms/indicator-bar';
import './styles.scss';
import "react-circular-progressbar/dist/styles.css";
import classNames from 'classnames'
import ProgressLine from '../Progress';
import { resetScore } from '../../../store/scores';
import { useHistory } from 'react-router-dom';



const Report: React.FC = () => {
    const [capabilityIndicate, setCapabilityIndicate] = useState('');
    const [capabilityIndicateValue, setcapabilityIndicateValue] = useState(0);
    const [willingnessIndicate, setWillingnessIndicate] = useState('');
    const [willingnessIndicateValue, setWillingnessIndicateValue] = useState(0);
    const [customerValue, setcustomerValue] = useState('');
    const [abilityMoney, setAbilityMoney] = useState('');
    const [willingNessMoney, setWillingNessMoney] = useState('');
    const { user: { username } } = useSelector((state: CredqState) => state.authentication);
    const { overall, capability, willingness, customerInsights } = useSelector((state: CredqState) => state.scores);
    const [customerObj]=useState<any>({questionType:'',status:'',color:[]});
    const [customerProgress,setCustomerProgress]=useState<any>([]);
    const applicant = useSelector((state: CredqState) => state.preferences.name);
    const [indicate, setIndicate] = useState(0);
    const location: any = useLocation();
    const dispatch = useDispatch();
    const loanAmount = useSelector((state: CredqState) => state.preferences.amount);
    const abilityAmount= (capabilityIndicateValue/100) * parseInt(loanAmount.replace(",",""));
    const willingNessAmount= (willingnessIndicateValue/100) * parseInt(loanAmount.replace(",",""));
    const history = useHistory();



    useEffect(() => {
      setAbilityMoney(numberFormat(abilityAmount))
      setWillingNessMoney(numberFormat(willingNessAmount))

    }, [willingNessAmount,abilityAmount]);

    useEffect(() => {
     customerInsights.forEach((item:any)=>{
        if(item.questionType==="Perfectionism"){
          customerObj.questionType='Stability';
          customerObj.status=item.status;
          customerObj.color=item.color;
          const CustomerProgress=customerInsights.concat(customerObj);
         setCustomerProgress(CustomerProgress);
        }
        })

    }, [customerObj,customerInsights]);

    const handleFinish = () => {
      dispatch(resetScore());
      history.push('/application');
  }

     const numberFormat = (value:any) =>
      new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
      }).format(value);

      const circularBarAbility = classNames({
        'circularBarForAbilityGreen': capabilityIndicateValue===100,
        'circularBarForAbilityLightGreen': capabilityIndicateValue===90,
        'circularBarForAbilityYellow': capabilityIndicateValue===70,
        'circularBarForAbilityOrange': capabilityIndicateValue===80,
      })

      const circularBarWillingNess = classNames({
        'circularBarForAbilityGreen': willingnessIndicateValue===100,
        'circularBarForAbilityLightGreen': willingnessIndicateValue===90,
        'circularBarForAbilityYellow': willingnessIndicateValue===70,
        'circularBarForAbilityOrange': willingnessIndicateValue===80,
        'circularBarForWillingNess': willingnessIndicateValue===60,

      })
    
    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.state?.updateApplications) {
            const req: ApplicationReport = {
                username,
                applicant,
                score: overall,
                capability,
                willingness,
                customerInsights
            }
            dispatch(updateApplications(req))
        }


    }, [applicant, capability, dispatch, location.state?.updateApplications, overall, username, willingness,customerInsights]);

    useEffect(() => {
       if(overall>=800 && overall<=900)
       {
         const customerValue="has a very high score compared to other similar profiles. It is 100% safe to provide relevant financial services to the applicant."
         setcustomerValue(customerValue);
        }
        else if(overall>700 && overall<=799)
        {
          const customerValue="has a high score compared to other similar profiles. No red flag has been noticed in psychometric profile and it is safe to provide relevant financial services to the applicant."
          setcustomerValue(customerValue);
        }
 
        else if(overall>600 && overall<=699)
        {
          const customerValue="has an average score compared to other similar profiles. Further due diligence and background check is recommended prior to provide relevant financial services to the applicant."
          setcustomerValue(customerValue);
        }

        else if(overall<=599)
        {
          const customerValue="has a low score compared to other similar profiles. Applicant's psychometric profile shows low on most of the metrics  and it is not recommended to provide any relevant financial services to the applicant at this point."
          setcustomerValue(customerValue);
        }


    }, [customerValue,overall]);

   


    useEffect(() => {
        if (overall >= 800) {
            setIndicate(1);
            // setScale('high');
        } else if (overall >= 700) {
            setIndicate(2);
            // setScale('high');
        } else if (overall >= 600) {
            setIndicate(3);
            // setScale('average');
        } else {
            setIndicate(4);
            // setScale('low');
        }

        if (capability >= 250) {
            setCapabilityIndicate('100%');
             setcapabilityIndicateValue(100);
        }
        else if (capability >= 230){
            setCapabilityIndicate('>90%');
            setcapabilityIndicateValue(90);

        } 
        else if (capability >= 150){
            setCapabilityIndicate('>80%');
            setcapabilityIndicateValue(80);

        }
        else if (capability >=70){
            setCapabilityIndicate('>70%');
            setcapabilityIndicateValue(70)
        }
        if (willingness >= 550){
            setWillingnessIndicateValue(100);
            setWillingnessIndicate('100%');
        }
        else if (willingness >= 500 && willingness <= 549){
            setWillingnessIndicate('>90%');
            setWillingnessIndicateValue(90);
        } 
        else if (willingness >= 450 && willingness <= 499) {
            setWillingnessIndicate('>80%');
            setWillingnessIndicateValue(80);
        }

        else if (willingness <= 449 && willingness >= 400) {
          setWillingnessIndicate('>70%');
          setWillingnessIndicateValue(70);
      }
        else if(willingness <= 399){
            setWillingnessIndicate('>60%');
            setWillingnessIndicateValue(60);
        } 
     
     


        
    }, [capability, overall, willingness,capabilityIndicateValue]);
    return (
      <div>
        <div className="ButtonStyle">
        <button className="credqtab">
          CREDQ SCORE
        </button>
        <button className="riskProgfileTab">
          RISK PROFILE
        </button>
        </div>
       
      <div className="credqScore">
        <div className="score">
        <h1 className="headingPara">{overall}</h1>
              <div className="indicatorStyle"><IndicatorBar  indicate={indicate} /></div>
        </div>
        <button className="riskTab">
          RISK PROFILE
        </button>
        <div className="circularCheck ">
          <div className="displayFlex">
            <div className={circularBarAbility}>
         <h4>Ability to repay</h4>
          <CircularProgressbar
        value={capabilityIndicateValue}
        strokeWidth={15}
        text={`${capabilityIndicate}`}
        styles={buildStyles({
          textSize: "10px",
        })}
      />
      </div>
      

         
      
          <div className={circularBarWillingNess}>
          <h4>Willingness to repay</h4>
          <CircularProgressbar
        value={willingnessIndicateValue}
        strokeWidth={15}
        text={`${willingnessIndicate}`}
        styles={buildStyles({
          textSize: "10px",
        })}
      />
          </div>
          </div>
          <div className="w-20">
           <div className="div-style">
        Requested Loan Amount:  ₹{loanAmount}
      </div>
      <div className="label-willing">Predicted Ability to repay: {'>'}{abilityMoney}</div>
      <div className="div-align">Predicted Willingness to repay: {'>'}{willingNessMoney}</div>
      </div>
      </div>
     
    
        </div>
      <div className="insights">
      <div className="border-insights">
        <h2 className="margin-left">CUSTOMER'S INSIGHTS</h2>
        </div>
        {
          customerProgress.map((item:any) =>
            (  <ProgressLine
              label={item.questionType}
              visualParts={item.color}
              end={item.status}
            />)
          
          )}
    
        
      </div>
      <div className="insights">
      <div className="border-insights">
      <h2 className="margin-left">RECOMMENDATIONS</h2>
      </div>
      <div className="margin-top">
        <p >{applicant}  {customerValue}</p>
      </div>
      <div className="margin-top-label">
        <p>This score is based on our database of profiled users and their subsequent payment performance. A typical score 
ranges from 525-900.
</p>
      </div>
      <div className="margin-top-slider">
      <div className="recommedation">
        <div className="NotSafe margin-left-slider">
          <div className={overall<=599 ?"circle": ""}> 

          </div>
          </div> 
        <div className="ModeratelySafe ">
          <div className={overall<=699 && overall>600 ?"circle": ""}>
            
          </div>
        </div>
        <div className="safe">
          <div  className={overall<=799 && overall>700 ?"circle": ""}>

          </div>
        </div>
        <div className="highlySafe">
        <div  className={overall<=900 && overall>800 ?"circle": ""}>

          </div>
          </div>
      </div>
      <div className="recommedation"> 
        <div className="placeholder margin-left-slider">
          Not safe
        </div>
        <div className="placeholder">
        Moderately Safe
        </div>
        <div className="placeholder">
        safe
        </div>
        <div className="placeholder">
        highly Safe
        </div>
      </div>
      </div>
      </div>
  <button className="finish" onClick={handleFinish}>Finish</button>
    
        </div>

     
 
    );
}
export default Report;
