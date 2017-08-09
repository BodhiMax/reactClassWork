import React, { Component } from 'react';
import DonorList from './DonorList';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
      <header>
        <h1>List of donors</h1>
      </header>
      <hr />
        <section className="donor-row">
          <DonorList url={'oregon_individual_contributors'} />
          <DonorList url={'oregon_business_contributors'} />
        </section>
        <hr />
      </div>
    );
  }
}

export default App;
