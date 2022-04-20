import React, { Component } from 'react';
import axios from 'axios';

const APP_URL = process.env.REACT_APP_REQUEST_BASE_URL;


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null,
            password:null,
        }

        this.login = this.login.bind(this);
    }
    
    login() {
        const {username, password} = this.state;

        document.getElementById('username-input').style.border = "";
        document.getElementById('password-input').style.border = "";
        if(username && username.length > 0) {
            if(password && password.length > 0) {
                axios.post(`${APP_URL}/authenticate`, {username,password}).then(res => {
                    if(res.data.success) {
                        console.log(res.data)
                        this.props.setUsername(username);
                    } else {
                        alert(res.data.msg);
                    }
                }).catch(err => console.log(err));
            } else {
                document.getElementById('password-input').style.border = "solid 2px red";
            }
        } else {
            document.getElementById('username-input').style.border = "solid 2px red";
        }
    }


    render() {
        const {username, password} = this.state;
        return (
            <div className='container w-25 p-5'>
                <form className='container p-5 border'>
                    <div className="form-outline mb-4">
                        <input 
                            type="text" 
                            className="form-control"
                            id='username-input'
                            value={username}
                            onChange={(e) => this.setState({username: e.target.value.trimEnd()})} />

                        <label className="form-label" for="form2Example1">User</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input 
                            type="password" 
                            className="form-control"
                            id='password-input'
                            password={password}
                            onChange={(e) => this.setState({password: e.target.value.trim()})} />

                        <label className="form-label" for="form2Example2">Password</label>
                    </div>

                    {/* <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div class="col">
                        <a href="#!">Forgot password?</a>
                        </div>
                    </div> */}
                    <button 
                        type="button" 
                        className="btn btn-primary btn-block mb-4"
                        onClick={(e) => this.login()}>Sign in</button>

                    {/* <!-- Register buttons -->
                    <div class="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                        </button> */}
                    {/* </div> */}
                </form>
            </div>
        );
    }
}

export default Login;