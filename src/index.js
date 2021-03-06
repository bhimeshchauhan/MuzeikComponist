import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InstrumentPanel from './StaffLines/StaffLines';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
        <InstrumentPanel />,
    document.getElementById('root')
);
registerServiceWorker();
