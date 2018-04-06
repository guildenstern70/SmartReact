import React from 'react'

import { Header, Button, Grid } from 'semantic-ui-react'
import MagicBox from "../components/MagicBox";
import MenuLayout from "../components/MenuLayout";

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

            <MenuLayout>

                <Header as='h2' color='blue' textAlign='center'>Home Page</Header>

                <Grid centered style={{marginTop: '100px'}}>
                    <Button onClick={this.handleClick} primary>Magic Box</Button>
                    <Button secondary>Stateful Box</Button>
                </Grid>

                <MagicBox display={this.state.showMagicBox} text="Magic Box"/>

            </MenuLayout>

        )
    }
}

export default Home;
