import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
const GoBackArrow: React.FC = () => {
    const history = useHistory();
    const goBack = () =>{
        history.push('/');
    }
    return (
        <ArrowLeftOutlined onClick={goBack}/>
    );
};
export default GoBackArrow;