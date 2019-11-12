/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React, {Component} from 'react'
import './LoginForm.css';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import AnimatedLogo from "../components/AnimatedLogo";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";

class LoginForm extends Component
{
    TITLE = "Login";

    constructor(props)
    {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChangeUsername(event)
    {
        console.log("Setting username to " + event.target.value);
        this.setState({username: event.target.value});
    }

    onChangePassword(event)
    {
        console.log("Setting password to " + event.target.value);
        this.setState({password: event.target.value});
    }

    onSubmit(event)
    {
        console.log("You are logged in > " + this.state.username);
        this.props.history.push('/home')
    }

    componentDidMount() {
        document.title = "SmartReact | " + this.TITLE;
    }

    render()
    {
        return (

            <div className='login-form'>
                {/*
                  Heads up! The styles below are necessary for the correct render of this example.
                  You can do same with CSS, the main idea is that all the elements up to the `Grid`
                  below must have a height of 100%.
                */}
                <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                  }
                `}</style>
                <Grid
                    textAlign='center'
                    style={{height: '100%'}}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{maxWidth: 450}}>
                        <Image centered size='small' src='/img/logo.png'/>
                        <Header as='h3' color='blue' textAlign='center'>
                            <AnimatedLogo/>
                            {' '}Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    value={this.state.username} onChange={this.onChangeUsername}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    value={this.state.password} onChange={this.onChangePassword}
                                />
                                <Button color='blue' fluid size='large'
                                        onClick={this.onSubmit}
                                >Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            Annoyed? <Link to='/home'>Skip</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

}

export default LoginForm
