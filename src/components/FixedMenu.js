import React from 'react'

import { Container, Dropdown, Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import AnimatedLogo from "./AnimatedLogo";


const FixedMenu = () => (

    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <AnimatedLogo />
                    SmartReact
                </Menu.Item>
                <Menu.Item as='a'><Link to="/home">Home</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/anotherpage">Other Page</Link></Menu.Item>

                <Dropdown item simple text='Dropdown'>
                    <Dropdown.Menu>
                        <Dropdown.Item>All Items</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Header>Header Item</Dropdown.Header>
                        <Dropdown.Item>
                            <i className='dropdown icon'/>
                            <span className='text'>Submenu</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
    </div>

);

export default FixedMenu;
