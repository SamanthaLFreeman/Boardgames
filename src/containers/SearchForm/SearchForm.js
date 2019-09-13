import React, { Component } from 'react';
import { getGames } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />
      </form>
    )
  }
}