// Please do not make any changes in the given template
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeInfo from './Welcome';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<WelcomeInfo />, document.getElementById('root'))
serviceWorker.unregister();
