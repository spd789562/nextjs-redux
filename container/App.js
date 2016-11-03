import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from '../reducers';
import Hello from '../component/hello';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Hello/>
      </Provider>);
  }
}
