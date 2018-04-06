import React, {Component} from 'react';

import FixedMenu from "../components/FixedMenu";


class MenuLayout extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Display menu layout: " + this.props.display);
    }

    render()
    {
        document.title = "SmartReact";
        return (

                <div>
                    <div className="header">
                        <FixedMenu/>
                    </div>
                    <div className="content">
                        { this.props.children }
                    </div>
                </div>

        );
    }
}

export default MenuLayout;
