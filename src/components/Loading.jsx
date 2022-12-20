import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="absolute top-[10%] right-0 left-0">
      <LoadingBar />
    </div>
  );
}

export default Loading;
