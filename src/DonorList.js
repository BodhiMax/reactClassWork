
import React from 'react';

function Buildlist (props) {
  return <li><span className="contributor">{props.contributor.contributor_payee}</span><span className="contribution">{props.contributor.sum}</span></li>;
}

class DonorList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      contributors_corporate: [],
      contributors_individual: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.getRecords = this.getRecords.bind(this);
  }

fetchData(url, num) {
  var endpoint = url + num + '/';
  // console.log(endpoint);
  // self = this;
  fetch(endpoint, {
    // mode: 'no-cors'
  })
    .then(response => response.json())
    .then(parsedData =>
      this.setState({contributors_individual: parsedData})
    )
    .catch(error => console.log(error));
}

getRecords(e) {
  this.fetchData('http://54.213.83.132/hackoregon/http/' + this.props.url + '/', e.target.value);
}

componentDidMount() {
  // this.fetchData('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/');
  this.fetchData('http://54.213.83.132/hackoregon/http/' + this.props.url + '/', 5);
}

  render() {
    const contributors_individual = this.state.contributors_individual;
    const listItems = contributors_individual.map((contributor) =>
      <Buildlist key={contributor.contributor_payee} contributor={contributor} />
    )
    return (
      <div className="App">
        <div className="contributor-records-change">
          <label htmlFor={this.props.url}>Display:</label><input id={this.props.url} onChange={this.getRecords} type="text" value="" />
        </div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default DonorList;
