import {ActionTypes} from "../action-types";
import {Item} from "./Repo.interface";

interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
    payload: Item[]
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

export type Action = SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction
  | AddFavoriteRepositoriesAction
  | DeleteFavoriteRepositoriesAction
