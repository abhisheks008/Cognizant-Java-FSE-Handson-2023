import React from 'react';
import ReactDOM from 'react-dom';
import AppleStock from './Market.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<AppleStock />, document.getElementById('root'))
serviceWorker.unregister();

