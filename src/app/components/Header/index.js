import React from 'react';
import {
  FaLinkedinSquare, FaGithub, FaXing, FaHome,
} from 'react-icons/lib/fa';

import style from './style.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.topNav}>
      <a aria-label="Home" href="https://razumieienko.com/#about" title="Roman Razumieienko website"><FaHome /></a>
      <a aria-label="Linkedin" href="https://www.linkedin.com/in/roman-razumieienko/" title="LinkedIn"><FaLinkedinSquare /></a>
      <a aria-label="Github" href="https://github.com/Razum" title="Github"><FaGithub /></a>
      <a aria-label="Xing" href="https://www.xing.com/profile/Roman_Razumieienko/cv" title="Xing"><FaXing /></a>
    </div>
    <div className={style.copy}>
      <h1>Title</h1>
      <div>just a text</div>
    </div>
  </header>
);

export default Header;
