
import React from 'react';

function Buildlist (props) {
  return <li><span className="contributor">{props.contributor.contributor_payee}</span><span className="contribution">{props.contributor.sum}</span></li>;
}

class DonorList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      // oregon_business_contributors: [],
      // oregon_individual_contributors: [],
      contributor_list: [],
      display_sum: ''
    };
    this.fetchData = this.fetchData.bind(this);
    this.getRecords = this.getRecords.bind(this);
  }

fetchData(url, num) {
  var endpoint = url + num + '/';
  var prop = url;
  // console.log(endpoint);
  // self = this;
  fetch(endpoint, {
    // mode: 'no-cors'
  })
    .then(response => response.json())
    .then(parsedData =>
      // this.setState({oregon_individual_contributors: parsedData})
      this.setState({contributor_list: parsedData})
    )
    .catch(error => console.log(error));
}

getRecords(e) {
  e.preventDefault();
  if (isNaN(e.target.value)) {
    return;
  }
  // var fetchNum = e.target.value === '' ? 5 : e.target.value
  this.setState({display_sum: e.target.value})
  if (e.target.value !== '') {
    this.fetchData('http://54.213.83.132/hackoregon/http/' + this.props.url + '/', e.target.value);
  }
}

componentDidMount() {
  // this.fetchData('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/');
  this.fetchData('http://54.213.83.132/hackoregon/http/' + this.props.url + '/', this.props.init);
}

  render() {
    const contributor_list = this.state.contributor_list;
    const display_sum = this.state.display_sum;
    // const business_contributors = this.state.oregon_business_contributors;
    // const individual_contributors = this.state.oregon_individual_contributors;
    const listItems = contributor_list.map((contributor) =>
      <Buildlist key={contributor.contributor_payee} contributor={contributor} />
    )
    return (
      <div className="App">
        <div className="contributor-records-change">
          <label htmlFor={this.props.url}>Display:</label><input id={this.props.url} onChange={this.getRecords} type="text" value={display_sum} />
        </div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default DonorList;
