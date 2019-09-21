import React from 'react';
import {
  FaLinkedin, FaGithub, FaXing, FaHome, FaLink
} from 'react-icons/fa';
import {
  Link
} from 'react-router-dom';

import style from './style.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.topNav}>
      <Link aria-label="Home" to="/" title="Git explorer" className="mra"><FaHome /></Link>
      <a aria-label="Home" href="https://razumieienko.com/#about" target="_blank" rel="noopener noreferrer" title="Roman Razumieienko website"><FaLink /></a>
      <a aria-label="Linkedin" href="https://www.linkedin.com/in/roman-razumieienko/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
      <a aria-label="Github" href="https://github.com/Razum" target="_blank" rel="noopener noreferrer" title="Github"><FaGithub /></a>
      <a aria-label="Xing" href="https://www.xing.com/profile/Roman_Razumieienko/cv" target="_blank" rel="noopener noreferrer" title="Xing"><FaXing /></a>
    </div>
    <div className={style.copy}>
      <h1>Title</h1>
      <div>just a text</div>
    </div>
  </header>
);

export default Header;
