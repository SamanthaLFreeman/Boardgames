import React, { Component } from 'react';
import { getGames } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchGames, getPopularGames, randomGame } from '../../util/apiCalls';
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
    this.setState({name: ""})
  }

  handlePopularSubmit = (e) => {
    e.preventDefault();
    const { getGames, cleanUpGames } = this.props;
    getPopularGames()
      .then(data => cleanUpGames(data.games))
      .then(data => getGames(data))
      .catch(error => console.log(error))
  }

  handleRandomSubmit = (e) => {
    e.preventDefault();
    const { getGames, cleanUpGames } = this.props;
    randomGame()
      .then(data => cleanUpGames([data.game]))
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
        <button onClick={this.handleInputSubmit}><Link to='/'>Submit</Link></button>
        <button onClick={this.handlePopularSubmit}><Link to='/'>Show Popular Games</Link></button>
        <button onClick={this.handleRandomSubmit}><Link to='/'>Show Random Game</Link></button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ getGames }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchForm);