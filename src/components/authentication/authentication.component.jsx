import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import down from '../../assets/down.png'

const Authentication = () => {
    return (
        <div className="limiter">
            <SignIn />
            {/* <div className="exploreMore">
                <button>
                    New User?
                    <img className="down" src={down} alt="down image" />
                </button>
            </div> */}
            <SignUp />
        </div>
    )
}

export default Authentication;