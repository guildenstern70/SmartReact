/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React, {Component} from 'react'
import logo from './logo.svg';
import './AnimatedLogo.css';
import { Image } from 'semantic-ui-react'


class AnimatedLogo extends Component
{

    constructor(props)
    {
        super(props);
        console.log("Display animated logo: " + this.props.display);
    }

    render()
    {
        let size = 'mini';
        let style = {marginRight: '1.5em'};

        if (this.props.size !== 'mini')
        {
            size = 'medium';
            style = {marginLeft: '-30px'};
        }

        return (

            <Image
                size={size}
                src={logo}
                className="App-logo" alt="logo"
                style={style}
            />

        );

    }
}


export default AnimatedLogo;
