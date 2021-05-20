import { ArrowDownOutlined, DownloadOutlined, WarningFilled } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlanRequest } from '../../../models';
import { CredqState } from '../../../store/rootReducer';
import { displayRazorpay } from '../../../utils/service';
import Button, { ButtonSize } from '../../atoms/button';
import * as constants from '../../../utils/constants';
import Input from '../../atoms/input';
import './styles.scss';
import { loadInvoices } from '../../../store/invoices';
import { useHistory } from 'react-router';

const PlanBilling: React.FC = () => {
    const [applicationNeed, setApplicationNeed] = useState('');
    const [totAmount, setTotAmount] = useState(0);
    const [invalidApplication, setInvalidApplication] = useState('');
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(5);

    const user = useSelector((state: CredqState) => state.authentication.user);
    const invoices = useSelector((state: CredqState) => state.invoices.response);
    const planRequest: PlanRequest = {
        plan: user.plan,
        noOfApplications: applicationNeed
    }
    const getApplications = (e: any) => {
        const value = e.target.value;
        // if (value <= 2000 && value >= 0) {
        setInvalidApplication('');
        setApplicationNeed(value);
        setTotAmount(value * constants.product_pricing[user.plan.toLowerCase()]);
        // } 
        // else if (value > 2000) {
        //     setTimeout(() => setInvalidApplication(''), 3000);
        //     setInvalidApplication('You can only enter upto 2000 applications');
        // }

    };
    const iconStyles = {
        marginRight: '1rem',
        color: '#F7B217',
        fontSize: '1.2rem'
    };
    const downloadPdf = (inv_num: string) => {
        window.open(`https://invoices.razorpay.com/v1/invoices/${inv_num}/pdf?download=1&key_id=`);
    };

    const payNow = () => {
        if (!applicationNeed) {
            setTimeout(() => setInvalidApplication(''), 3000);
            setInvalidApplication('Please enter applications needed to continue');
            return;
        }
        displayRazorpay(user, planRequest, fetchInvoices);
    }
    const fetchInvoices = useCallback(() => {
        const invoiceRequest = {
            user: user.username
        };
        dispatch(loadInvoices(invoiceRequest));
    }, [dispatch, user])

    const pagination = () => {
        setPageSize((state: any) => {
            if (state < invoices.length) {
                if (invoices.length < state + 5) return invoices.length;
                else return state + 5;
            }
            return state;
        });
    }
    useEffect(() => {
        fetchInvoices();
    }, [fetchInvoices]);

    const history = useHistory();

    return (
        <>
            <div className="back-billing">
                <Button className="back-billing_btn" size={ButtonSize.MEDIUM} onClick={() => history.push('/application')}>
                    Back
            </Button>
            </div>
            <div className="plan_billing">

                <div className="purchase">
                    <p className="header">
                        <b>Cred<span className="highlight">Q</span></b>
                    </p>
                    <Input
                        inputClass="input"
                        className="application_need"
                        value={applicationNeed}
                        placeholder={"Enter the number of applications needed"}
                        label={'Application Needed'}
                        onChange={getApplications}
                        type="number"
                        autocomplete="off"
                    />
                    <span style={invalidApplication ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                        <WarningFilled style={iconStyles} />{invalidApplication}
                    </span>
                    <h2>Total Amount: <span className="tot-amount">₹{`${totAmount.toFixed(2)}/-`}</span></h2>
                    <div className="actions">
                        <Button
                            className="pay-now"
                            onClick={payNow}>
                            Pay Now
                    </Button>
                        {/* <Button
                        className="request-upgrade"
                        onClick={sendUpgradeRequest}>
                        Request to upgrade the plan
                    </Button> */}
                    </div>
                </div>
                <div className="invoice">
                    <p className="header">
                        Invoices
                </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th style={{ textAlign: 'center' }}>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                invoices?.slice(0, pageSize).map((invoice, idx) => (

                                    <tr key={idx}>
                                        <td>{(new Date(invoice.created_at)).toDateString()}</td>
                                        <td>{invoice.amount_due / 100}</td>
                                        <td className="download-icon" onClick={() => downloadPdf(invoice.invoice_number)}><DownloadOutlined /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {invoices?.length ?
                        <h4 className="paginator" onClick={pagination}>
                            {
                                pageSize < invoices?.length ?
                                    <>
                                        <ArrowDownOutlined />
                                        <span className="paginator-active">Show more- showing {pageSize} of {invoices?.length}</span>
                                    </> :
                                    <span className="paginator-disable">Showing {pageSize > invoices?.length ? invoices?.length : pageSize} of {invoices?.length}</span>
                            }
                        </h4> :
                        <div className="no_invoice">
                            {constants.noInvoiceMsg}
                        </div>
                    }

                </div>
            </div>
        </>
    );
};

export default PlanBilling;
