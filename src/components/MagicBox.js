/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact
 * MIT License - see LICENSE
 */

import React, {Component} from 'react';
import './MagicBox.css';
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

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
            return "displayed"
        }
        return "notdisplayed";
    }

    render()
    {
        const style = this.displayOrNot();

        return (

            <div className={style}>
                <Card>
                    <Image src="/img/matthew.png" wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.text}</Card.Header>
                        <Card.Meta>
                            <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>The box is in a card.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="user" />
                        22 Friends
                    </Card.Content>
                </Card>
            </div>


        );

    }
}

export default MagicBox;
