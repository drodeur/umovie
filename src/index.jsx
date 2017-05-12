import React, { Component } from 'react';
import AppMessage from 'project-root/AppMessage';

import {render} from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'project-core/CreateStore';

import reducers from 'project-root/reducers.js';



export default class App extends Component {
  render() {
    let devTools =  null;
    if (__DEV__ && __CLIENT__ && !window.devToolsExtension) {
      const DevTools = require('project-core/DevTools.jsx').default;
      devTools = <DevTools />;
    }

    const store = createStore();

    return (
      <Provider store={store}>
        <AppMessage devTools={devTools} />
      </Provider>
    );
  };
};

render(<App/>, document.getElementById('app'));
