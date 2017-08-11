import React, { Component } from 'react';
import AllOregon from './AllOregon';
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
          <h1>List of Donors</h1>
        </header>
        <AllOregon />
        <hr />
          <section className="donor-row">
            <DonorList init={5} header={'Individual Contributors'} url={'oregon_individual_contributors'} />
            <DonorList init={5} header={'Business Contributors'} url={'oregon_business_contributors'} />
          </section>
          <hr />
      </div>
    );
  }
}

export default App;
