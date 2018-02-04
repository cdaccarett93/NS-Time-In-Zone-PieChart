import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = {
    nsUrl: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    var url = this.state.nsUrl;
    axios
      .get('/entries', {
        params: {
          URL: url
        }
      })
      .then(response => {
        this.props.setEntries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="row">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="">
            <div className="col s12 input-field inline">
              <input
                type="text"
                className="validate"
                value={this.state.nsUrl}
                onChange={event => this.setState({ nsUrl: event.target.value })}
              />
              <label>NS Url</label>
            </div>
            <div style={{ paddingTop: '15px' }} className="input-field">
              <input
                style={{ color: '#555' }}
                type="submit"
                className="inline col s6 m3 validate btn grey lighten-2 truncate"
                value="Get Entries"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
