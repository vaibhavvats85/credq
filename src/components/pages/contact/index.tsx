import { useEffect } from "react";
import Demoform from "../../molecules/demo-form";
import Header from "../../organisms/header";
import './styles.scss';

const Contact = () => {
    useEffect(()=>{
        window.scroll(0,0);
    }, []);
    return (
        <>
            <Header />
            <div className="contact">
                <img alt="Contact Info" className='title' src={`${process.env.PUBLIC_URL}/assets/contact.png`} />
                <div className="demo">
                    <Demoform />
                </div>
            </div>
        </>
    );
}
export default Contact;