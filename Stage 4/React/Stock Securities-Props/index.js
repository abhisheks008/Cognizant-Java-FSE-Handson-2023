import React from 'react';
import ReactDOM from 'react-dom';
import Stock from './Stock';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Stock dashValues={{stockName:'Disney Carporation',stockShares:100}}/>, document.getElementById('root'));


serviceWorker.unregister();

