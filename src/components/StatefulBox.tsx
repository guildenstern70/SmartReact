/*
 * Copyright (c) Alessio Saltarin 2019-2023
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Displayable from "./Displayable";

type StatefulProps = {
    display: boolean;
    text: string;
};

type StatefulState = {
    datetime: Date;
};

export default class StatefulBox extends React.Component<StatefulProps, StatefulState> {
    state = {
        datetime: new Date()
    };

    private componentStyle: string;
    private interval: NodeJS.Timer | undefined;

    constructor(props: StatefulProps) {
        super(props);
        this.componentStyle = 'notdisplayed';
        console.log('Display stateful box? ' + this.props.display);
    }

    updateState(): void {
        this.setState({
            datetime: new Date()
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateState(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(): React.ReactNode {
        return (
            <Displayable display={this.props.display}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/img/noon.png" />
                    <Card.Body>
                        <Card.Title>{this.props.text}</Card.Title>
                        <Card.Text>
                            <span className="date">{this.state.datetime.toLocaleString()}</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Displayable>
            );
    }
}
