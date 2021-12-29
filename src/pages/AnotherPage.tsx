/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TemplatePage from '../components/layout/TemplatePage';
import ReduxController from '../components/ReduxController';
import ReduxShow from '../components/ReduxShow';

interface AnotherPageProps {
    style: string;
}

export default class AnotherPage extends React.Component<AnotherPageProps> {
    TITLE = 'Redux Example';

    static description(): string {
        return 'This is an example of a Redux store implemented in React.';
    }

    render(): React.ReactNode {
        return (
            <TemplatePage title={'Redux Example'} description={AnotherPage.description()} buttons={<div></div>}>
                <Container>
                    <Row>
                        <Col>
                            <ReduxController />
                        </Col>
                        <Col>
                            <ReduxShow />
                        </Col>
                        <Col>&nbsp;</Col>
                    </Row>
                </Container>
            </TemplatePage>
        );
    }
}
