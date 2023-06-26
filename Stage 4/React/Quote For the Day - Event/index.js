import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './Quote.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Quote/>, document.getElementById('root'))
serviceWorker.unregister();

