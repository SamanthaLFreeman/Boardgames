import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  render() {
  const { name, year_published, min_players, max_players, min_playtime, max_playtime, description_preview, image_url, primary_publisher, categoriesIds, rules_url, categoriesKey, house_rules } = this.props;
  const displayCategories = categoriesIds.map(category => category.id).reduce((acc, id) => {
    categoriesKey.forEach(key => {
      if(id === key.id) {
        acc.push(key.name)
      }
    })
    return acc;
  }, []).map(categoryName => <li key={categoryName}>{categoryName}</li>)
  return (
    <section>
      <form>
        <input
          type="text"
          name="house_rules"
          value={this.state.house_rules}
          onChange={this.handleChange}/>
        <button>Add Changes</button>
      </form>
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>Year Published: {year_published}</p>
      <p>Min Players: {min_players}</p>
      <p>Max Players: {max_players}</p>
      <p>Min Playtime: {min_playtime}</p>
      <p>Max Playtime: {max_playtime}</p>
      <p>{description_preview}</p>
      <p>Primary Publisher: {primary_publisher}</p>
      <p>Categories:</p>
      <ul>
        {displayCategories}
      </ul>
      <p>Rules: {rules_url}</p>
      <p>House Rules: {house_rules} </p>
    </section>
  )
  }
}

export const mapStateToProps = state => ({
  categoriesKey: state.categories
})

export default connect(mapStateToProps, null)(CardDetails);