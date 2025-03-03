/*
 * Copyright (c) Alessio Saltarin 2019-2025
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Displayable from "./Displayable";

type MagicBoxProps = {
    display: boolean;
    text: string;
};

export const MagicBox = ({ display, text }: MagicBoxProps): JSX.Element =>

    <Displayable display={display}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/img/matthew.png" />
            <Card.Body className={'pb-3'}>
                <Card.Title>{text}</Card.Title>
                <Card.Text>
                    The box is in a card.
                    <br />
                    This is a stateless box, meaning that it&apos;s always the same.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Displayable>;


