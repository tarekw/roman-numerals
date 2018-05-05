import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';

import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('app')
);
