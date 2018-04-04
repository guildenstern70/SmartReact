import React, {Component} from 'react';
import './MagicBox.css';

class MagicBox extends Component
{

    constructor(props)
    {
        super(props);
        console.log("Display magic box: " + this.props.display);
    }

    displayOrNot()
    {
        if (this.props.display)
        {
            return "magicbox aqua displayed"
        }
        return "magicbox aqua notdisplayed";

    }

    render()
    {
        const style = this.displayOrNot();

        return (

            <div className={style}>
                {this.props.text}
            </div>

        );

    }
}

export default MagicBox;
