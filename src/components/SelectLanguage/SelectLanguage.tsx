import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

import styles from './SelectLanguage.module.css';

const SelectLanguage = () => {
  const {data} = useTypedSelector((state) => state.repositories);
  const langArr = data.map((item) => item.language);
  const uniqueLanguage = [...new Set(langArr)];
  const {filterRepositories} = useActions();

   const onSelectChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
     filterRepositories(evt.target.value)
   }

  return (
    <div>
      {!!uniqueLanguage.length && (
        <select className={styles.select}
                onChange={onSelectChange}
                aria-label="Filter repositories language">
          <option value="all">All</option>
          {uniqueLanguage.map((item) => {
            return (<option key={item} value={item}>{item}</option>)
          })}
        </select>
      )}

    </div>
  );
};

export default SelectLanguage;
