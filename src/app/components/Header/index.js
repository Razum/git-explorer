import React from 'react';

import style from './style.scss';

console.log(style);

const Header = () => (
  <header className={style.header}>
    <div className={style.topNav}>
      <a href="#123">link</a>
      <a href="#234">link 2</a>
    </div>
    <h1>Title</h1>
    <div>just a text</div>
  </header>
);

export default Header;
