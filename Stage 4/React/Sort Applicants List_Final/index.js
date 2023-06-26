// Please do not make any changes in the given code template
import React from 'react';
import ReactDOM from 'react-dom';

import List from './List.js';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<List/>, document.getElementById('root'))
serviceWorker.unregister();
