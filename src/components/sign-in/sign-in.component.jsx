import React from "react";
import "./sign-in.styles.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserProfileDocument, signInWithGooglePopup, signInWithEmailAndPasswordHandler } from "../../utils/firebase.utils";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user.context";
import Swal from "sweetalert2";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {
    const navigate = useNavigate();

    const [ formFields, setFormFields ] = useState(defaultFormFields);

    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserProfileDocument(user);
        setCurrentUser(user);
        Swal.fire(
            'Success!',
            'Logged In!',
            'success'
            )
        setTimeout(() => {
            navigate('/');
        }
        , 1000);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInWithEmailAndPasswordHandler(email, password);
            setCurrentUser(user);
            Swal.fire(
                'Success!',
                'Logged In!',
                'success'
              )
            setTimeout(() => {
                navigate('/');
            }, 1000);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Wrong Password! Please try again!',
                      })
                    break;
                case 'auth/user-not-found':
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'User not found! Please try again!',
                      })
                    break;
                default:
                    console.log(error)
                    break;
            }
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    }
    
    return (
        <div className="limiter">
            <div class="wrap-login100">
                <form class="login100-form validate-form" onSubmit={handleSubmit}>
                    <span class="login100-form-title">
                        Login
                    </span>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" name="Login" type="submit">
                            Continue
                        </button>

                        <button class="login100-form-btn" name="Login" onClick={signInWithGoogle}>
                            Continue with Google
                        </button>
                    </div>

                    <div className="switch">
                        <p className="signup">Don't have an account? &nbsp;
                            <Link to='/signup'>
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>

            </div>
        </div>
)
}


export default SignIn;