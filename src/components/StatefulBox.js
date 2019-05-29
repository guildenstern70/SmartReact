/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

// @flow

import * as React from 'react';
import './StatefulBox.css';

type TimeOfDay = {
    description: string,
    color: string
};

type Props = {

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
        timeOfDay: MORNING
    };

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
            timeOfDay: timeOfDay
        });

    }


    componentDidMount() {

        this.updateState();

    }

    componentWillUnmount() {

    }

    render() {

        let style = 'statefulbox '+ this.state.timeOfDay.color;

        return (

            <div className={ style } >
                It's { this.state.timeOfDay.description }
            </div>

        );

    }
}

export default StatefulBox;
