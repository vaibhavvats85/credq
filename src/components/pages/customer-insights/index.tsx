import { EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ReportBackendResponse } from "../../../models";
import { loadPreferences } from "../../../store/preferences";
import { loadReports } from "../../../store/reports";
import { CredqState } from "../../../store/rootReducer";
import { getViewReport, loadCapabilityScore, loadScore, loadWillingnessScore, VIEW_REPORTS } from "../../../store/scores";
import Button, { ButtonSize } from "../../atoms/button";
import Input from "../../atoms/input";
import Modal from "../../atoms/modal";
import './styles.scss';
const CustomerProfile: React.FC = () => {
    const dispatch = useDispatch();
    const { username } = useSelector((state: CredqState) => state.authentication.user);
    const preferences = useSelector((state: CredqState) => state.preferences);
    const reports = useSelector((state: CredqState) => state.reports.response);
    const [filter, setFilter] = useState('');
    const [modalOpen, setModalOpen] = useState(true);
    const history = useHistory();
    const hideModal = () => {
        setModalOpen(false);
        history.push('/');
    }
    useEffect(() => {
        debugger
        dispatch(loadReports(username));
    }, [dispatch, username]);

    const viewReport = (report: ReportBackendResponse) => {
        const { score, capability, willingness, applicant } = report;
        dispatch(loadScore(parseInt(score)));
        dispatch(loadCapabilityScore(parseInt(capability)));
        dispatch(loadWillingnessScore(parseInt(willingness)));
        dispatch(loadPreferences({ ...preferences, name: applicant }));
        history.push('/application/report');
    }
    const searchCustomer = (event: any) => {
        const { value } = event.target;
        setFilter(value.toLowerCase());
    }
    return (
        <Modal show={modalOpen} close={hideModal} className="modal-cust_profile">
            <div className="back">
                <Button className="back_btn" size={ButtonSize.MEDIUM} onClick={() => history.push('/application')}>
                    Back
            </Button>
            </div>
            <div className="search">
                <Input inputClass="inputClass" placeholder="Search by ID/Name" onChange={searchCustomer} />
            </div>
            <div className="customer-profile">
                <table>
                    <thead>
                        <tr>
                            <th>Member ID</th>
                            <th>Applicant Name</th>
                            <th style={{ textAlign: 'center' }}>CredQ Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports?.filter(report => report.applicant.toLowerCase().includes(filter) ||
                                report.member_id.toLowerCase().includes(filter)).map((report, idx) => (

                                    <tr key={idx}>
                                        <td>{report.member_id}</td>
                                        <td>{report.applicant}</td>
                                        <td className="view-report" onClick={() => viewReport(report)}>View  <EyeOutlined /></td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </Modal>
    )
}

export default CustomerProfile;