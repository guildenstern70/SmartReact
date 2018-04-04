import React from 'react'
import logo from './logo.svg';
import './AnimatedLogo.css';
import { Image } from 'semantic-ui-react'


const AnimatedLogo = () => (

        <Image
            size='mini'
            src={logo}
            className="App-logo" alt="logo"
            style={{marginRight: '1.5em'}}
        />

);

export default AnimatedLogo;
