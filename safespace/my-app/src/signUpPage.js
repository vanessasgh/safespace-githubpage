import React from 'react';
import { Link } from "react-router-dom";

function SignUpPage() {
    return (
        <div className="mainContentPage">
            <div className="authenticationDiv">
                <div className="authenticationContent">
                    <h1>Sign Up</h1>
                    <form>
                        <div class="form-group">
                            <label for="createInputEmail">Email address</label>
                            <input type="email" class="form-control" id="createInputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <label for="usernameInput">Username</label>
                            <input type="username" class="form-control" id="usernameInput" placeholder="Enter username"></input>
                        </div>
                        <div class="form-group">
                            <label for="createInputPassword">Password</label>
                            <input type="password" class="form-control" id="createInputPassword" placeholder="Enter password"></input>
                        </div>
                        <div class="form-group">
                            <label for="confirmInputPassword">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmInputPassword" placeholder="Confirm password"></input>
                        </div>
                        <div class="form-group">
                            <label for="createInputCollege">College of Attendance</label>
                            <input type="dropdown" class="form-control" id="createInputCollege" placeholder="Select your current college"></input>
                        </div>
                        <button type="submit" class="btn btn-primary authenticationBtn">Submit</button>
                    </form>
                </div>
                <p className="smallTextAuthentication">Already have an account? <Link to="/login">Sign In</Link></p>
                <p className="evenSmallTextAuthentication">By signing up, you agree to Terms of Service and Privacy Policy</p>
            </div>
        </div>
    )
}

export default SignUpPage;
