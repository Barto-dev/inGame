import {Repo} from "../interfaces/github.interface";

export const mergeFavAndRepoArrays = (repoList: Repo[], favList: Repo[]): Repo[] => {
  const favIdx = favList.map((favRepo) => favRepo.id);
  return repoList.map((repoItem) => {
    if (favIdx.includes(repoItem.id)) {
      return {...repoItem, favorite: true}
    } else {
      return {...repoItem}
    }
  });
}
