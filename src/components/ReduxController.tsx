/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React, { ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Button, Card, Form } from 'react-bootstrap';
import { StoreState } from '../redux/reducers/StoreState';
import { AllTypes } from '../redux/Types';

interface OwnState {
    typedMessage: string;
}

const mapState = (state: StoreState): StoreState => ({
    ...state,
});

const mapDispatch = {
    addMessage: (message: string): AllTypes => ({ type: 'ADD_MESSAGE', message }),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

class ReduxController extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            typedMessage: '',
        };
    }

    addMessageToStore = (message: string): void => {
        if (message.length > 0) {
            console.log('Adding message to store: ' + message);
            this.setState({
                typedMessage: '',
            });
            this.props.addMessage(message);
        }
    };

    onChangeRequest = (event: ChangeEvent<HTMLInputElement>): void => {
        const currentInputValue = event.target.value;
        this.setState({
            typedMessage: currentInputValue,
        });
    };

    render(): React.ReactNode {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Add to Store</Card.Title>
                    <Card.Text>Add a string to the application Store.</Card.Text>
                    <Card.Text>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a message"
                                    onChange={this.onChangeRequest}
                                    value={this.state.typedMessage}
                                />
                                <Form.Text className="text-muted">Be imaginative!</Form.Text>
                            </Form.Group>
                        </Form>
                    </Card.Text>
                    <Button variant="primary" onClick={(): void => this.addMessageToStore(this.state.typedMessage)}>
                        Add
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default connector(ReduxController);
