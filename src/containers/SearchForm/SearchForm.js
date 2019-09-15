import React, { Component } from 'react';
import { getGames } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchGames, getPopularGames, randomGame } from '../../util/apiCalls';
import { Redirect, Link } from 'react-router-dom';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      isPushed: false
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
      .then(() => console.log(this.props.history.push('/favorite')))
      .catch(error => console.log(error))
    this.setState({name: "", isPushed: true})
  }

  handlePopularSubmit = (e) => {
    e.preventDefault();
    const { getGames, cleanUpGames } = this.props;
    getPopularGames()
      .then(data => cleanUpGames(data.games))
      .then(data => getGames(data))
      .catch(error => console.log(error))
    this.setState({ isPushed: true })
  }

  handleRandomSubmit = (e) => {
    e.preventDefault();
    const { getGames, cleanUpGames } = this.props;
    randomGame()
      .then(data => cleanUpGames([data.game]))
      .then(data => getGames(data))
      .catch(error => console.log(error))
    this.setState({ isPushed: true })
  }
  

  render() {
    if(this.state.isPushed) {
      return <Redirect to='/' />
    }
    return (
      <form className="search-form">
        <input 
          className="search search-input"
          type="text" 
          placeholder="Search by name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />
        <button 
          className="search"
          onClick={this.handleInputSubmit}>Submit Search</button>
        <button 
          className="search"
          onClick={this.handlePopularSubmit}>Show Popular Games</button>
        <button 
          className="search"
          onClick={this.handleRandomSubmit}>Show Random Game</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ getGames }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchForm);