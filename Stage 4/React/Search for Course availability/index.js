import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Search/>, document.getElementById('root'))
serviceWorker.unregister();
