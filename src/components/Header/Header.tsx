import React from 'react';
import {Link} from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.row}>
          <Link to="/">Home</Link>
          <Link to="/favorite">Favorite</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
