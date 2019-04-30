import React from 'react';
import './not-found-page.scss';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      404 not found :(
      <Link to="/"><p>Back to home</p></Link>
    </div>
  );
};

export default NotFoundPage;
