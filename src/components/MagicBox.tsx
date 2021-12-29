/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Displayable from './Displayable';

interface MagicBoxProps {
    display: boolean;
    text: string;
}

export default class MagicBox extends React.Component<MagicBoxProps> {
    componentStyle: string;

    constructor(props: MagicBoxProps) {
        super(props);
        this.componentStyle = 'notdisplayed';
        console.log('Display magic box: ' + this.props.display);
    }

    render(): React.ReactNode {
        return (
            <Displayable display={this.props.display}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/img/matthew.png" />
                    <Card.Body className={'pb-3'}>
                        <Card.Title>{this.props.text}</Card.Title>
                        <Card.Text>
                            The box is in a card.
                            <br />
                            This is a stateless box, meaning that it&apos;s always the same.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Displayable>
        );
    }
}
