import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InstrumentPanel from './clock/InstrumentPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <InstrumentPanel />,
    document.getElementById('root')
);
registerServiceWorker();
