
import React from 'react';
import ReactDOM from 'react-dom';
import Info,{HealthCare,TeleCom} from './Info.jsx';
import * as serviceWorker from './serviceWorker';

var data= {"tc_stockValue":"80","hc_quantity":"200","clientName":"Client 1","hc_stockValue":"100","hc_stockNotation":"Health Care Stock","tc_stockNotation":"TeleCom Stock","tc_quantity":"130"}
ReactDOM.render(<Info client={data}/>, document.getElementById('root'));

serviceWorker.unregister();

