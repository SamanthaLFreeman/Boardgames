import React, { Component } from 'react';
import { getGames, getCategories } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPopularGames, getAllCategories } from '../../util/apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import CardDetails from '../../components/CardDetails/CardDetails';
import { Route } from 'react-router-dom';


export class App extends Component {
  componentDidMount() {
    const { getGames, getCategories } = this.props;
    getPopularGames()
      .then(data => getGames(data.games))
      .catch(error => console.log(error))

    getAllCategories()
      .then(data => getCategories(data.categories))
      .catch(error => console.log(error))
  }
  
  render() {
    const { currentGames } = this.props
    return(
      <main>
        <h1>Deck Building</h1>
        <Route exact path='/' render={() => <CardContainer />} />
        <Route path='/card/:id' render={({ match }) => {
          let targetCard = currentGames.find(card => card.id === match.params.id);
          return <CardDetails {...targetCard} />
        }} />
      </main>
    )
  }

}

export const mapStateToProps = state => ({
  currentGames: state.games
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ getGames, getCategories }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
