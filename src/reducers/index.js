import { combineReducers } from 'redux';
import { games } from './games';
import { categories } from './categories';
import { favorites } from './favorites';
import { ownedGames } from './owned';

export const rootReducer = combineReducers({
  games,
  categories,
  favorites,
  ownedGames
})