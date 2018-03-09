import React from 'react';
import './skeleton.scss';

const Skeleton = () => (
  <div className="skeleton">
    <div className="row">
      <div className="col w-100 w-sm-33 mb3">
        <div className="photo animated" />
      </div>
      <div className="col w-100 w-sm-66">
        <div className="text animated" />
        <div className="text animated" />
        <div className="text animated" />
        <div className="text animated" />
        <div className="text animated" />
        <div className="text animated" />
      </div>
    </div>
    <div className="flex">
      <div className="avatar animated" />
      <div className="avatar animated" />
      <div className="avatar animated" />
      <div className="avatar animated" />
      <div className="avatar animated" />
    </div>
    <div className="map animated" />
  </div>
);

export default Skeleton;
