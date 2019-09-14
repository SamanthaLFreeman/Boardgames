import React, { Component } from 'react';
import { getGames } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchGames, getPopularGames } from '../../util/apiCalls';
import { Link } from 'react-router-dom';

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

  handleInputSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { getGames, cleanUpGames } = this.props;
    searchGames(name)
      .then(data => cleanUpGames(data.games))
      .then(data => getGames(data))
      .catch(error => console.log(error))
  }

  handlePopularSubmit = (e) => {
    e.preventDefault();
    const { getGames, cleanUpGames } = this.props;
    getPopularGames()
      .then(data => cleanUpGames(data.games))
      .then(data => getGames(data))
      .catch(error => console.log(error))
  }
  

  render() {
    return (
      <form>
        <input 
          type="text" 
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />
        <button onClick={this.handleInputSubmit}>Submit</button>
        <button onClick={this.handlePopularSubmit}>Show Popular Games</button>
        <button onClick={this.handleRandomSubmit}>Show Random Game</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ getGames }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchForm);