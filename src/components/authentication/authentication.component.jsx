import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const Authentication = () => {
    return (
        <div className="limiter">
            <SignUp />
            <SignIn />
        </div>
    )
}

export default Authentication;