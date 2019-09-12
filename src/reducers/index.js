import { combineReducers } from 'redux';
import { games } from './games';
import { categories } from './categories';

export const rootReducer = combineReducers({
  games,
  categories
})