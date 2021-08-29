import {ActionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";
import axios from "axios";
import {transformData} from "../../../utils/transformData";

export const searchRepositories = (term: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionTypes.SEARCH_REPOSITORIES});
  try {
    const {data} = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: term
      }
    })

    const repositoriesList = transformData(data.items);

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

export const filterRepositories = (value: string) => (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionTypes.REPOSITORIES_FILTER, payload: value})
}

export const addToFavoriteRepositories = (id: number) => (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionTypes.ADD_FAVORITE_REPOSITORY, payload: id})
}

export const deleteFavoriteRepositories = (id: number) => (dispatch: Dispatch<Action>) => {
  dispatch({type: ActionTypes.DELETE_FAVORITE_REPOSITORY, payload: id})
}
