import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import * as axios from './networking/Axios';
import axiosWrapper from './networking/Axios';

class App extends Component {
  componentDidMount(){
    const getUrl = 'http://formsdev.vcloud.gov.il/govservicelist/DateTimeConverter/GetListOfHebrewYears?dateTimeModel={day:"1",month:"1",year:1918,startYear:0,endYear:200,type:1}';
    const getSettings = {
      url: getUrl,
      method: 'GET'
    }
    //axios.request(getSettings);
    axiosWrapper(getSettings);

    // const params = new URLSearchParams();
    // params.append('listName', 'City');
    const data = { listName: 'City' };
    const postUrl = 'http://formsdev.vcloud.gov.il/govservicelist/ListProvider/GetList';
    const postSettings = {
      url: postUrl,
      method: 'POST',
      // data: params,
      data: data,
    }
    //axios.request(postSettings);
    axiosWrapper(postSettings);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
