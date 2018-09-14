import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
class App extends Component {
  render() {
    return (
      <div className="col-md-6">  
          <h1 className="App-title">Candidate Info</h1> 
          <FormContainer/>
      </div>
    );
  }
}

export default App;
