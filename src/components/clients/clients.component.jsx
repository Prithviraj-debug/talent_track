import microsoft from './microsoft.png';
import google from './google.png';
import meta from './meta.png';
import uber from './uber.png';
import apple from './apple.png';
import "./clients.styles.css"

const Clients = () => {
    return (
        <div className="clients-container">
            <h1>Our Clients</h1>
        <div className='clients'>
            <img src={microsoft} alt="microsoft" />
            <img src={google} alt="google" />

            <img src={meta} alt="meta" />

            <img src={uber} alt="uber" />

            <img src={apple} alt="apple" />
        </div>
        </div>
    );
}

export default Clients;