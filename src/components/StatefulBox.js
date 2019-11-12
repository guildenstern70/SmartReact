/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

// @flow

import * as React from 'react';
import './StatefulBox.css';
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

type TimeOfDay = {
    description: string,
    color: string
};

type Props = {
    display: boolean
};

type State = {
    timeOfDay: TimeOfDay
};

const MORNING : TimeOfDay = { description: 'Morning', color: 'pink'};
const NOON : TimeOfDay = { description: 'Noon', color: 'orange'};
const NIGHT : TimeOfDay = { description: 'Night', color: 'night'};

/***
 * This component changes its state
 * accordingly to the time of day
 */
class StatefulBox extends React.Component<Props, State> {

    state = {
        timeOfDay: MORNING,
        currentHour: 10
    };

    constructor(props)
    {
        super(props);
        console.log("Display stateful box: " + this.props.display);
    }

    updateState() {

        let currentHour = new Date().getHours();
        let timeOfDay;

        if (currentHour > 5 && currentHour <= 12)
        {
            timeOfDay = MORNING
        }
        else if (currentHour > 12 && currentHour <= 21)
        {
            timeOfDay = NOON
        }
        else
        {
            timeOfDay = NIGHT
        }

        this.setState( {
            timeOfDay,
            currentHour
        });

    }

    getAssociatedImage() {
        let image;
        switch (this.state.timeOfDay) {
            case MORNING:
                image = "/img/morning.png";
                break;
            case NOON:
                image = "/img/noon.png";
                break;
            default:
                image = "/img/night.png"
        }
        return image;
    }


    componentDidMount() {

        this.updateState();

    }

    displayOrNot()
    {
        if (this.props.display)
        {
            return "rightdisplayed"
        }
        return "notdisplayed";
    }

    componentWillUnmount() {

    }

    render() {

        let style = this.displayOrNot();

        return (

            <div className={style}>
                <Card>
                    <Image src={this.getAssociatedImage()} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>{this.state.timeOfDay.description}</Card.Header>
                        <Card.Meta>
                            <span className="date">It's {this.state.currentHour} hh.</span>
                        </Card.Meta>
                        <Card.Description>
                            Try this in different hours to see it change.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="user"/>
                        22 Friends
                    </Card.Content>
                </Card>
            </div>

        );

    }
}

export default StatefulBox;
