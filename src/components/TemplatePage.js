/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react'

import {Component} from "react";
import {Grid, Message} from "semantic-ui-react";
import MenuLayout from "./MenuLayout";

class TemplatePage extends Component
{
    render()
    {
        return (

            <MenuLayout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Message>
                                <Message.Content>
                                    <Message.Header>
                                        {this.props.title}
                                    </Message.Header>
                                    <p>{this.props.description}</p>
                                    {this.props.buttons}
                                </Message.Content>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {this.props.children}
            </MenuLayout>

        );
    }
}

export default TemplatePage;
