/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Row, Col, Button } from 'react-bootstrap';
import TemplatePage from '../components/layout/TemplatePage';

interface LoginState {
    username: string;
    password: string;
}

interface LoginProps {
    history: string[];
}

export default class LoginForm extends React.Component<LoginProps, LoginState> {
    TITLE = 'Login';

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({ username: event.currentTarget.value });
    }

    onChangePassword(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({ password: event.currentTarget.value });
    }

    onSubmit(): void {
        console.log('You are logged in > ' + this.state.username);
        this.props.history.push('/home');
    }

    componentDidMount(): void {
        document.title = 'SmartReact | ' + this.TITLE;
    }

    render(): React.ReactNode {
        return (
            <TemplatePage title={'Login'} description={''} buttons={<div></div>} showMenu={false}>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>
                        <div className="login-form bg-light mt-4 p-4">
                            <form action="" method="" className="row g-3">
                                <div className="col-12">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="col-12">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            {' '}
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <Button className="float-end" variant={'primary'} onClick={this.onSubmit}>
                                        Login
                                    </Button>
                                </div>
                            </form>
                            <hr className="mt-4" />
                            <Alert variant={'secondary'}>
                                <Link to="/home">You may safely skip this</Link>
                            </Alert>
                        </div>
                    </Col>
                    <Col>&nbsp;</Col>
                </Row>
            </TemplatePage>
        );
    }
}
