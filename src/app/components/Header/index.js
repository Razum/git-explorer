import React from 'react';

import style from './style.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.topNav}>
      <a href="#123">link</a>
      <a href="#234">link 2</a>
    </div>
    <div className={style.copy}>
      <h1>Title</h1>
      <div>just a text</div>
    </div>
  </header>
);

export default Header;
