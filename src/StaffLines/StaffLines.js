import React, { Component } from 'react';
import './StaffLines.css';

class InstrumentPanel extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <hr className = "staff"/>
                    <hr className = "midstaff"/>
                    <hr className = "staff"/>
                    <hr className = "midstaff"/>
                    <hr className = "staff"/>
                    <hr className = "midstaff"/>
                    <hr className = "staff"/>
                    <hr className = "midstaff"/>
                    <hr className = "staff"/>
                </div>
            </div>
        );
    }
}

export default InstrumentPanel;
