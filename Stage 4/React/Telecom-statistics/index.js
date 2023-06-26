// Please do not make any changes in the given template

import React from 'react';
import ReactDOM from 'react-dom';

import ShareMarket from './ShareMarket.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<ShareMarket />, document.getElementById('root'))
serviceWorker.unregister();