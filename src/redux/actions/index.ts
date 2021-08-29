import {ActionTypes} from "../action-types";
import {Repo} from "../../interfaces/github.interface";

interface SearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: Repo[]
}

interface SearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string
}

interface AddFavoriteRepositoriesAction {
  type: ActionTypes.ADD_FAVORITE_REPOSITORY,
  payload: number
}

interface DeleteFavoriteRepositoriesAction {
  type: ActionTypes.DELETE_FAVORITE_REPOSITORY;
  payload: number
}

interface FilterRepositoriesAction {
  type: ActionTypes.REPOSITORIES_FILTER,
  payload: string
}

export type Action = SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction
  | AddFavoriteRepositoriesAction
  | DeleteFavoriteRepositoriesAction
  | FilterRepositoriesAction
