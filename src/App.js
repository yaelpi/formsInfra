import React, { Component } from 'react';
import './App.css';
import rootStore from './rootStore';
import ExampleForm from './exampleForm';
import {observer, Provider} from 'mobx-react';
window.rootStore=rootStore;

@observer

class App extends Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <div className="App">
          <header className="App-header">
          </header>
          <ExampleForm />
        </div>
      </Provider>
    );
  }
}

export default App;
