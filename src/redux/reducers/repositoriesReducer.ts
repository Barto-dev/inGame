import {produce} from 'immer';
import {Action} from "../actions";
import {ActionTypes} from "../action-types";
import {Item} from "../actions/Repo.interface";

interface RepositoriesState {
  loading: boolean,
  error: string | null,
  data: Item[],
  favorite: Item[]
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
  favorite: []
}

const repositoryReducer = produce((state: RepositoriesState = initialState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return {loading: true, error: null, data: [], favorite: []}
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {loading: false, error: null, data: action.payload, favorite: []}
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return {loading: false, error: action.payload, data: [], favorite: []}
    case ActionTypes.ADD_FAVORITE_REPOSITORY:
      const favItem = state.data.find(repo => repo.id === action.payload);
      console.log(favItem);
      if (favItem) state.favorite.push(favItem)
      return state;
    case ActionTypes.DELETE_FAVORITE_REPOSITORY:
      const index = state.favorite.findIndex(repo => repo.id === action.payload);
      if (index !== -1) state.favorite.splice(index, 1)
      return state;
    default:
      return state
  }
}, initialState)

export default repositoryReducer;
