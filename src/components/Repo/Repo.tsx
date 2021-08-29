import React from 'react';
import Favorite from "../Favorite/Favorite";
import {Repo} from "../../interfaces/github.interface";

import style from './Repo.module.css';
import repoIcon from './img/repo-icon.svg';
import starIcon from './img/star-icon.svg';

const RepositoriesItem = ({
                            avatar_url,
                            login,
                            name,
                            stargazers_count,
                            description,
                            html_url,
                            language,
                            id,
                            favorite
                          }: Repo): JSX.Element => {
  return (
    <div className={style.item}>
      <div className={style.wrapper}>

        <div className={style.top}>
          <img src={avatar_url}
               alt={`${login} avatar`}
               className={style.avatar}
               width={50}
               height={50} />

          <div className={style.name}>
            <img src={repoIcon} alt="icon" aria-hidden={true} width={20} height={20} />
            <span>{name}</span>
          </div>

          <div className={style.star}>
            <img src={starIcon} alt="icon" aria-hidden={true} width={20} height={20} />
            <span>{stargazers_count}</span>
          </div>

        </div>

        {name === 'Formurai' && (
          <div className={style.advert}>Hello, Ben, Natalya, Vika! Sorry, but I just have to advertise my library:)))</div>
        )}

        <span>{description}</span>
        <a href={html_url} target="_blank" rel="noreferrer noopener" className={style.link}>{html_url}</a>

        <div className={style.bottom}>
          <span className={style.language}>Language: {language}</span>
          <Favorite repoId={id} isFavorite={favorite} />
        </div>

      </div>
    </div>
  );
};

export default RepositoriesItem;
