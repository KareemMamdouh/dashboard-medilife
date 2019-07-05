import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';


import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'datatables.net-bs4/js/dataTables.bootstrap4'
import 'datatables.net-bs4/css/dataTables.bootstrap4.css'

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
                <BrowserRouter>
                <App />
                </BrowserRouter>
                ,document.getElementById('root')
                );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
