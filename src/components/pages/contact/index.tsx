import { useEffect } from "react";
import { useHistory } from "react-router";

const Contact = () => {
    const history = useHistory();
    useEffect(() => {
        history.push('/', { link: 'demo' })
    }, [history]);
    return (
        <>
        </>
    );
}
export default Contact;