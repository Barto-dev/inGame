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

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction
