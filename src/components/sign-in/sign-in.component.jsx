import React from "react";
import "./sign-in.styles.css";

const SignIn = () => {
    return (
        <div>
            <div class="wrap-login100">
                <form class="login100-form validate-form">
                    <span class="login100-form-title">
                        Login
                    </span>

                    <div class="wrap-input100 validate-input">
                        <input class="input100" type="text" name="username" placeholder="User Name" />
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="pass" placeholder="Password" />
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" name="Login">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
)
}


export default SignIn;