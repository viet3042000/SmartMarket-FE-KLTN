import React from 'react';
import { withRouter } from 'react-router-dom';
const User = () => {
  return (
    <div className="h-screen grid grid-cols-2 max-w-full">
      <p>chipu</p>
      <p>eric</p>
    </div>
  );
};

export default withRouter(User);