import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap'
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
            <div className="row">
                <div className="col-xs-2">
                    <Button onClick={() => this.setState({ open: !this.state.open })}>
                        BUTTON
                    </Button>
                </div>
                <div className="col-xs-10">
                    <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
                        <Panel.Collapse>
                            <Panel.Body>
                                <h1>This is the time people...</h1>
                                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                                <h1>This is the time people...</h1>
                                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                                <h1>This is the time people...</h1>
                                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                                <h1>This is the time people...</h1>
                                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>
                </div>
            </div>

        );
    }
}

export default App;
