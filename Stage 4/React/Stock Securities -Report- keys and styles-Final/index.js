// Please do not make any changes in the given code template

import React from 'react';
import ReactDOM from 'react-dom';

import Stocks from './Stocks';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Stocks/>, document.getElementById('root'))
serviceWorker.unregister();