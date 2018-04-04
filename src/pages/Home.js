import React from 'react'

import FixedMenu from "../components/FixedMenu";
import { Header } from 'semantic-ui-react'

const Home = () => (

    <div>
        <div className="header">
            <FixedMenu/>
        </div>
        <div className="content" style={{marginTop: '100px'}}>
            <Header as='h2' color='blue' textAlign='center'>Home</Header>
        </div>
    </div>


);

export default Home;
