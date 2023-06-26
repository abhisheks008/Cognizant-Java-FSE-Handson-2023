import React from 'react';
import ReactDOM from 'react-dom';

import Forum from './Forum';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Forum/>, document.getElementById('root'))
serviceWorker.unregister();