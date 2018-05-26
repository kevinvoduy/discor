import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => (
  <div className="comment">
    <img src="" alt="" id="imageURL" />
    <h4 id="owner">{props.owner}</h4>
    <p id="comment">{props.comment}</p>
  </div>
);

Comment.propTypes = {
  owner: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  // createdAt: PropTypes.string.isRequired,
  // imageURL: PropTypes.string.isRequired,
};

export default Comment;
