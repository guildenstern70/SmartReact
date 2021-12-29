/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './StatefulBox.css';
import { TimeOfDay } from './model/TimeOfDay';
import { Card, Button } from 'react-bootstrap';
import Displayable from './Displayable';

interface StatefulProps {
    display: boolean;
}

interface StatefulState {
    timeOfDay: TimeOfDay;
    currentHour: number;
}

const MORNING: TimeOfDay = { description: 'Morning', color: 'pink' };
const NOON: TimeOfDay = { description: 'Noon', color: 'orange' };
const NIGHT: TimeOfDay = { description: 'Night', color: 'night' };

export default class StatefulBox extends React.Component<StatefulProps, StatefulState> {
    state = {
        timeOfDay: MORNING,
        currentHour: 10,
    };

    private componentStyle: string;

    constructor(props: StatefulProps) {
        super(props);
        this.componentStyle = 'notdisplayed';
        console.log('Display stateful box? ' + this.props.display);
    }

    updateState(): void {
        const currentHour = new Date().getHours();
        let timeOfDay;

        if (currentHour > 5 && currentHour <= 12) {
            timeOfDay = MORNING;
        } else if (currentHour > 12 && currentHour <= 21) {
            timeOfDay = NOON;
        } else {
            timeOfDay = NIGHT;
        }

        this.setState({
            timeOfDay,
            currentHour,
        });
    }

    componentDidMount(): void {
        this.updateState();
    }

    getAssociatedImage(): string {
        let image;
        switch (this.state.timeOfDay) {
            case MORNING:
                image = '/img/morning.png';
                break;
            case NOON:
                image = '/img/noon.png';
                break;
            default:
                image = '/img/night.png';
        }
        return image;
    }

    render(): React.ReactNode {
        return (
            <Displayable display={this.props.display} floatRight={true}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.getAssociatedImage()} />
                    <Card.Body>
                        <Card.Title>{this.state.timeOfDay.description}</Card.Title>
                        <Card.Text>
                            <span className="date">It&apos;s {this.state.currentHour}:00 time.</span>
                            <div>Try this in different hours to see it change.</div>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Displayable>
        );
    }
}
