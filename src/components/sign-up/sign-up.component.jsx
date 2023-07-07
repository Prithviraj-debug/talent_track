import React, { useState, useContext } from "react";
import "./sign-up.styles.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserProfileDocument, createUserWithEmailAndPasswordHandler } from "../../utils/firebase.utils";
import { UserContext } from "../contexts/user.context";
import Swal from "sweetalert2";

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword: ''
}

const SignUp = () => {
    const navigate = useNavigate();
    const [ formFields, setFormFields ] = useState(defaultFormFields);

    const { username, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => { 
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password and Confirm Password do not match! Please try again!',
              })
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPasswordHandler(email, password);
            await createUserProfileDocument(user, { username });
            setCurrentUser(user);
            resetFormFields();
            Swal.fire(
                'Good job!',
                'You have been successfully registered!',
                'success'
              )
              setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {

            if(error.code === 'auth/email-already-in-use') {   
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email is already in Use! Please try again with a different email',
                  })
                return;
            } else {
                console.log(error);
            }
        }

        resetFormFields();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    }

    return (
        <div className="limiter">
            <div class="wrap-login100">
                <form class="login100-form validate-form" onSubmit={handleSubmit}>
                    <span class="login100-form-title">
                        Sign Up
                    </span>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="text" name="username" placeholder="User Name" onChange={handleChange} />
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="number" name="phone" placeholder="Phone #" onChange={handleChange} />
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="password" placeholder="Password" onChange={handleChange} />
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" name="Login">
                            Sign Up
                        </button>
                    </div>

                    <div className="switch">
                        <p className="signin">Already have an account? &nbsp;
                            <Link to='/signin'>
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;