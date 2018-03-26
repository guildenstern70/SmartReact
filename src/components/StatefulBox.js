import React, {Component} from 'react';
import './StatefulBox.css';

const TimeOfDay = {

    MORNING: { TimeOfDay: 'morning', Color: 'pink' },
    NOON: { TimeOfDay: 'noon', Color: 'orange' },
    NIGHT: { TimeOfDay: 'morning', Color: 'dkblue' }

};

/***
 * This component changes its state
 * accordingly to the time of day
 */
class StatefulBox extends Component {

    constructor(props) {

        super(props);
        this.state = { timeOfDay : TimeOfDay.MORNING };

    }

    updateState() {

        let currentHour = new Date().getHours();
        let timeOfDay;

        if (currentHour > 5 && currentHour <= 12)
        {
            timeOfDay = TimeOfDay.MORNING
        }
        else if (currentHour > 12 && currentHour <= 21)
        {
            timeOfDay = TimeOfDay.NOON
        }
        else
        {
            timeOfDay = TimeOfDay.NIGHT
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

        let style = 'statefulbox '+ this.state.timeOfDay.Color;

        return (

            <div className={ style } >
                It's { this.state.timeOfDay.TimeOfDay }
            </div>

        );

    }
}

export default StatefulBox;
