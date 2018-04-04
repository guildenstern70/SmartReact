import React from 'react'

import FixedMenu from "../components/FixedMenu";
import { Header, Button, Grid } from 'semantic-ui-react'
import MagicBox from "../components/MagicBox";

class Home extends React.Component
{

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

    render()
    {
        return (
            <div>

                <div className="header">
                    <FixedMenu/>
                </div>

                <div className="content" style={{marginTop: '100px'}}>
                    <Header as='h2' color='blue' textAlign='center'>Home Page</Header>
                    <Grid centered style={{marginTop: '100px'}}>
                        <Button onClick={this.handleClick} primary>Magic Box</Button>
                        <Button secondary>Stateful Box</Button>
                    </Grid>
                    <MagicBox display={this.state.showMagicBox} text="Magic Box"/>
                </div>
            </div>
        )
    }
}

export default Home;
