import React from 'react';
import {Link} from "react-router-dom";

import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div className="wrapper">
        <div className={style.row}>
          <Link to="/">Home</Link>
          <Link to="/favorite">Favorite</Link>
          <a href="https://barto-dev.github.io/" className={style.matrix}>Enter to Matrix</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
