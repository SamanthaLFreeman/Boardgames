import React, { Component } from 'react';
import { getGames, getCategories, addFavorite, removeFavorite, addOwned, removeOwned } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPopularGames, getAllCategories } from '../../util/apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import CardDetails from '../CardDetails/CardDetails';
import Nav from '../../components/Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import { Route, Redirect } from 'react-router-dom';


export class App extends Component {
  componentDidMount() {
    const { getGames, getCategories } = this.props;
    getPopularGames()
      .then(data => this.cleanUpGames(data.games))
      .then(data => getGames(data))
      .catch(error => console.log(error))

    getAllCategories()
      .then(data => getCategories(data.categories))
      .catch(error => console.log(error))
  }

  toggleFavorite = (favorite, bool) => {
    const { addFavorite, removeFavorite } = this.props;
    if(!bool) {
      addFavorite(favorite)
    } else {
      removeFavorite(favorite)
    }
  }

  toggleOwned = (game, bool) => {
    const { addOwned, removeOwned } = this.props;
    if(!bool) {
      addOwned(game);
    } else {
      removeOwned(game);
    }
  }

  cleanUpGames = games => {
    return games.map(game => {
      return {
        id: game.id,
        name: game.name,
        year_published: game.year_published,
        min_players: game.min_players,
        max_players: game.max_players,
        min_playtime: game.min_playtime,
        max_playtime: game.max_playtime,
        description_preview: game.description_preview,
        image_url: game.image_url,
        primary_publisher: game.primary_publisher,
        categoriesIds: game.categories,
        rules_url: game.rules_url,
        house_rules: null
      }
    })
  }
  
  render() {
    const { currentGames, ownedGames } = this.props
    return(
      <main className='app'>
        <Nav />
        <Route exact path='/searchform' render={() => <SearchForm cleanUpGames={this.cleanUpGames} /> } />
        <Route exact path='/' render={() => <CardContainer 
          toggleFavorite={this.toggleFavorite}
          toggleOwned={this.toggleOwned}
          type={'games'} />} />
        <Route exact path='/favorites' render={() => <CardContainer 
          toggleFavorite={this.toggleFavorite}
          toggleOwned={this.toggleOwned}
          type={'favorites'} />} />
        <Route exact path='/owned' render={() => <CardContainer
          toggleFavorite={this.toggleFavorite}
          toggleOwned={this.toggleOwned}
          type={'ownedGames'} />} />
        
        <Route path='/card/:id' render={({ match }) => {
          if (currentGames.length === 0) {
            return <Redirect to='/' />
          }
          let targetCard = ownedGames.find(card => card.id === match.params.id);
          if(!targetCard) {
            targetCard = currentGames.find(card => card.id === match.params.id);
          }
          return <CardDetails {...targetCard} />
        }} />
      </main>
    )
  }

}

export const mapStateToProps = state => ({
  currentGames: state.games,
  categories: state.categories,
  ownedGames: state.ownedGames
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ getGames, getCategories, addFavorite, removeFavorite, addOwned, removeOwned }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
