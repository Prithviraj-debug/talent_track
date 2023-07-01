import React from "react";
import "./sign-in.styles.css";
import login from "./undraw_Login.svg"
import fav from "../../assets/fav.png"
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <div class="limiter">
                <div class="container-login100">
                    <div class="logo_container">
                        <Link to="/">
                        <img class="logo" src={fav} alt="logo is not available" width="auto" height="50" />
                        </Link>
                    </div>

                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            <img src={login} alt="IMG" />
                        </div>

                        <form class="login100-form validate-form">
                            <span class="login100-form-title">
                                Login
                            </span>

                            <div class="wrap-input100 validate-input">
                                <input class="input100" type="text" name="username" placeholder="User Name" />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <input class="input100" type="password" name="pass" placeholder="Password" />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" name="Login">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
)
}


export default SignIn;