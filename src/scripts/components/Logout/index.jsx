import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../../../config/firebase/index';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }
    componentWillMount() {
        auth.signOut().then(() => {
            this.setState({
                redirect: true,
            });
        });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div />
        );
    }
}

export default Logout;
