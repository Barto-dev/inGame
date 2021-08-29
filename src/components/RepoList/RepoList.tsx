import React from 'react';
import Repo from "../Repo/Repo";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const RepoList = () => {
  const {data, loading, error} = useTypedSelector((state) => state.repositories)
  return (
    <div>
      {error && <h3>{error}</h3>}
      {loading && <h3>{loading}</h3>}
      {data.map((item) => <Repo key={item.id} {...item}/>)}
    </div>
  );
};

export default RepoList;
