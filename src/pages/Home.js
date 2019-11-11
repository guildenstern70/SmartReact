/*
 * Copyright (c) 2019, Alessio Saltarin
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react'

import {Button} from 'semantic-ui-react'
import MagicBox from "../components/MagicBox";
import TemplatePage from "../components/TemplatePage";
import StatefulBox from "../components/StatefulBox";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";

class Home extends React.Component
{
    TITLE = "Home Page";

    constructor(props)
    {
        super(props);
        this.state =
        {
            showMagicBox: false,
            showStatefulBox: false
        };

        // Remember to bind events!
        this.magicBoxClick = this.magicBoxClick.bind(this);
        this.statefulBoxClick = this.statefulBoxClick.bind(this);
    }

    magicBoxClick()
    {
        console.log('New state for MagicBox: ' + JSON.stringify(this.state));
        this.setState({
            showMagicBox: !this.state.showMagicBox
        });
    }

    statefulBoxClick()
    {
        console.log('New state for StatefulBox: ' + JSON.stringify(this.state.showStatefulBox));
        this.setState({
            showStatefulBox: !this.state.showStatefulBox
            });
    }

    description() {
        return "This is a template for a simple marketing or informational website.\n" +
            "It includes a large callout called a jumbotron and three\n" +
            "supporting pieces of content. Use it as a starting\n" +
            "point to create something more unique."
    }

    componentDidMount() {
        document.title = "SmartReact | " + this.TITLE;
    }

    render()
    {
        return (

            <TemplatePage title={"Home Page"}
                          description={this.description()}
                          buttons={
                              <div>
                                  <Button onClick={this.magicBoxClick} primary>Magic Box</Button>
                                  <Button onClick={this.statefulBoxClick} secondary>Stateful Box</Button>
                              </div>
                          }>
                <Segment>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <MagicBox display={this.state.showMagicBox} text="Magic Box"/>
                        </Grid.Column>
                        <Grid.Column>
                            <StatefulBox display={this.state.showStatefulBox} />
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>And</Divider>
                </Segment>


            </TemplatePage>

        );
    }
}

export default Home;
