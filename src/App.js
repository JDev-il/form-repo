import React, { Component } from 'react'
import './App.scss';

/*============  Components  =============*/
import MainComponent from './shared/main/main.js';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = { 
      init: 1
    }
  }
  

  render(){
    return (
      <div className="app">
        <MainComponent takeData={this.state}></MainComponent>
      </div>
    )
  }

}

export default App;
