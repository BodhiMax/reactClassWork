
import React from 'react';
import { formatNum } from './helperFunctions';

class AllOregon extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      all_oregon_sum: []
    };
  }

  componentDidMount () {
    fetch('http://54.213.83.132/hackoregon/http/all_oregon_sum/_/', {
      // mode: 'no-cors'
    })
      .then(response => response.json())
      .then(parsedData =>
        this.setState({all_oregon_sum: parsedData})
      )
      .catch(error => console.log(error));
  }

  render () {
    const totals = this.state.all_oregon_sum.length === 0 ? '' : this.state.all_oregon_sum[0];
    return (
      <div className="oregon-all">
        <section>
          <h2>Received by all sources</h2>
          <p><span>{totals.in === undefined ? '' : formatNum(totals.in)}</span></p>
        </section>

        <section>
          <h2>Transferred from all sources</h2>
          <p><span>{totals.out === undefined ? '' : formatNum(totals.out)}</span></p>
        </section>

        <section>
          <h2>From entities within the political system</h2>
          <p><span>{totals.from_within === undefined ? '' : formatNum(totals.from_within)}</span></p>
        </section>

        <section>
          <h2>To entities within the political system</h2>
          <p><span>{totals.to_within === undefined ? '' : formatNum(totals.to_within)}</span></p>
        </section>

        <section>
          <h2>Coming from outside</h2>
          <p><span>{totals.from_outside === undefined ? '' : formatNum(totals.from_outside)}</span></p>
        </section>

        <section>
          <h2>Going to entities outside the political system</h2>
          <p><span>{totals.to_outside === undefined ? '' : formatNum(totals.to_outside)}</span></p>
        </section>

        <section>
          <h2>Total from Grass Roots contributions</h2>
          <p><span>{totals.total_grass_roots === undefined ? '' : formatNum(totals.total_grass_roots)}</span></p>
        </section>

        <section>
          <h2>Total donations coming from within Oregon</h2>
          <p><span>{totals.total_from_in_state === undefined ? '' : formatNum(totals.total_from_in_state)}</span></p>
        </section>
      </div>
    );
  }

}

export default AllOregon;
