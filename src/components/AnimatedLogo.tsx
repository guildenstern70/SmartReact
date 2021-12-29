/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './AnimatedLogo.css';

import logo from './resources/logo.svg';
import { Image } from 'react-bootstrap';

interface AnimatedLogoProps {
    width: string; // ie: 100px
}

export default class AnimatedLogo extends React.Component<AnimatedLogoProps, never> {
    static defaultProps = {
        width: '100px',
    };

    constructor(props: AnimatedLogoProps) {
        super(props);
        console.log('Display animated logo: width = ' + this.props.width);
    }

    render(): React.ReactNode {
        return <Image width={this.props.width} src={logo} className="App-logo" alt="logo" />;
    }
}
