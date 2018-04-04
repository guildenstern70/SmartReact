import React, {Component} from 'react';

import FixedMenu from "../components/FixedMenu";


class MenuLayout extends Component
{
    render()
    {
        document.title = "SmartReact";
        return (

                <div>
                    <div className="header">
                        <FixedMenu/>
                    </div>
                    <div className="content">
                    </div>
                </div>

        );
    }
}

export default MenuLayout;
