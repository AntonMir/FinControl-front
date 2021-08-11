import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux'
import { store } from '@store/store.js'
// components
import App from '@components/app/App.js';
// styles
import './index.scss';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>	
    </React.StrictMode>,
document.getElementById('root')
);

