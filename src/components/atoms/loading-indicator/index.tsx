import { usePromiseTracker } from "react-promise-tracker";
import './styles.scss';
import Loader from 'react-loader-spinner';

const LoadingIndicator: React.FC<any> = () => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        <>
            {promiseInProgress &&
                <div className="loader">
                    <Loader type="ThreeDots" color="#0071bc" height="100" width="100" />
                </div>}
        </>
    );
};

export default LoadingIndicator;