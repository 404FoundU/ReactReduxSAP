import React, {Component} from 'react';


const StarRating = (props) => {
  return (
    this.props.wines
      .map(wine =>
      <li  className="wine">
        {wine.name}
      </li>)
  );
};


export default StarRating;
