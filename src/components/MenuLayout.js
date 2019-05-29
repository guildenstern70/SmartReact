/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React, {Component} from 'react';

import FixedMenu from "../components/FixedMenu";
import {Container, Header} from "semantic-ui-react";


class MenuLayout extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Display menu layout: " + this.props.display);
    }

    render()
    {
        document.title = "SmartReact";
        return (

                <Container>
                    <Header>
                        <FixedMenu/>
                    </Header>
                        { this.props.children }
                </Container>

        );
    }
}

export default MenuLayout;
