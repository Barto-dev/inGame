import React from 'react';
import Favorite from "../Favorite/Favorite";
import {RepoInterface} from "./Repo.interface";
import style from './Repo.module.css';

const RepositoriesItem = ({
                            avatar_url,
                            login,
                            name,
                            stargazers_count,
                            description,
                            html_url,
                            language,
                            id
                          }: RepoInterface): JSX.Element => {
  return (
    <div className={style.item}>
      <div className={style.wrapper}>
        <img src={avatar_url}
             alt={`${login} avatar`}
             className={style.avatar}
             width={50}
             height={50} />
        <span>{name}</span>
        <span>{stargazers_count}</span>
        <span>{description}</span>
        <span>{html_url}</span>
        <span>{language}</span>
        <Favorite repoId={id} />
      </div>
    </div>
  );
};

export default RepositoriesItem;
