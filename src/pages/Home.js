import React from 'react'

import {Button} from 'semantic-ui-react'
import MagicBox from "../components/MagicBox";
import TemplatePage from "../components/TemplatePage";

class Home extends React.Component
{
    TITLE = "Home Page";

    constructor(props)
    {
        super(props);
        this.state =
        {
            showMagicBox: false
        };

        // Remember to bind event!
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        console.log('New state: ' + JSON.stringify(this.state));
        this.setState({
            showMagicBox: !this.state.showMagicBox
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
                                  <Button onClick={this.handleClick} primary>Magic Box</Button>
                                  <Button secondary>Stateful Box</Button>
                              </div>
                          }>
                 <MagicBox display={this.state.showMagicBox} text="Magic Box"/>
            </TemplatePage>

        );
    }
}

export default Home;
