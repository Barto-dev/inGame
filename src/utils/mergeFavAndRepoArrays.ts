import {Repo} from "../interfaces/github.interface";

export const mergeFavAndRepoArrays = (repoList: Repo[], favList: Repo[]): Repo[] => {
  const favIdx = favList.map((favRepo) => favRepo.id);
  const newList = repoList.map((repoItem) => {
    if (favIdx.includes(repoItem.id)) {
      return {...repoItem, favorite: true}
    } {
      return {...repoItem}
    }
  })
  return newList;
}
