/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import FixedMenu from './FixedMenu';
import { Container } from 'react-bootstrap';

interface MenuLayoutProps {
    showMenu: boolean;
    children: React.ReactNode;
}

const MenuLayout: React.FC<MenuLayoutProps> = (props: MenuLayoutProps) => {
    document.title = 'SmartReact TS';
    return (
        <>
            <FixedMenu showMenu={props.showMenu} />
            <Container>{props.children}</Container>
        </>
    );
};

export default MenuLayout;
