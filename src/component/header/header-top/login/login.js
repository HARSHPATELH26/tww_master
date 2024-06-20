import React from "react";
import './_login.scss'

const Login = () => {
    return (
        <>
            {/* <!-- Login --> */}
            <div className="login-header icon">
                <a className="active-login" href="#"><i className="icon-user"></i></a>
                <div className="form-login-register">
                    <div className="box-form-login">
                        <div className="active-login"></div>
                        <div className="box-content">
                            <div className="form-login active">
                                <form id="login_ajax" method="post" className="login">
                                    <h2>Sign in</h2>
                                    <p className="status"></p>
                                    <div className="content">
                                        <div className="username">
                                            <input type="text" required="required" className="input-text" name="username" id="username" placeholder="Your name" />
                                        </div>
                                        <div className="password">
                                            <input className="input-text" required="required" type="password" name="password" id="password" placeholder="Password" />
                                        </div>
                                        <div className="rememberme-lost">
                                            <div className="rememberme">
                                                <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                                <label for="rememberme" className="inline">Remember me</label>
                                            </div>
                                            <div className="lost_password">
                                                <a href="forgot-password.html">Lost your password?</a>
                                            </div>
                                        </div>
                                        <div className="button-login">
                                            <input type="submit" className="button" name="login" value="Login" />
                                        </div>
                                        <div className="button-next-reregister">Create An Account</div>
                                    </div>
                                </form>
                            </div>
                            <div className="form-register">
                                <form method="post" className="register">
                                    <h2>REGISTER</h2>
                                    <div className="content">
                                        <div className="email">
                                            <input type="email" className="input-text" placeholder="Email" name="email" id="reg_email" value="" />
                                        </div>
                                        <div className="password">
                                            <input type="password" className="input-text" placeholder="Password" name="password" id="reg_password" />
                                        </div>
                                        <div className="button-register">
                                            <input type="submit" className="button" name="register" value="Register" />
                                        </div>
                                        <div className="button-next-login">Already has an account</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login