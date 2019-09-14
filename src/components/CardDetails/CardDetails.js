import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateGame } from '../../actions';

export class CardDetails extends Component {
  constructor() {
    super();
    this.state = {
      house_rules: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    const { updateGame } = this.props;
    e.preventDefault();
    const updatedGame = {
      ...this.props,
      house_rules: this.state.house_rules
    }
    updateGame(updatedGame)
  }

  render() {
  const { id, name, year_published, min_players, max_players, min_playtime, max_playtime, description_preview, image_url, primary_publisher, categoriesIds, rules_url, categoriesKey, house_rules, ownedGames } = this.props;
  const displayCategories = categoriesIds.map(category => category.id).reduce((acc, id) => {
    categoriesKey.forEach(key => {
      if(id === key.id) {
        acc.push(key.name)
      }
    })
    return acc;
  }, []).map(categoryName => <li key={categoryName}>{categoryName}</li>);
  const checkOwned = ownedGames.map(game => game.id).includes(id)
  const categoriesCheck = !!categoriesIds.length;
  return (
    <section>
      {checkOwned && <form>
        <input
          type="text"
          name="house_rules"
          value={this.state.house_rules}
          onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Add Changes</button>
      </form>}
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>Year Published: {year_published}</p>
      <p>Min Players: {min_players}</p>
      <p>Max Players: {max_players}</p>
      <p>Min Playtime: {min_playtime}</p>
      <p>Max Playtime: {max_playtime}</p>
      { description_preview && <p>{description_preview}</p> }
      { primary_publisher && <p>Primary Publisher: {primary_publisher}</p>}
      { categoriesCheck &&<p>Categories:</p>}
      <ul>
        {displayCategories}
      </ul>
      { rules_url && <p>Rules: {rules_url}</p> }
      { house_rules && <p>House Rules: {house_rules} </p> }
    </section>
  )
  }
}

export const mapStateToProps = state => ({
  categoriesKey: state.categories,
  ownedGames: state.ownedGames
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateGame }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);