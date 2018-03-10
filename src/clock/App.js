import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            date: new Date(),
            open: true
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            What is the time?
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <h1>This is the time people...</h1>
                            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            What is the time?
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <h1>This is the time people...</h1>
                            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            What is the time?
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <h1>This is the time people...</h1>
                            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            What is the time?
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <h1>This is the time people...</h1>
                            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            What is the time?
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <h1>This is the time people...</h1>
                            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>

        );
    }
}

export default App;
