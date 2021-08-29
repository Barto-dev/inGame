import {ActionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";
import axios from "axios";

export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionTypes.SEARCH_REPOSITORIES});
  try {
    const {data} = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: term
      }
    })

    const repositoriesList = data.items;

    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
      payload: repositoriesList
    })
  } catch (err) {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
      payload: 'qewqew'
    })
  }
}
