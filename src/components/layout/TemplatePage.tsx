/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import MenuLayout from './MenuLayout';

interface TemplatePageProps {
    title: string;
    description: string;
    buttons: React.ReactNode;
    children: React.ReactNode;
    showMenu?: boolean;
}

const TemplatePage: React.FC<TemplatePageProps> = (props: TemplatePageProps) => {
    let showMenu: boolean;

    if (props.showMenu == undefined) {
        showMenu = true;
    } else {
        showMenu = props.showMenu;
    }

    return (
        <MenuLayout showMenu={showMenu}>
            <Container className={'mt-5 mb-3'}>
                <Row>
                    <Col>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                        <div>{props.buttons}</div>
                    </Col>
                </Row>
            </Container>
            {props.children}
        </MenuLayout>
    );
};

export default TemplatePage;
