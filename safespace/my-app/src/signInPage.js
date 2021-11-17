import React, { useState }  from 'react';
import { Link } from "react-router-dom";
//import firebase from 'firebase/app';
import { useHistory } from "react-router-dom";

function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        // check firebase
        // let ref = firebase.database().ref('users');
        let data = [];

        // ref.on("value", function(snapshot) {
        //     data = snapshot.val();
        // })
        // TODO: Check whether username and password is correct in data
        if (data.length != 0) {
            history.push('/home')
        } else {
            alert('email or password is incorrect')
        }
    }

    return (
        <div className="mainContentPage">
            <div className="authenticationDiv">
                <div className="authenticationContent">
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary authenticationBtn">Submit</button>
                    </form>
                </div>
                <p className="smallTextAuthentication">Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default SignInPage;
