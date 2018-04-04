import React from 'react'

import { Header } from 'semantic-ui-react'
import FixedMenu from "../components/FixedMenu";

const AnotherPage = () => (

    <div>
        <div className="header">
            <FixedMenu/>
        </div>
        <div className="content" style={{marginTop: '100px'}}>
            <Header as='h2' color='blue' textAlign='center'>Another Page</Header>
        </div>
    </div>


);

export default AnotherPage;
