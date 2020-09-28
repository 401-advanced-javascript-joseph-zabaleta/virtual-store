import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import App from './app.js';
// import store from './store/';

function Main() {

    return (

        <App />

    );

};

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
