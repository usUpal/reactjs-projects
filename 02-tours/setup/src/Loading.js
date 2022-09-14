import React from 'react';
import loading from './assets/loading.gif';

const Loading = () => {
  return (
    <div className="loading">
      <h2> Loading...</h2>
      <img src={loading}/>
    </div>
  );
};

export default Loading;
