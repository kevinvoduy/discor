import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './comments.sass';

const levy = 'https://frostsnow.com/uploads/biography/2017/11/16/levy-tran.gif';

const Comment = props => (
  <div className="comment">
    <img src={levy} alt="" id="imageURL" />
    <div className="name__comment">
      <p><strong>{props.owner}</strong>{' - '}{props.comment}</p>
    </div>
    <p id="createdAt">{moment(props.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow(true)}</p>
  </div>
);

Comment.propTypes = {
  owner: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  // imageURL: PropTypes.string.isRequired,
};

export default Comment;
