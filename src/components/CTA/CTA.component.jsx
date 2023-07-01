import { Link } from "react-router-dom";
import "./CTA.styles.css";

const CTA = () => {
    return (
        <div className="cta">
        <div className="cta__content">
            <h1 className="cta__heading">Ready to revolutionize your hiring process?</h1>
            <p className="cta__para">
            Join the countless organizations who have already experienced the benefits of our online recruitment solution. Sign up today for a free trial and take your recruitment efforts to the next level!
            </p>
            <Link to="/signup">
            <button className="cta__btn">Get Started</button>
            </Link>
        </div>
        </div>
    );
    }

export default CTA;