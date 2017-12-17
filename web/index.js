import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/Root';

import store from './configureStore';
import './scss/main.scss';

ReactDOM.render(<Root store={store} />, document.querySelector('#app'));
