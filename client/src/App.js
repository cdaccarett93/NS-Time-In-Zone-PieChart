import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import PieChart from './components/highchart';

class App extends Component {
  state = {
    entries: [
      { name: 'Low <80', y: 2.2 },
      { name: 'Normal', y: 62.2 },
      { name: 'High >= 180', y: 35.6 }
    ]
  };
  entries = results => {
    var entryResults = [
      { name: 'Low <80', y: 0 },
      { name: 'Normal', y: 0 },
      { name: 'High >= 180', y: 0 }
    ];
    results.map(entry => {
      if (entry.sgv < 80) {
        entryResults[0].y += 1;
      } else if (entry.sgv >= 80 && entry.sgv < 180) {
        entryResults[1].y += 1;
      } else {
        entryResults[2].y += 1;
      }
    });
    this.setState({ entries: entryResults });
  };

  render() {
    return (
      <div className="App">
        <Form setEntries={this.entries} />
        <div className="ChartRow">
          <PieChart entries={this.state.entries} />
        </div>
      </div>
    );
  }
}

export default App;
