import {FullRepo, Repo} from "../interfaces/github.interface";

export const transformData = (data: FullRepo[]): Repo[] => {
  return data.map((item) => {
    const {owner, name, stargazers_count, description, html_url, language, id} = item;
    return {
      login: owner.login,
      avatar_url: owner.avatar_url,
      name,
      stargazers_count,
      description,
      html_url,
      language: language || 'Other',
      id,
      show: true,
      favorite: false
    }
  });
}
