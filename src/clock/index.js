import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
registerServiceWorker();
