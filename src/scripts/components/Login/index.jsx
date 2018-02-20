/* eslint-disable no-alert */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './login.scss';
import { auth } from '../../../../config/firebase/index';

class Login extends Component {
    constructor(props) {
        super(props);
        this.signInEmailPass = this.signInEmailPass.bind(this);
        this.state = {
            redirect: false,
        };
    }

    signInEmailPass(event) {
        event.preventDefault();
        // console.table([{
        //     email: this.emailInput.value,
        //     pass: this.passInput.value,
        // }]);
        const email = this.emailInput.value;
        const pass = this.passInput.value;
        auth.signInWithEmailAndPassword(email, pass)
            .catch((error) => {
                alert(error.message);
                this.loginForm.reset();
            });
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    redirect: true,
                });
                console.log(user.email);
            }
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div className="b-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4><span className="glyphicon glyphicon-lock" /> Login</h4>
                    </div>
                    <div className="modal-body">
                        <form
                            onSubmit={event => this.signInEmailPass(event)}
                            ref={(form) => { this.loginForm = form; }}
                        >
                            <div className="form-group">
                                <label htmlFor="usrname" className="w100">
                                    Username
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="usrname"
                                        placeholder="Enter email"
                                        ref={(input) => { this.emailInput = input; }}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="psw" className="w100">
                                    Password
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="psw"
                                        placeholder="Enter password"
                                        ref={(input) => { this.passInput = input; }}
                                    />
                                </label>
                            </div>

                            <button type="submit" className="btn btn-default btn-success btn-block">
                            Login
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-default btn-default pull-left" data-dismiss="modal">
                            <span className="glyphicon glyphicon-remove" />
                            Cancel
                        </button>
                        <p>Not a member? <Link to="/signup">Sign Up</Link></p>
                        <p>Forgot <a href="#">Password?</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
