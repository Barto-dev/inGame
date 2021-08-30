import {produce} from 'immer';
import {Action} from "../actions";
import {ActionTypes} from "../action-types";
import {Repo} from "../../interfaces/github.interface";

interface RepositoriesState {
  loading: boolean,
  error: string | null,
  data: Repo[],
  favorite: Repo[],
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
  favorite: [],
}

// Why i took immer
// Immer allows for the use of normal JavaScript, objects, maps and arrays without any need to learn a new API
// Bundle size immer: 5.5kb https://bundlephobia.com/package/immer@9.0.5
// Bundle size immutable.js: 17.5kb https://bundlephobia.com/package/immutable@4.0.0-rc.14
// The size difference is three times
const repositoryReducer = produce((state: RepositoriesState = initialState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      state.loading = true;
      state.error = null;
      state.data = [];
      return state;
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      state.loading = false;
      state.error = null;
      state.data = action.payload;
      return state;
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      state.loading = false;
      state.error = action.payload;
      state.data = [];
      return state;
    case ActionTypes.SET_FAVORITE_REPOSITORIES:
      state.favorite = action.payload;
      return state;
    case ActionTypes.ADD_FAVORITE_REPOSITORY:
      const favItem = state.data.find(repo => repo.id === action.payload);
      const indexItemInRepo = state.favorite.findIndex((repo) => repo.id === action.payload);
      if (favItem && indexItemInRepo === -1) {
        favItem.favorite = true;
        state.favorite.push(favItem)
      }
      return state;
    case ActionTypes.DELETE_FAVORITE_REPOSITORY:
      const index = state.favorite.findIndex(repo => repo.id === action.payload);
      if (index !== -1) {
        state.favorite.splice(index, 1);
      }
      return state;
    case ActionTypes.REPOSITORIES_FILTER:
      // It may seem strange to decide to filter the original array,
      // but this way we don't have to keep two practically identical data structures in memory
      if (action.payload === 'all') {
        state.data = state.data.map(item => ({...item, show: true}))
      } else {
        state.data = state.data.map(item => {
          return item.language !== action.payload ? {...item, show: false} : {...item, show: true}
        });
      }
      return state;
    default:
      return state
  }
}, initialState)

export default repositoryReducer;
