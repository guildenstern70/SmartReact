/*
 * Copyright (c) Alessio Saltarin 2019-2023
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MagicBox} from "../components/MagicBox";
import StatefulBox from "../components/StatefulBox";

type HomeProps = Record<string, never>;

type HomeState = {
    showMagicBox: boolean;
    showStatefulBox: boolean;
}

export default class Index extends React.Component<HomeProps, HomeState> {
    TITLE = 'Home';

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            showMagicBox: false,
            showStatefulBox: false,
        };
    }

    componentDidMount(): void {
        document.title = 'SmartReact | ' + this.TITLE;
    }

    handleButtons(showMagic: boolean, showStateful: boolean): void {
        console.log('New magic state: ' + JSON.stringify(this.state));
        this.setState({
            showStatefulBox: showStateful,
            showMagicBox: showMagic,
        });
    }

    render() {
        return (
            <>
                <Container className="py-3">
                    <Row className="mb-3">
                        <Col md="auto">
                            <ToggleButton
                                id="showMagic"
                                type="checkbox"
                                variant="outline-primary"
                                checked={this.state.showMagicBox}
                                value="0"
                                onChange={(e) => this.handleButtons(e.currentTarget.checked, false)}
                                >
                                Magic Box
                            </ToggleButton
>
                        </Col>
                        <Col md="auto">
                            <ToggleButton
                                id="showStateful"
                                type="checkbox"
                                variant="outline-primary"
                                checked={this.state.showStatefulBox}
                                value="0"
                                onChange={(e) => this.handleButtons(false, e.currentTarget.checked)}
                                >
                                Stateful Box
                            </ToggleButton
>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MagicBox display={this.state.showMagicBox} text="Magic Box"/>
                            <StatefulBox display={this.state.showStatefulBox} text="Stateful Box" />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}

