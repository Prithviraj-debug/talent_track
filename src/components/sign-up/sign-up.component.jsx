import React from "react";
import "./sign-up.styles.css";

const SignUp = () => {
    return (
        <div className="signup-container">
            <div class="wrap-login100">
                <form class="login100-form validate-form">
                    <span class="login100-form-title">
                        Sign Up
                    </span>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="text" name="username" placeholder="User Name" />
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="email" name="email" placeholder="Email" />
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="number" name="phone" placeholder="Phone #" />
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="pass" placeholder="Password" />
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="pass" placeholder="Confirm Password" />
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" name="Login">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;