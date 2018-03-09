import React from 'react';
import style from './nomatch.scss';

const NoMatch = () => (
  <div className={style.nomatch}>
    <div className={style.title}>404</div>
    <div className={style.desc}>no page found</div>
  </div>
);
export default NoMatch;
