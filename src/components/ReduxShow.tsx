/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Card, ListGroup } from 'react-bootstrap';
import { StoreState } from '../redux/reducers/StoreState';

const mapState = (state: StoreState): StoreState => ({
    ...state,
});

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

class ReduxShow extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Store Content</Card.Title>
                    <Card.Text>Current messages in store:</Card.Text>
                    <ListGroup variant="flush">
                        {this.props.messages.map((message: string, i: number) => (
                            <ListGroup.Item key={i.toString()}>{message}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}

export default connector(ReduxShow);
