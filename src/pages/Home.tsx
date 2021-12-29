/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import TemplatePage from '../components/layout/TemplatePage';
import MagicBox from '../components/MagicBox';
import StatefulBox from '../components/StatefulBox';

interface HomeProps {
    style: string;
}

interface HomeState {
    showMagicBox: boolean;
    showStatefulBox: boolean;
}

export default class Home extends React.Component<HomeProps, HomeState> {
    TITLE = 'Home';

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            showMagicBox: false,
            showStatefulBox: false,
        };

        // Remember to bind event!
        this.handleMagicClick = this.handleMagicClick.bind(this);
        this.handleStatefulClick = this.handleStatefulClick.bind(this);
    }

    componentDidMount(): void {
        document.title = 'SmartReact | ' + this.TITLE;
    }

    handleMagicClick(): void {
        console.log('New magic state: ' + JSON.stringify(this.state));
        this.setState({
            showMagicBox: !this.state.showMagicBox,
        });
    }

    handleStatefulClick(): void {
        console.log('New stateful state: ' + JSON.stringify(this.state));
        this.setState({
            showStatefulBox: !this.state.showStatefulBox,
        });
    }

    render(): React.ReactNode {
        return (
            <TemplatePage
                title={'Home Page'}
                description={Home.description()}
                buttons={
                    <>
                        <Button onClick={this.handleMagicClick} variant={'primary'}>
                            Magic Box
                        </Button>
                        &nbsp;
                        <Button onClick={this.handleStatefulClick} variant={'secondary'}>
                            Stateful Box
                        </Button>
                    </>
                }
            >
                <Container>
                    <Row>
                        <Col>
                            <MagicBox display={this.state.showMagicBox} text="Magic Box" />
                        </Col>
                        <Col>
                            <StatefulBox display={this.state.showStatefulBox} />
                        </Col>
                        <Col>&nbsp;</Col>
                        <Col>&nbsp;</Col>
                    </Row>
                </Container>
            </TemplatePage>
        );
    }

    static description(): string {
        return (
            'This is an example of modern React-Redux application.\n' +
            'It features integration with Bootstrap 5 responsive library,\n' +
            "and it's written entirely in Typescript."
        );
    }
}
