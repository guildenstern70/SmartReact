/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react'
import TemplatePage from "../components/TemplatePage";
import {Button} from "semantic-ui-react";

class AnotherPage extends React.Component
{
    TITLE = "Other Page";

    componentDidMount() {
        document.title = "SmartReact | " + this.TITLE;
    }

    render()
    {
        return (
            <TemplatePage title={"Other Page"}
                  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
                  "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                  "quis nostrud exercitation ullamco"}
                  buttons={
                      <Button primary>Learn more &hellip;</Button>
                  }>
            </TemplatePage>
        );
    }

}

export default AnotherPage;
