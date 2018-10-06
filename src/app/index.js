import React from "react";
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './app.jsx'
import store from '../Redux/store.js'


require('./index.scss');


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))




