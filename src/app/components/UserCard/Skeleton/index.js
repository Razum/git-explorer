import React from 'react';
import style from './skeleton.scss';

const Skeleton = () => (
  <div className={style.skeleton}>
    <div className="row">
      <div className="col w-100 w-sm-50 mb3">
        <div className={`${style.photo} ${style.animated}`} />
      </div>
      <div className="col w-100 w-sm-50">
        <div className={`${style.text} ${style.animated}`} />
        <div className={`${style.text} ${style.animated}`} />
        <div className={`${style.text} ${style.animated}`} />
        <div className={`${style.text} ${style.animated}`} />
        <div className={`${style.text} ${style.animated}`} />
        <div className={`${style.text} ${style.animated}`} />
      </div>
    </div>
    <div className="flex">
      <div className={`${style.avatar} ${style.animated}`} />
      <div className={`${style.avatar} ${style.animated}`} />
      <div className={`${style.avatar} ${style.animated}`} />
      <div className={`${style.avatar} ${style.animated}`} />
      <div className={`${style.avatar} ${style.animated}`} />
    </div>
  </div>
);

export default Skeleton;
